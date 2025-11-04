<script setup lang="ts">
import { useTasksStore } from '@/stores/tasks'
import { ref } from 'vue'

const todosStore = useTasksStore()
const toast = useToast()

const title = ref('')
const description = ref('')

function handleAddToDo() {
  if (!title.value) {
    toast.add({
      title: 'Provide title for the task',
      color: 'error',
    })
    return
  }

  todosStore.addTask(title.value, description.value)

  resetInput()
}

function resetInput() {
  title.value = ''
  description.value = ''
}
</script>

<template>
  <div class="flex flex-col gap-2" @keyup.ctrl.enter.exact="handleAddToDo">
    <UInput
      v-model="title"
      variant="outline"
      size="xl"
      placeholder="Enter your task here..."
      class="w-full"
      :ui="{ trailing: 'pe-1' }"
    >
      <template #trailing>
        <span v-if="title" class="hidden sm:flex items-center gap-0.5 mr-2">
          <UKbd value="ctrl" />
          <UKbd value="enter" />
        </span>

        <UButton @click="handleAddToDo" label="Add" color="primary" variant="soft" tabindex="-1">
          <UIcon name="i-lucide-plus" class="size-5" />
          <span class="hidden sm:inline">Add</span>
        </UButton>
      </template>
    </UInput>

    <div class="transition-all duration-500 overflow-hidden" :class="title ? 'h-32' : 'h-0'">
      <UTextarea
        v-if="title"
        v-model="description"
        variant="subtle"
        placeholder="Description..."
        autoresize
        class="w-full h-full"
        :ui="{ base: 'h-full' }"
      />
    </div>
  </div>
</template>
