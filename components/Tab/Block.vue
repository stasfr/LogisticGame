<template>
  <Tab :options="props.block.tab" :id="props.block.id" />
  <TabLine
    v-for="line in props.block.lines"
    :key="line.id"
    :options="line"
    :blockId="props.block.id"
  />
</template>

<script setup>
const props = defineProps({
  block: {
    type: Object,
    require: true
  }
});
</script>
