<template>
  <div class="mx-5 mb-10 h-72 shrink-0 basis-48 rounded-xl bg-slate-700">
    <div class="text-white">{{ data.name }}</div>
  </div>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Object,
    require: true
  }
});
</script>
