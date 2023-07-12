<template>
  <svg
    class="l-0 t-0 min-w-3168 min-h-2712 absolute block h-full w-full select-none overflow-hidden bg-slate-900"
  >
    <Tab v-for="test in props.sceneOptions" :key="test.id" :options="test" />
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
