import counter from './counter-reducer'

describe('reducers', () => {
  describe('counter', () => {
    it('should handle INCREMENT action', () => {
      expect(counter(0, { type: 'INCREMENT' })).toBe(1)
    })

    it('should handle INCREMENT action', () => {
      expect(counter(1, { type: 'INCREMENT' })).toBe(2)
    })

    it('should handle DECREMENT action', () => {
      expect(counter(1, { type: 'DECREMENT' })).toBe(0)
    })

    it('should handle DECREMENT action', () => {
      expect(counter(2, { type: 'DECREMENT' })).toBe(1)
    })

    it('should provide the initial state', () => {
      expect(counter(undefined, {})).toBe(0)
    })

    it('should ignore unknown actions', () => {
      expect(counter(1, { type: 'unknown' })).toBe(1)
    })
  })
})
