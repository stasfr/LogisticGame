<template>
  <circle
    :r="r"
    class="cursor-alias fill-white stroke-slate-600 stroke-1 hover:stroke-slate-950 hover:opacity-80"
    :cx="props.cx"
    :cy="props.cy"
    @pointerdown="startDrawLine"
    @pointerenter="increaseDotSize"
    @pointerleave="decreaseDotSize"
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
  () => [props.cx, props.cy],
  () => {
    state.dots[props.blockId][props.tabId][props.dotId].forEach(element => {
      if (element.coords === 1) {
        state.sceneBlocks[props.blockId].lines[element.id].x1 = props.cx;
        state.sceneBlocks[props.blockId].lines[element.id].y1 = props.cy;
      } else {
        state.sceneBlocks[props.blockId].lines[element.id].x2 = props.cx;
        state.sceneBlocks[props.blockId].lines[element.id].y2 = props.cy;
      }
    });
  }
);

const r = ref(5);

const increaseDotSize = () => {
  r.value = 10;
};

const decreaseDotSize = () => {
  r.value = 5;
};

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
