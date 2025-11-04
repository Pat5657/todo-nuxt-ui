import type { Task } from '@/types/task'

export interface TasksState {
  tasksList: Task[]
}

export default (): TasksState => {
  return {
    tasksList: [],
  }
}
