<template>
  <line
    :x1="x1"
    :y1="y1"
    :x2="x2"
    :y2="y2"
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

const x1 = toRef(props.options.x1);
const y1 = toRef(props.options.y1);
const x2 = toRef(props.options.x2);
const y2 = toRef(props.options.y2);

const deleteLine = () => {
  state.deleteLine(props.blockId, props.options.id);
};
</script>
