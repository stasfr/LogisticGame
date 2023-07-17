<template>
  <div class="absolute inset-0 overflow-hidden bg-slate-700">
    <div
      class="absolute inset-0 left-16 w-full overflow-hidden"
      :class="[isDragging ? 'cursor-move' : '']"
      @pointerdown="onMouseDown"
      @pointermove="onMouseMove"
      @pointerup="onMouseUp"
      @pointerleave="onMouseUp"
    >
      <div
        ref="container"
        class="absolute bottom-[240px] left-[37px] right-[212px] top-[52px] touch-none overflow-auto"
      >
        <Scene :sceneOptions="sceneOption" :lineOptions="lineOption" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useSceneParamsStore } from '@/store/sceneParams';
const state = useSceneParamsStore();

const sceneOption = state.sceneTabs;
const lineOption = state.sceneLines;

const container = ref(null);
const isDragging = ref(false);
const startPos = reactive({ x: 0, y: 0 });
const currentPos = reactive({ x: 0, y: 0 });

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
</script>
