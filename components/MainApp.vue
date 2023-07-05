<template>
  <UISidebar />
  <!-- <Scene :sceneOptions="changeOption()" /> -->
  <!-- <BuildBtn />
  <AdminBtn /> -->
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
