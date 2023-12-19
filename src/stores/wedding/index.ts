import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { PersonSlice, createPersonSlice } from './person.slice'
import { GuestsSlice, createGuestsSlice } from './guests.slice'
import { DataSlice, createDateSlice } from './date.slice'
import {
  ConfirmationSlice,
  createConfirmationSlice,
} from './confirmation.slice'

type SHareState = PersonSlice & GuestsSlice & DataSlice & ConfirmationSlice

export const useWeddingBoundStore = create<SHareState>()(
  devtools(
    // el ...a es por el set, get, store
    (...a) => ({
      ...createPersonSlice(...a),
      ...createGuestsSlice(...a),
      ...createDateSlice(...a),
      ...createConfirmationSlice(...a),
    }),
  ),
)
