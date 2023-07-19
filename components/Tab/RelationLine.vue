<template>
  <line
    :x1="props.options.x1"
    :y1="props.options.y1"
    :x2="props.options.x2"
    :y2="props.options.y2"
    fill="none"
    stroke="white"
    stroke-miterlimit="10"
    pointer-events="stroke"
    stroke-width="5"
    @click="deleteLine"
  ></line>
</template>

<script setup>
import { useSceneParamsStore } from '@/store/sceneParams';
const state = useSceneParamsStore();

const props = defineProps({
  blockId: {
    type: Number,
    require: true
  },
  options: {
    type: Object,
    require: true
  }
});

const deleteLine = () => {
  state.deleteLine(props.blockId, props.options.id);
};
</script>
