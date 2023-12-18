import { DragEvent, useState } from 'react'
import Swal from 'sweetalert2'
import { useTaskStore } from '../stores'
import { TaskStatus } from '../interfaces'

interface Props {
  status: TaskStatus
}
export const useTasks = ({ status }: Props) => {
  const isDragging = useTaskStore((state) => !!state.draggingTaskId)
  const onTaskDrop = useTaskStore((state) => state.onTaskDrop)
  const addTask = useTaskStore((state) => state.addTask)

  const [onDragOver, setOnDragOver] = useState(false)

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setOnDragOver(true)
  }

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setOnDragOver(false)
  }
  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    onTaskDrop(status)
  }

  const handleAddTask = async () => {
    const { isConfirmed, value } = await Swal.fire({
      title: 'Create New Task',
      input: 'text',
      showCancelButton: true,
      inputLabel: 'Title',
      inputPlaceholder: 'Enter new task name',
      inputValidator: (value) => {
        if (!value) {
          return 'You need to write something!'
        }
      },
    })

    if (!isConfirmed) return

    addTask(value, status)
  }

  return {
    isDragging,
    onDragOver,
    handleDragOver,
    handleDragLeave,
    handleDrop,
    handleAddTask,
  }
}
