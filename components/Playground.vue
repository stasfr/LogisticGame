<template>
  <div class="absolute inset-0 overflow-hidden bg-slate-900">
    <Scene :sceneOptions="sceneOption" :lineOptions="lineOption" />
  </div>
</template>

<script setup>
import { useSceneParamsStore } from '@/store/sceneParams';
const state = useSceneParamsStore();

const sceneOption = state.sceneTabs;
const lineOption = state.sceneLines;
</script>
