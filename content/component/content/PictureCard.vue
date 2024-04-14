<template>
    <UCard :ui="{ ring: `ring-2 ring-${color}-200 dark:ring-${color}-800`}">
      <template #header>
        <div class="flex justify-center text-2xl font-bold">
          <ContentSlot name="title" unwrap="p" />
        </div>
      </template>
      <slot />
      <template #footer>
        <div class="flex justify-center text-gray-500">
          <ContentSlot name="description" unwrap="p" />
        </div>
      </template>
    </UCard>
  </template>
  
  <script setup lang="ts">
  defineProps({
    color: {
      type: String,
      default: null
    }
  })
  </script>
  