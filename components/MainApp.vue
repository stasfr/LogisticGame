<template>
  <UISidebar />
  <div @mousedown="test" @wheel.prevent class="h-screen w-screen bg-slate-400">
    <div
      :class="[isDragging ? 'cursor-move' : '']"
      @mousedown="onMouseDown"
      @mousemove="onMouseMove"
      @mouseup="onMouseUp"
      @mouseleave="onMouseUp"
      @wheel="onMouseWheel"
      ref="container"
      class="container bg-slate-400"
    >
      <Playground class="" />
    </div>
    <UIMenuWindow v-if="state.isShowWindow"></UIMenuWindow>
  </div>
</template>

<script setup>
import { useUIStore } from '@/store/ui';
const state = useUIStore();

const container = ref(null);
const isDragging = ref(false);
const startPos = reactive({ x: 0, y: 0 });
const currentPos = reactive({ x: 0, y: 0 });

const test = event => {
  if (event.button === 1) {
    event.preventDefault();
  }
};

const onMouseDown = event => {
  if (event.button === 1) {
    // Нажатие на колесико мыши
    event.preventDefault();
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

const onMouseWheel = event => {
  // Обработка прокрутки колесика мыши (если необходимо)
  if (event.button === 1) {
    event.preventDefault();
  }
};
</script>

<style>
.container {
  position: absolute;
  inset: 52px 240px 37px 212px;
  touch-action: none;
  overflow: auto;
}
</style>
