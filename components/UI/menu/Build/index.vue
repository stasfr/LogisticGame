<template>
  <div
    class="flex max-h-[90%] flex-wrap justify-around overflow-hidden overflow-y-scroll px-10 scrollbar-thin scrollbar-track-slate-950 scrollbar-thumb-slate-700"
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
