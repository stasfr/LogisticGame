<template>
  <div>
    <UISidebar />
    <Playground />
    <UIMenuWindow v-if="state.isShowWindow"></UIMenuWindow>
  </div>
</template>

<script setup>
import { useUIStore } from '@/store/ui';
const state = useUIStore();
</script>
