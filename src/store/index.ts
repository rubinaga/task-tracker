import {
  AccountSlice,
  AffirmationsSlice,
  RemindersSlice,
  ToDoSlice,
} from '../helpers/interfaces'
import { create } from 'zustand'
import { createRemindersSlice } from './exampleStore'
import { createToDoSlice } from './todoStore'
import { createAccountSlice } from './accountStore'
import { createAffirmationSlice } from './affirmationsStore'

export const useBoundStore = create<
  RemindersSlice & ToDoSlice & AccountSlice & AffirmationsSlice
>()((...a) => ({
  ...createRemindersSlice(...a),
  ...createToDoSlice(...a),
  ...createAccountSlice(...a),
  ...createAffirmationSlice(...a),
}))
