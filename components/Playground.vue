<template>
  <div class="absolute inset-0 overflow-hidden bg-slate-700">
    <div
      class="absolute inset-0 left-16 overflow-hidden"
      :class="[isDragging ? 'cursor-move' : '']"
      @pointerdown="onMouseDown"
      @pointermove="onMouseMove"
      @pointerup="onMouseUp"
      @pointerleave="onMouseUp"
      @wheel="onWheel"
    >
      <div
        ref="container"
        class="absolute bottom-[240px] left-[37px] right-[212px] top-[52px] h-[750px] w-[1250px] touch-none overflow-auto"
        :style="{ transform: `translate(${currentPos.x}px, ${currentPos.y}px) scale(${zoomLevel})` }"
      >
        <Scene :sceneBlocks="sceneBlocks" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useSceneParamsStore } from '@/store/sceneParams';
const state = useSceneParamsStore();

const sceneBlocks = state.sceneBlocks;

const container = ref(null);
const isDragging = ref(false);
const startPos = reactive({ x: 0, y: 0 });
const currentPos = reactive({ x: 0, y: 0 });
const zoomLevel = ref(1); // Начальное положение


const onMouseDown = event => {
  if (event.button === 1) {
    // Нажатие на колесико мыши
    event.target.setPointerCapture(event.pointerId);
    isDragging.value = true;
    startPos.x = event.clientX;
    startPos.y = event.clientY;
  }
};

const onMouseMove = event => {
  if (isDragging.value) {
    const deltaX = event.clientX - startPos.x;
    const deltaY = event.clientY - startPos.y;
    currentPos.x += deltaX;
    currentPos.y += deltaY;
    startPos.x = event.clientX;
    startPos.y = event.clientY;
    container.value.style.transform = `translate(${currentPos.x}px, ${currentPos.y}px)`;
  }
};

const onMouseUp = () => {
  isDragging.value = false;
};

const onWheel = event => {
  // Zoom 
  const zoomIntensity = 0.05; //Скорость приближения/отдаления
  event.preventDefault();
  const zoomDirection = event.deltaY > 0 ? -1 : 1;
  zoomLevel.value = Math.max(0.1, Math.min(zoomLevel.value + zoomDirection * zoomIntensity, 3)); // Регулировка пределов масштабирования (min: 0.1, max: 3)
};
</script>