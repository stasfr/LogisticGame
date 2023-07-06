<template>
  <div class="absolute inset-0 overflow-hidden bg-slate-900">
    <Scene :sceneOptions="sceneOption" />
  </div>
</template>

<script setup>
import { useGameDataStore } from '@/store/gameData';
const state = useGameDataStore();

const sceneOption = state.scene;
</script>
