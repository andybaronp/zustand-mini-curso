import { StateCreator, create } from 'zustand'
import type { User, AuthStatus } from '../../interfaces'
import { AuthService } from '../../servces/auth.service'
import { devtools, persist } from 'zustand/middleware'

export interface AuthState {
  status: AuthStatus
  token?: string
  user?: User

  loginUser: (email: string, password: string) => void

  checkAuthStatus: () => Promise<void>

  logoutUser: () => void
}

export const storeApi: StateCreator<AuthState> = (set) => ({
  status: 'pending',
  token: undefined,
  user: undefined,

  loginUser: async (email: string, password: string) => {
    try {
      const { token, ...user } = await AuthService.login(email, password)
      set({
        status: 'authenticated',
        token,
        user,
      })
    } catch (error) {
      set({
        status: 'unauthenticated',
        token: undefined,
        user: undefined,
      })
      throw 'Unauthorized'
    }
  },

  checkAuthStatus: async () => {
    try {
      const { token, ...user } = await AuthService.checkStatus()
      set({
        status: 'authenticated',
        token,
        user,
      })
    } catch (error) {
      set({
        status: 'unauthenticated',
        token: undefined,
        user: undefined,
      })
      throw 'Unauthorized'
    }
  },

  logoutUser: () => {
    set({
      status: 'unauthenticated',
      token: undefined,
      user: undefined,
    })
  },
})

export const useAuthStore = create<AuthState>()(
  devtools(persist(storeApi, { name: 'authStore' })),
)
