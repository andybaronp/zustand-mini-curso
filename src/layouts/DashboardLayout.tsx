import { SideMenu } from '../components'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuthStore } from '../stores'

export const DashboardLayout = () => {
  const authStatus = useAuthStore((state) => state.status)
  const checkStatus = useAuthStore((state) => state.checkAuthStatus)
  if (authStatus === 'pending') {
    checkStatus()
    return <div>Cargando...</div>
  }
  if (authStatus === 'unauthenticated') {
    return <Navigate to='/auth/login' />
  }
  return (
    <div className='w-screen h-screen overflow-y-scroll antialiased bg-slate-200 text-slate-900 selection:bg-blue-900 selection:text-white'>
      <div className='relative flex flex-row w-screen'>
        <SideMenu />

        <div className='w-full p-4'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}
