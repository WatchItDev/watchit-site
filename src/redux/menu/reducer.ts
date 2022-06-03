import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface MenuState {
  isMenuOpen: boolean
  menuSelected: string
}

export const initialState: MenuState = { isMenuOpen: false, menuSelected: 'dashboard' }
const menuReducers = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    toggle (state: MenuState) {
      state.isMenuOpen = !state.isMenuOpen
    },
    setSelected: (state: MenuState, action: PayloadAction<string>) => {
      state.menuSelected = action.payload
    }
  }
})

const { actions, reducer } = menuReducers
export const { toggle, setSelected } = actions
export default reducer
