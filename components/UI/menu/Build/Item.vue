<template>
  <div
    class="mx-5 mb-10 flex h-72 basis-48 flex-col justify-between rounded-xl bg-slate-700 text-slate-200"
  >
    <div class="">{{ data.name }}</div>
    <button class="">Build</button>
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
