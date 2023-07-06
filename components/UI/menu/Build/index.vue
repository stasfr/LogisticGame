<template>
  <div class="flex flex-wrap justify-around pl-10 pr-9">
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
