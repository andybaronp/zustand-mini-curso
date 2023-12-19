import { StateCreator } from 'zustand'

export interface DataSlice {
  eventDate: Date

  eventYYYYMMDD: () => string
  eventHHMM: () => string

  setEventDate: (parcialDate: string) => void
  setEvenTime: (parcialTime: string) => void
}

export const createDateSlice: StateCreator<DataSlice> = (set, get) => ({
  eventDate: new Date(),

  eventYYYYMMDD: () => {
    return get().eventDate.toISOString().split('T')[0]
  },

  eventHHMM: () => {
    const hours = get().eventDate.getHours().toString().padStart(2, '0')
    const minutes = get().eventDate.getMinutes()
    return `${hours}:${minutes}`
  },

  setEventDate: (parcialDate: string) =>
    set((state) => {
      const date = new Date(parcialDate)

      const year = date.getFullYear()
      const month = date.getMonth()
      const day = date.getDate() + 1
      const newDate = new Date(state.eventDate)

      newDate.setFullYear(year, month, day)

      return {
        eventDate: newDate,
      }
    }),

  setEvenTime: (parcialTime: string) => {
    const [hours, minutes] = parcialTime.split(':')
    const newDate = new Date(get().eventDate)

    newDate.setHours(+hours, +minutes)

    console.log(newDate)

    set({
      eventDate: newDate,
    })
  },
})
