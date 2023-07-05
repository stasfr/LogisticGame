<template>
  <div class="absolute inset-0 overflow-hidden bg-slate-900">
    <Scene :sceneOptions="changeOption()" />
  </div>
</template>

<script setup>
import { useAdminSceneStore } from '@/store/adminScene';
const state = useAdminSceneStore();

const changeOption = () => {
  if (state.currentOption === 'small') {
    return state.testOptionsSmall;
  } else {
    return state.testOptionsBig;
  }
};
</script>
