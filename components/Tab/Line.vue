<template>
  <path
    :d="lineParams"
    fill="none"
    stroke="white"
    stroke-miterlimit="10"
    pointer-events="stroke"
    stroke-width="5"
    @click="test"
  ></path>
</template>

<script setup>
const props = defineProps({
  options: {
    type: Object,
    require: true
  }
});

const M1 = toRef(props.options.M1);
const M2 = toRef(props.options.M2);
const Q1 = toRef(props.options.Q1);
const Q2 = toRef(props.options.Q2);

const test = () => {
  M1.value += 100;
  M2.value += 100;
  lineParams.value = `M ${M1.value} ${M2.value} Q ${M1.value} ${M2.value} ${Q1.value} ${Q2.value}`;
};

const lineParams = toRef(null);
lineParams.value = `M ${M1.value} ${M2.value} Q ${M1.value} ${M2.value} ${Q1.value} ${Q2.value}`;
</script>
