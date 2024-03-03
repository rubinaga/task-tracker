import { MOCK_DATA } from '../../helpers/constants'
import { ITask, ToDoSlice } from '../../helpers/interfaces'
import { StateCreator } from 'zustand'

export const createToDoSlice: StateCreator<ToDoSlice> = set => ({
  taskCount: MOCK_DATA.MOCK_TODO.length,
  tasks: MOCK_DATA.MOCK_TODO,
  addTask: (task: ITask) => set(state => ({ tasks: [...state.tasks, task] })),
  modifyTask: (task: ITask) =>
    set(state => ({
      tasks: state.tasks.map(stateTask =>
        task.title === stateTask.title ? task : stateTask,
      ),
    })),
  deleteTask: (reminder: ITask) =>
    set(state => ({
      tasks: state.tasks.filter(
        stateTasks => stateTasks.title !== reminder.title,
      ),
    })),
})
