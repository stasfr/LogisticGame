<template>
  <div class="flex">
    <div
      class="absolute left-0 top-0 z-10 m-0 flex h-screen w-16 flex-col justify-between overflow-visible bg-slate-950 text-white"
    >
      <div>
        <UISidebarIcon @click="openWidnow('build')">
          <template v-slot:icon>
            <OfficeBuildingIcon />
          </template>
          <template v-slot:tooltip> Build </template>
        </UISidebarIcon>

        <UISidebarIcon @click="openWidnow('research')">
          <template v-slot:icon>
            <BeakerIcon />
          </template>
          <template v-slot:tooltip> Research </template>
        </UISidebarIcon>

        <UISidebarIcon @click="openWidnow('calculate')">
          <template v-slot:icon>
            <CalculatorIcon />
          </template>
          <template v-slot:tooltip> Calculate </template>
        </UISidebarIcon>

        <UISidebarIcon @click="openWidnow('reports')">
          <template v-slot:icon>
            <ChartBarIcon />
          </template>
          <template v-slot:tooltip> Reports </template>
        </UISidebarIcon>
      </div>

      <div>
        <UISidebarIcon>
          <template v-slot:icon>
            <UserIcon />
          </template>
          <template v-slot:tooltip> User </template>
        </UISidebarIcon>
        <UISidebarIcon>
          <template v-slot:icon>
            <CogIcon />
          </template>
          <template v-slot:tooltip> Settings </template>
        </UISidebarIcon>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  OfficeBuildingIcon,
  CogIcon,
  BeakerIcon,
  CalculatorIcon,
  ChartBarIcon,
  UserIcon
} from '@heroicons/vue/outline';

import { useUIStore } from '@/store/ui';
const state = useUIStore();

const openWidnow = windowType => {
  state.isShowWindow = true;
  state.windowType = windowType;
};
</script>
