import { createStore } from 'redux'
import counter from './reducers/counter-reducer'

const store = createStore(counter)

store.subscribe(() => {
  document.body.innerText = store.getState()
  // TODO: extract this lambda in a 'render' function
})

// Call the render() once to display the initial state

document.addEventListener('click', () => {
  const incrementAction = { type: 'INCREMENT' }
  store.dispatch(incrementAction)
})
