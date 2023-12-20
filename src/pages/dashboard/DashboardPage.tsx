import {
  IoAccessibilityOutline,
  IoHeartOutline,
  IoInfiniteOutline,
  IoListOutline,
  IoLockClosedOutline,
  IoPawOutline,
} from 'react-icons/io5'
import { WhiteCard } from '../../components'
import {
  useAuthStore,
  useBearStore,
  usePersonStore,
  useTaskStore,
} from '../../stores'
import RequestInfo from '../../components/shared/reques-info/RequestInfo'

export const Dashboard = () => {
  const totalBear = useBearStore((state) => state.bearsCount)
  const firstName = usePersonStore((state) => state.firstName)
  const tasks = useTaskStore((state) => state.tasks)
  const taskLength = Object.keys(tasks).length
  const user = useAuthStore((state) => state.user)
  return (
    <>
      <h1>Dashboard</h1>
      <p>Información colectiva de varios stores de Zustand</p>
      <hr />

      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        <WhiteCard centered>
          <IoPawOutline size={50} className='text-indigo-600' />
          <h2>Osos</h2>
          <p>{totalBear()}</p>
        </WhiteCard>

        <WhiteCard centered>
          <IoAccessibilityOutline size={50} className='text-indigo-600' />
          <h2>Persona</h2>
          <p>{firstName}</p>
        </WhiteCard>

        <WhiteCard centered>
          <IoListOutline size={50} className='text-indigo-600' />
          <h2>Tareas</h2>
          <p>{taskLength}</p>
        </WhiteCard>

        <WhiteCard centered>
          <IoHeartOutline size={50} className='text-indigo-600' />
          <h2>Boda</h2>
          <p>Información</p>
        </WhiteCard>

        <WhiteCard centered>
          <IoLockClosedOutline size={50} className='text-indigo-600' />
          <h2>Auth</h2>
          <p>{user?.fullName} </p>
        </WhiteCard>
        <WhiteCard centered className='col-span-3'>
          <IoInfiniteOutline size={50} className='text-indigo-600' />
          <RequestInfo />
        </WhiteCard>
      </div>
    </>
  )
}
