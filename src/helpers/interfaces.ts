export interface IRem {
  reminderName: string
  dateSet: number
  switched: boolean
  important: boolean
  notes?: string
}

export interface RemindersSlice {
  showToast: boolean
  remindersCount: number
  reminders: IRem[]
  addReminder: any
  //   getReminders: any
  modifyReminder: any
  getReminderById?: any
  deleteReminder: any
}

export interface ITask {
  title: string
  checked: boolean
}

export interface ToDoSlice {
  taskCount: number
  tasks: ITask[]
  addTask: any
  modifyTask: any
  deleteTask: any
}

export interface IAccount {
  id: number
  email: string
  password: string
  name: string
  surname: string
}

export interface AccountSlice {
  mentor: string | null
  accounts: IAccount[]
  currentAccount: IAccount | null
  addAccount: any
  modifyAccount: any
  deleteAccount: any
}

export interface AffirmationsSlice {
  affirmations: any
  addAffirmations: any
}
