<template>
  <circle
    r="5"
    class="cursor-alias fill-white stroke-slate-600 stroke-1 hover:stroke-slate-950"
    @pointerdown="saveSourceTab"
    @pointerup="saveTerminationTab"
  />
</template>

<script setup>
const props = defineProps({
  id: {
    type: Number,
    require: true
  },
  dotId: {
    type: Number,
    require: true
  }
});

const saveSourceTab = event => {
  console.log(props.id, props.dotId);
};

const saveTerminationTab = event => {
  console.log(props.id, props.dotId);
};

const overDot = event => {
  console.log(props.id, props.dotId);
};
</script>
