import visibilityFilter from './visibilityFilter'

describe('todos reducer', () => {
  it('should handle initial state', () => {
    expect(
      visibilityFilter(undefined, {})
    ).toEqual('SHOW_ALL')
  })

  it('should handle SET_VISIBILITY_FILTER action', () => {
    const showAllAction = {
      type: 'SET_VISIBILITY_FILTER',
      filter: 'SHOW_ALL'
    }
    const showCompleteAction = {
      type: 'SET_VISIBILITY_FILTER',
      filter: 'SHOW_COMPLETE'
    }
    const showActiveAction = {
      type: 'SET_VISIBILITY_FILTER',
      filter: 'SHOW_ACTIVE'
    }

    expect(
      visibilityFilter('SHOW_ALL', showCompleteAction)
    ).toEqual('SHOW_COMPLETE')

    expect(
      visibilityFilter('SHOW_COMPLETE', showActiveAction)
    ).toEqual('SHOW_ACTIVE')

    expect(
      visibilityFilter('SHOW_COMPLETE', showAllAction)
    ).toEqual('SHOW_ALL')
  })

  it('should handle an unknown action', () => {
    expect(
      visibilityFilter('SHOW_ALL', { type: 'UNKNOWN_ACTION' })
    ).toEqual('SHOW_ALL')
  })
})
