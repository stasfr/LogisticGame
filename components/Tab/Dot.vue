<template>
  <circle
    r="5"
    class="cursor-alias fill-white stroke-slate-600 stroke-1 hover:stroke-slate-950"
    :cx="props.cx"
    :cy="props.cy"
    @pointerdown="startDrawLine"
  />
</template>

<script setup>
import { useSceneParamsStore } from '@/store/sceneParams';
const state = useSceneParamsStore();

const props = defineProps({
  blockId: {
    type: Number,
    require: true
  },
  tabId: {
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

watch(
  () => props.cx,
  () => {
    state.sceneBlocks[props.blockId].lines.forEach(element => {
      if (
        element.firstDotId[0] === props.tabId &&
        element.firstDotId[1] === props.dotId
      ) {
        element.x1 = props.cx;
      }
      if (
        element.secondDotId[0] === props.tabId &&
        element.secondDotId[1] === props.dotId
      ) {
        element.x2 = props.cx;
      }
    });
  }
);

watch(
  () => props.cy,
  () => {
    state.sceneBlocks[props.blockId].lines.forEach(element => {
      if (
        element.firstDotId[0] === props.tabId &&
        element.firstDotId[1] === props.dotId
      ) {
        element.y1 = props.cy;
      }
      if (
        element.secondDotId[0] === props.tabId &&
        element.secondDotId[1] === props.dotId
      ) {
        element.y2 = props.cy;
      }
    });
  }
);

const startDrawLine = () => {
  state.setPointToLine(
    props.cx,
    props.cy,
    props.tabId,
    props.dotId,
    props.blockId
  );
};
</script>
