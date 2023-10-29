import { type StateCreator, create } from 'zustand'
import { persist, devtools } from 'zustand/middleware'
import { fireBaseStorage } from '../storages/custom-fireBaseStorage.storage'
interface PersonState {
  firstName: string
  lastName: string
}

interface Actions {
  setFirstName: (firstName: string) => void
  setLastName: (lastName: string) => void
}

const storeApi: StateCreator<PersonState & Actions> = (set) => ({
  firstName: '',
  lastName: '',

  setFirstName: (firstName: string) => set({ firstName }),
  setLastName: (lastName: string) => set({ lastName }),
})

export const usePersonStore = create<PersonState & Actions>()(
  devtools(
    persist(storeApi, {
      name: 'person-storage',
      // storage: customSessionStorage,
      storage: fireBaseStorage,
    }),
  ),
)