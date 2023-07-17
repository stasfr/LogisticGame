<template>
  <svg
    class="min-w-3168 min-h-2712 absolute left-0 top-0 block h-full w-full select-none overflow-hidden bg-slate-900"
  >
    <Tab v-for="tab in props.sceneOptions" :key="tab.id" :options="tab" />
    <TabLine v-for="line in props.lineOptions" :key="line.id" :options="line" />
  </svg>
</template>

<script setup>
const props = defineProps({
  sceneOptions: {
    type: Array,
    require: true
  },
  lineOptions: {
    type: Array,
    require: true
  }
});
</script>
