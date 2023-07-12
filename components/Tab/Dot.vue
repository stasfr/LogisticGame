<template>
  <circle
    r="5"
    class="cursor-alias fill-white stroke-slate-600 stroke-1 hover:stroke-slate-950"
    :cx="props.cx"
    :cy="props.cy"
    @pointerdown="startDrawLine"
    @pointerup="stopDrawLine"
  />
</template>

<script setup>
import { useSceneParamsStore } from '@/store/sceneParams';
const state = useSceneParamsStore();

const props = defineProps({
  id: {
    type: Number,
    require: true
  },
  dotId: {
    type: Number,
    require: true
  },
  cx: {
    type: Number,
    require: true
  },
  cy: {
    type: Number,
    require: true
  }
});

const startDrawLine = () => {
  state.setPointToLine(props.cx, props.cy);
};

// const stopDrawLine = ({ target }) => {
//   showData();
//   h('path');
//   target.removeEventListener('pointermove', move);
// };

// const move = ({ offsetX, offsetY }) => {
//   console.log(offsetX, offsetY);
// };

// const showData = () => {
//   console.log(props.id, props.dotId, props.cx, props.cy);
// };
</script>
