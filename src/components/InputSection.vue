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
    >
      <template #trailing>
        <UButton
          @click="handleAddToDo"
          icon="i-lucide-plus"
          label="Add"
          color="primary"
          variant="soft"
          tabindex="-1"
        />
      </template>
    </UInput>

    <div class="transition-all duration-500 overflow-hidden" :class="title ? 'h-32' : 'h-0'">
      <UTextarea
        v-if="title"
        v-model="description"
        variant="subtle"
        placeholder="Description..."
        autoresize
        class="w-full"
      />
    </div>
  </div>
</template>
