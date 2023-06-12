<template>
  <circle
    r="5"
    class="cursor-alias fill-white stroke-slate-600 stroke-1 hover:stroke-slate-950"
    @click="dotClick"
  />
</template>

<script setup>
const props = defineProps({
  id: {
    type: Number,
    require: true
  }
});

const dotClick = event => {
  console.log(event);
  console.log(props.id);
};
</script>
