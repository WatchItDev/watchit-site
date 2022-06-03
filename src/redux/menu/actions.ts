export { toggle, setSelected } from '@state/menu/reducer'

export interface MenuActions {
  toggle: () => void
  setSelected: (id: string) => void
}
