<template>
  <div class="absolute inset-0 overflow-hidden bg-slate-900">
    <Scene :sceneOptions="sceneOption" />
  </div>
</template>

<script setup>
import { useSceneParamsStore } from '@/store/sceneParams';
const state = useSceneParamsStore();

const sceneOption = state.scene;
</script>
