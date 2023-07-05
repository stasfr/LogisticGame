<template>
  <div class="flex">
    <div
      class="fixed left-0 top-0 m-0 flex h-screen w-16 flex-col bg-slate-950 text-white"
    >
      <UISidebarIcon>
        <template v-slot:icon>
          <OfficeBuildingIcon />
        </template>
        <template v-slot:tooltip> Build </template>
      </UISidebarIcon>

      <UISidebarIcon>
        <template v-slot:icon>
          <CogIcon />
        </template>
        <template v-slot:tooltip> Settings </template>
      </UISidebarIcon>
    </div>
  </div>
</template>

<script setup>
import { OfficeBuildingIcon, CogIcon } from '@heroicons/vue/outline';
</script>
