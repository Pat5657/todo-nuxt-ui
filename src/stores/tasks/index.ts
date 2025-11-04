import { defineStore } from 'pinia'
import state from './state'
import type { Task } from '@/types/task'

export const useTasksStore = defineStore('tasks', {
  state,
  actions: {
    addTask(title: string, description?: string) {
      const task: Task = {
        title,
        description: description,
        isComplete: false,
      }

      this.tasksList = [task, ...this.tasksList]
    },
    completeTask(index: number) {
      const task = this.tasksList[index]

      if (!task) {
        return
      }

      task.isComplete = true
    },
    deleteTask(index: number) {
      this.tasksList.splice(index, 1)
    },
  },
})
