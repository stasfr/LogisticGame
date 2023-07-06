<template>
  <div
    class="group relative mx-auto mb-2 mt-2 flex h-12 w-12 items-center justify-center"
    :class="defaultButtonAnimation"
  >
    <div class="h-10 w-10">
      <slot name="icon"></slot>
    </div>
    <span
      class="absolute left-14 m-2 w-auto min-w-max origin-left scale-0 rounded-md bg-gray-900 p-2 text-xs font-bold text-white shadow-md transition-all duration-100 group-hover:scale-100"
    >
      <slot name="tooltip"></slot>
    </span>
  </div>
</template>

<script setup>
const { defaultButtonAnimation } = useTailwindConfig();
</script>
