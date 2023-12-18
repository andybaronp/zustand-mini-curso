import { devtools, persist } from 'zustand/middleware'
import type { Task, TaskStatus } from '../../interfaces'
import { StateCreator, create } from 'zustand'
import { v4 as uuidv4 } from 'uuid'
// import { produce } from 'immer'
import { immer } from 'zustand/middleware/immer'
interface TaskState {
  draggingTaskId?: string
  tasks: Record<string, Task>
  getTaskById: (status: TaskStatus) => Task[]
  setDragingTaskId: (taskId: string) => void
  removeDraggingTaskId: () => void
  changeProgress: (taskId: string, status: TaskStatus) => void
  onTaskDrop: (status: TaskStatus) => void
  addTask: (title: string, status: TaskStatus) => void
}

const storeApi: StateCreator<TaskState, [['zustand/immer', never]]> = (
  set,
  get,
) => ({
  draggingTaskId: undefined,
  tasks: {
    'ABC-1': {
      id: 'ABC-1',
      title: 'Task 1',
      status: 'open',
    },
    'ABC-2': {
      id: 'ABC-2',
      title: 'Task 2',
      status: 'in-progress',
    },
    'ABC-3': {
      id: 'ABC-3',
      title: 'Task 3',
      status: 'open',
    },
    'ABC-4': {
      id: 'ABC-4',
      title: 'Task 4',
      status: 'done',
    },
  },

  getTaskById: (status: TaskStatus) => {
    return Object.values(get().tasks).filter((task) => task.status === status)
  },

  setDragingTaskId: (taskId: string) => {
    set({
      draggingTaskId: taskId,
    })
  },

  removeDraggingTaskId: () => {
    set({
      draggingTaskId: undefined,
    })
  },

  changeProgress: (taskId: string, status: TaskStatus) => {
    // set({
    //   tasks: {
    //     ...get().tasks,
    //     [taskId]: {
    //       ...get().tasks[taskId],
    //       status,
    //     },
    //   },
    // })
    // con immer middleware
    set((state) => {
      state.tasks[taskId].status = status
    })
  },

  onTaskDrop: (status: TaskStatus) => {
    const taskID = get().draggingTaskId
    if (!taskID) return
    get().changeProgress(taskID, status)
    get().removeDraggingTaskId()
  },

  addTask: (title: string, status: TaskStatus) => {
    const newTask = {
      id: uuidv4(),
      title,
      status,
    }
    // lo normal de forma nativas
    // set((state) => ({
    //   tasks: {
    //     ...state.tasks,
    //     [newTask.id]: newTask,
    //   },
    // }))
    // se agrega el produce para no mutar el state y esparcirlo
    // set(
    //   produce((state: TaskState) => {
    //     state.tasks[newTask.id] = newTask
    //   }),
    // )
    // Usando immer como middleware
    set((state) => {
      state.tasks[newTask.id] = newTask
    })
  },
})

export const useTaskStore = create<TaskState>()(
  devtools(persist(immer(storeApi), { name: 'task-storage' })),
)
