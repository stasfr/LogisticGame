<template>
  <Tab
    v-for="tab in props.block.tabs"
    :key="tab.id"
    :options="tab"
    :blockId="props.block.id"
  />
  <TabRelationLine
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
