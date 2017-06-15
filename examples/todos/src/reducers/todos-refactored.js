const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {}
    case 'TOGGLE_TODO':
      return {}
    default:
      return state
  }
}

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return []
    case 'TOGGLE_TODO':
      return state.map()
    default:
      return state
  }
}

export default todos
