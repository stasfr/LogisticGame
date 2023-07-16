<template>
  <div class="absolute inset-0 overflow-hidden bg-slate-400">
    <Scene :sceneOptions="sceneOption" :lineOptions="lineOption" />
  </div>
</template>

<script setup>
import { useSceneParamsStore } from '@/store/sceneParams';
const state = useSceneParamsStore();

const sceneOption = state.sceneTabs;
const lineOption = state.sceneLines;

// const container = ref(null);
// const isDragging = ref(false);
// const startPos = reactive({ x: 0, y: 0 });
// const currentPos = reactive({ x: 0, y: 0 });

// const onMouseDown = event => {
//   if (event.button === 1) {
//     // Нажатие на колесико мыши
//     isDragging.value = true;
//     startPos.x = event.clientX;
//     startPos.y = event.clientY;
//   }
// };

// const onMouseMove = event => {
//   if (isDragging.value) {
//     const deltaX = event.clientX - startPos.x;
//     const deltaY = event.clientY - startPos.y;
//     currentPos.x += deltaX;
//     currentPos.y += deltaY;
//     startPos.x = event.clientX;
//     startPos.y = event.clientY;
//     container.value.style.transform = `translate(${currentPos.x}px, ${currentPos.y}px)`;
//   }
// };

// const onMouseUp = () => {
//   isDragging.value = false;
// };

// const onMouseWheel = event => {
//   // Обработка прокрутки колесика мыши (если необходимо)
// };
</script>

<style>
.container {
  position: absolute;
  inset: 52px 240px 37px 212px;
  touch-action: none;
  overflow: auto;
}
</style>
