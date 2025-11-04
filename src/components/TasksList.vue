<script setup lang="ts">
import { useTasksStore } from '@/stores/tasks'
import type { Task } from '@/types/task'
import { computed } from 'vue'

const tasksStore = useTasksStore()
const toast = useToast()

const tasks = computed(() => tasksStore.tasksList)

function handleComplete(index: number, task: Task) {
  tasksStore.completeTask(index)

  toast.add({
    title: 'Completed ✅',
    description: task.title,
    color: 'info',
  })
}

function handleDelete(index: number, task: Task) {
  tasksStore.deleteTask(index)

  toast.add({
    title: 'Deleted ❌',
    description: task.title,
    color: 'info',
  })
}
</script>

<template>
  <div class="flex flex-col gap-4">
    <TaskCard
      v-for="(task, index) in tasks"
      :key="index"
      :task="task"
      @complete="handleComplete(index, task)"
      @delete="handleDelete(index, task)"
    />

    <UEmpty v-if="!tasks.length" title="No tasks found" description="New tasks will appear here" />
  </div>
</template>
