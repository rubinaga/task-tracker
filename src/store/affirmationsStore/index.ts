import { MOCK_DATA } from '../../helpers/constants'
import { AffirmationsSlice } from '../../helpers/interfaces'
import { StateCreator } from 'zustand'

export const createAffirmationSlice: StateCreator<AffirmationsSlice> = set => ({
  affirmations: MOCK_DATA.MOCK_AFFIRMATIONS,
  addAffirmations: (aff: any) =>
    set(state => ({ affirmations: [...state.affirmations, aff] })),
})
