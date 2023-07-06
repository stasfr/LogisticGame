<template>
  <div
    class="absolute z-20 flex h-screen w-screen items-center justify-center bg-slate-900 bg-opacity-80"
  >
    <div class="relative h-[80%] w-[60%] rounded-xl bg-slate-950">
      <div class="flex h-10 w-[100%] flex-row-reverse">
        <div
          class="h-10 w-10 rounded-3xl bg-slate-700 text-slate-950 transition-all duration-300 hover:rounded-xl hover:bg-slate-800 hover:text-slate-300"
          @click="closeWindow"
        >
          <XIcon class="w-10" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { XIcon } from '@heroicons/vue/outline';
import { useUIStore } from '@/store/ui';
const state = useUIStore();

const closeWindow = () => {
  state.isShowWindow = false;
};
</script>
