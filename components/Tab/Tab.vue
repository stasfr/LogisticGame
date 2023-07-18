<template>
  <g :class="cursorType">
    <!-- main background -->
    <rect
      :x="coordX"
      :y="coordY"
      :width="options.width"
      :height="options.height"
      rx="10"
      class="fill-slate-300 stroke-slate-600 stroke-1 hover:stroke-slate-950"
      @pointerdown="drag"
      @pointerup="drop"
    />

    <g class="fill-slate-500">
      <!-- header top -->
      <rect
        :x="coordX"
        :y="coordY"
        :width="options.width"
        :height="options.height * 0.2"
        rx="10"
        @pointerdown="drag"
        @pointerup="drop"
      />

      <!-- header bottom -->
      <rect
        :x="coordX"
        :y="coordY + options.height * 0.1"
        :width="options.width"
        :height="options.height * 0.1"
        @pointerdown="drag"
        @pointerup="drop"
      />
    </g>

    <text
      :x="coordX + options.width / 2"
      :y="coordY + options.height / 10"
      dominant-baseline="middle"
      text-anchor="middle"
      fill="white"
      @pointerdown="drag"
      @pointerup="drop"
      >{{ options.name }}</text
    >

    <text
      :x="coordX + options.width / 2"
      :y="coordY + options.height / 2"
      dominant-baseline="middle"
      text-anchor="middle"
      fill="black"
      @pointerdown="drag"
      @pointerup="drop"
      >{{ options.id }}. w:{{ options.width }}, h:{{ options.height }}</text
    >

    <TabDot
      :cx="coordX"
      :cy="coordY + options.height * 0.3"
      :id="props.id"
      :dotId="1"
    />

    <TabDot
      :cx="coordX + options.width"
      :cy="coordY + options.height * 0.3"
      :id="props.id"
      :dotId="2"
    />
  </g>
</template>

<script setup>
const props = defineProps({
  blockId: {
    type: Number,
    require: true
  },
  options: {
    type: Object,
    require: true
  }
});

const dragOffsetX = ref(null);
const dragOffsetY = ref(null);

const coordX = toRef(props.options.x);
const coordY = toRef(props.options.y);

const cursorType = ref('cursor-grab');

const drag = ({ offsetX, offsetY, target, pointerId, button }) => {
  if (button != 1) {
    cursorType.value = 'cursor-grabbing';
    dragOffsetX.value = offsetX - coordX.value;
    dragOffsetY.value = offsetY - coordY.value;
    target.setPointerCapture(pointerId);
    target.addEventListener('pointermove', move);
  }
};

const drop = ({ target }) => {
  cursorType.value = 'cursor-grab';
  dragOffsetX.value = dragOffsetY.value = null;
  target.removeEventListener('pointermove', move);
};

const move = ({ offsetX, offsetY }) => {
  coordX.value = offsetX - dragOffsetX.value;
  coordY.value = offsetY - dragOffsetY.value;
};
</script>
