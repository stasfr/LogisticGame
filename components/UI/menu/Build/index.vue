<template>
  <div
    class="flex max-h-[90%] flex-wrap justify-around overflow-hidden overflow-y-scroll px-10"
  >
    <UIMenuBuildItem
      v-for="buildMenuItem in state.buildMenuItems"
      :key="buildMenuItem.id"
      :data="buildMenuItem"
    />
  </div>
</template>

<script setup>
import { useBuildStore } from '@/store/buildStore';
const state = useBuildStore();
</script>
