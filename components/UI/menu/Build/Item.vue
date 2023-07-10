<template>
  <div
    class="mx-5 mb-10 flex h-72 basis-48 flex-col justify-between rounded-xl bg-slate-700 text-slate-200"
  >
    <div class="text-center">{{ data.name }}</div>
    <div class="text-center">Size: {{ data.tabSize }}</div>
    <button @click="build">{{ data.price.coins }} coins</button>
  </div>
</template>

<script setup>
import { useSceneParamsStore } from '@/store/sceneParams';
const state = useSceneParamsStore();

const props = defineProps({
  data: {
    type: Object,
    require: true
  }
});

const build = () => {
  state.buildBuilding(props.data.name, props.data.tabSize);
};
</script>
