<template>
  <div
    class="absolute z-20 flex h-screen w-screen items-center justify-center bg-slate-900 bg-opacity-80"
  >
    <div class="relative h-[80%] w-[60%] rounded-xl bg-slate-950">
      <div class="mb-5 flex h-10 w-[100%] justify-center">
        <div
          class="flex w-[25%] items-center justify-center rounded-xl text-xl"
          :class="defaultWindowButtonAnimation"
        >
          {{
            state.windowType.charAt(0).toUpperCase() + state.windowType.slice(1)
          }}
        </div>
        <div
          class="absolute right-0 h-10 w-10 cursor-pointer rounded-3xl"
          :class="defaultWindowButtonAnimation"
          @click="closeWindow"
        >
          <XIcon class="w-10" />
        </div>
      </div>
      <UIMenuBuild v-if="state.windowType === 'build'" />
    </div>
  </div>
</template>

<script setup>
import { XIcon } from '@heroicons/vue/outline';
import { useUIStore } from '@/store/ui';

const { defaultWindowButtonAnimation } = useTailwindConfig();
const state = useUIStore();

const closeWindow = () => {
  state.isShowWindow = false;
  state.windowType = '';
};
</script>
