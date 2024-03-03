import { useBoundStore } from '..'
import { MOCK_DATA } from '../../helpers/constants'
import { IRem, RemindersSlice } from '../../helpers/interfaces'
import { StateCreator } from 'zustand'

export const createRemindersSlice: StateCreator<RemindersSlice> = set => ({
  showToast: false,
  remindersCount: MOCK_DATA.MOCK_REMINDERS.length,
  reminders: MOCK_DATA.MOCK_REMINDERS,
  addReminder: (reminder: IRem) =>
    set(state => ({ reminders: [...state.reminders, reminder] })),
  // getReminders: function () {},
  modifyReminder: (reminder: IRem) =>
    set(state => ({
      reminders: state.reminders.map(stateRem =>
        reminder.reminderName === stateRem.reminderName ? reminder : stateRem,
      ),
    })),
  deleteReminder: (reminder: IRem) =>
    set(state => ({
      reminders: state.reminders.filter(
        stateReminder => stateReminder.reminderName !== reminder.reminderName,
      ),
    })),
})
