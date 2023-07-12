<template>
  <path
    :d="lineParams"
    fill="none"
    stroke="white"
    stroke-miterlimit="10"
    pointer-events="stroke"
    stroke-width="5"
  ></path>
</template>

<script setup>
const props = defineProps({
  options: {
    type: Object,
    require: true
  }
});

const lineParams = `M ${props.options.M[0]} ${props.options.M[1]} Q ${props.options.Q[0]} ${props.options.Q[1]} ${props.options.Q[2]} ${props.options.Q[3]} `;
</script>
