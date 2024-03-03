import { MOCK_DATA } from '../../helpers/constants'
import { AccountSlice, IAccount } from '../../helpers/interfaces'
import { StateCreator } from 'zustand'

export const createAccountSlice: StateCreator<AccountSlice> = set => ({
  accounts: MOCK_DATA.MOCK_USERS,
  currentAccount: null,
  mentor: null,
  addAccount: (acc: IAccount) =>
    set(state => {
      if (state.accounts.find(account => account.id === acc.id)) {
        return state // Account already exists, return the current state
      } else {
        return { accounts: [...state.accounts, acc] } // Account doesn't exist, append it
      }
    }),

  modifyAccount: (acc: IAccount) =>
    set(state => ({
      accounts: state.accounts.map(stateAccount =>
        acc.email === stateAccount.email ? acc : stateAccount,
      ),
    })),
  deleteAccount: (account: IAccount) =>
    set(state => ({
      accounts: state.accounts.filter(
        stateAccount => stateAccount.email !== account.email,
      ),
    })),
})
