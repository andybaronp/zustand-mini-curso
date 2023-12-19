import { StateCreator } from 'zustand'

export interface GuestsSlice {
  guestCount: number

  setGuestCount: (guestCount: number) => void
}

export const createGuestsSlice: StateCreator<GuestsSlice> = (set) => ({
  guestCount: 0,
  setGuestCount: (guestCount: number) => {
    if (guestCount < 0) return
    set({ guestCount })
  },
})
