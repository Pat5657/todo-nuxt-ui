<script setup lang="ts">
import type { Task } from '@/types/task'

interface Props {
  task: Task
}

interface Emits {
  (e: 'complete'): void
  (e: 'delete'): void
}

defineProps<Props>()
const emit = defineEmits<Emits>()
</script>

<template>
  <UCard variant="subtle" :ui="{ body: 'sm:py-4' }">
    <template #header>
      <div class="flex justify-between items-start sm:items-center">
        <div class="font-semibold leading-none">{{ task.title }}</div>

        <div class="flex flex-col sm:flex-row gap-2 whitespace-nowrap self-start">
          <UButton
            icon="i-lucide-check"
            color="success"
            variant="solid"
            class="px-4"
            @click="emit('complete')"
          />
          <UButton
            icon="i-lucide-trash"
            color="error"
            variant="solid"
            class="px-4"
            @click="emit('delete')"
          />
        </div>
      </div>
    </template>

    <template #default v-if="task.description">
      <div class="text-sm leading-tight">{{ task.description }}</div>
    </template>
  </UCard>
</template>
