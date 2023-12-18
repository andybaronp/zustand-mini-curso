import { IoReorderTwoOutline } from 'react-icons/io5'
import { Task } from '../../interfaces'
import { useTaskStore } from '../../stores'

interface Props {
  task: Task
}
const SingleTask = ({ task }: Props) => {
  const setDraggingTaskId = useTaskStore((state) => state.setDragingTaskId)
  const removeDraggingTaskId = useTaskStore(
    (state) => state.removeDraggingTaskId,
  )

  return (
    <div
      className='flex items-center justify-between p-2 mt-5 cursor-move'
      draggable={true}
      onDragStart={() => setDraggingTaskId(task.id)}
      onDragEnd={() => removeDraggingTaskId()}
    >
      <div className='flex items-center justify-center gap-2'>
        <p className='text-base font-bold text-navy-700'>{task.title}</p>
      </div>
      <span className='w-6 h-6 cursor-pointer text-navy-700'>
        <IoReorderTwoOutline />
      </span>
    </div>
  )
}

export default SingleTask
