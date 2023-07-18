<template>
  <svg
    class="min-w-3168 min-h-2712 absolute left-0 top-0 block h-full w-full select-none overflow-hidden bg-slate-900"
  >
    <TabBlock
      v-for="block in props.sceneBlocks"
      :key="block.id"
      :block="block"
    />
  </svg>
</template>

<script setup>
const props = defineProps({
  sceneBlocks: {
    type: Array,
    require: true
  }
});
</script>
