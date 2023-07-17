<template>
  <UISidebar />
  <Playground />
  <UIMenuWindow v-if="state.isShowWindow"></UIMenuWindow>
</template>

<script setup>
import { useUIStore } from '@/store/ui';
const state = useUIStore();
</script>
