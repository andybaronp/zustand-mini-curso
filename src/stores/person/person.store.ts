import { type StateCreator, create } from 'zustand'
import { persist, devtools } from 'zustand/middleware'
// import { fireBaseStorage } from '../storages/custom-fireBaseStorage.storage'
import { logger } from '../middlewares/logger.middleware'
import { useWeddingBoundStore } from '../wedding'
interface PersonState {
  firstName: string
  lastName: string
}

interface Actions {
  setFirstName: (firstName: string) => void
  setLastName: (lastName: string) => void
}

const storeApi: StateCreator<
  PersonState & Actions,
  [['zustand/devtools', never]]
> = (set) => ({
  firstName: '',
  lastName: '',

  setFirstName: (firstName: string) =>
    set({ firstName }, false, 'setFirstName'),
  setLastName: (lastName: string) => set({ lastName }, false, 'setLastName'),
})

export const usePersonStore = create<PersonState & Actions>()(
  logger(
    devtools(
      persist(storeApi, {
        name: 'person-storage',
        // storage: customSessionStorage,
        // storage: fireBaseStorage,
      }),
    ),
  ),
)
// puedo cambiar un estado de un store con otro    con el nextState y el prevState
usePersonStore.subscribe((nexState) => {
  const { firstName, lastName } = nexState

  useWeddingBoundStore.getState().setFirstName(firstName)
  useWeddingBoundStore.getState().setLastName(lastName)
})
