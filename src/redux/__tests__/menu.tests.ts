import reducer, { initialState } from '@state/menu/reducer'
import * as MenuActions from '@state/menu/reducer'

describe('Menu store', () => {
  it('should return tracking initial state', () => {
    expect(
      reducer(undefined, {} as any)
    ).toEqual(initialState)
  })

  it('should handle menu toggle to set menu state', () => {
    const mapToggleState = {
      isMenuOpen: !initialState.isMenuOpen
    }
    const toggle = jest.spyOn(MenuActions, 'toggle')
    const mergedStates = { ...initialState, ...mapToggleState }
    const current = reducer(initialState, MenuActions.toggle())

    expect(toggle).toHaveBeenCalled()
    expect(current).toEqual(mergedStates)
  })

  it('should handle menu set selected menu state', () => {
    const setSelectedState = {
      isMenuOpen: initialState.isMenuOpen,
      menuSelected: 'tracking'
    }
    const toggle = jest.spyOn(MenuActions, 'setSelected')
    const mergedStates = { ...initialState, ...setSelectedState }
    const current = reducer(initialState, MenuActions.setSelected('tracking'))

    expect(toggle).toHaveBeenCalled()
    expect(current).toEqual(mergedStates)
  })
})
