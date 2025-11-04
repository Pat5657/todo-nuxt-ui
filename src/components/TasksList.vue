<script setup lang="ts">
import { useTasksStore } from '@/stores/tasks'
import { computed } from 'vue'

const tasksStore = useTasksStore()

const tasks = computed(() => tasksStore.tasksList)

function handleComplete(index: number) {
  tasksStore.completeTask(index)
}

function handleDelete(index: number) {
  tasksStore.deleteTask(index)
}
</script>

<template>
  <div class="flex flex-col gap-4">
    <TaskCard
      v-for="(task, index) in tasks"
      :key="index"
      :task="task"
      @complete="handleComplete(index)"
      @delete="handleDelete(index)"
    />
  </div>
</template>
