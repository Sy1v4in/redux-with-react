function counterReducer(state, action) {
  if (typeof state === 'undefined') {
    // FIXME: return the initial state
  }
  if (action.type === 'INCREMENT') {
    return state + 1
  } else if (action.type === 'DECREMENT') {
    return state - 1
  } else {
    // FIXME: return current state
  }
}

export default counterReducer
