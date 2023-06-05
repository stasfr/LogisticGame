<template>
  <g class="cursor-grab">
    <!-- main background -->
    <rect
      :x="props.options.x"
      :y="props.options.y"
      :width="props.options.width"
      :height="props.options.height"
      rx="10"
      class="fill-slate-300 stroke-slate-600 stroke-1 hover:stroke-slate-950"
      @mousedown="moveTab"
    />

    <g class="fill-slate-500">
      <!-- header top -->
      <rect
        :x="props.options.x"
        :y="props.options.y"
        :width="props.options.width"
        :height="props.options.height * 0.2"
        rx="10"
      />

      <!-- header bottom -->
      <rect
        :x="props.options.x"
        :y="props.options.y + props.options.height * 0.1"
        :width="props.options.width"
        :height="props.options.height * 0.1"
      />
    </g>

    <text
      :x="props.options.x + props.options.width / 2"
      :y="props.options.y + props.options.height / 10"
      dominant-baseline="middle"
      text-anchor="middle"
      fill="white"
      >{{ props.options.id }}. w:{{ props.options.width }}, h:{{
        props.options.height
      }}</text
    >
  </g>
</template>

<script setup>
const props = defineProps({
  options: {
    type: Object,
    require: true
  }
});

const moveTab = event => {
  console.log(event);
};
</script>
