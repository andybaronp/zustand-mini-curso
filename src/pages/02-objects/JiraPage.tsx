import { JiraTasks } from '../../components'
import { useTaskStore } from '../../stores'

export const JiraPage = () => {
  const pending = useTaskStore((state) => state.getTaskById('open'))
  const inProgress = useTaskStore((state) => state.getTaskById('in-progress'))
  const done = useTaskStore((state) => state.getTaskById('done'))

  return (
    <>
      <h1>Tareas</h1>
      <p>Manejo de estado con objectos de Zustand</p>
      <hr />

      <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
        <JiraTasks title='Pendientes' status='open' tasks={pending} />

        <JiraTasks title='Avanzando' status='in-progress' tasks={inProgress} />

        <JiraTasks title='Terminadas' status='done' tasks={done} />
      </div>
    </>
  )
}
