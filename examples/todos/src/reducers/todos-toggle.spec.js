import deepFreeze from 'deep-freeze'
import todos from './todos-toggle'

describe('todos reducer', () => {
  it('should handle TOGGLE_TODO', () => {
    const stateBefore = [
      {
        text: 'Run the tests',
        completed: false,
        id: 1
      }, {
        text: 'Use Redux',
        completed: false,
        id: 0
      }
    ]
    const stateAfter = [
      {
        text: 'Run the tests',
        completed: true,
        id: 1
      }, {
        text: 'Use Redux',
        completed: false,
        id: 0
      }
    ]
    const toggleAction = {
      type: 'TOGGLE_TODO',
      id: 1
    }

    deepFreeze(stateBefore)
    deepFreeze(toggleAction)

    expect(
      todos(stateBefore, toggleAction)
    ).toEqual(stateAfter)
  })

})
