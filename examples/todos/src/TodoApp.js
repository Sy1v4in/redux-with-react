import React from 'react'
import PropTypes from 'prop-types'

import { createStore, combineReducers } from 'redux'
import ReactDOM from 'react-dom'

import todos from './reducers/todos'
import visibilityFilter from './reducers/visibility-filter'

const todoApp = combineReducers({ todos, visibilityFilter })
const store = createStore(todoApp)

let nextTodoId = 0

const TodoApp = ({ todos }) => {
  let todoText;
  return (
    <div>
      <input ref={node => todoText = node} />
      <button onClick={() => {
        store.dispatch({
          type: 'ADD_TODO',
          text: todoText.value,
          id: nextTodoId++
        })
        todoText.value = ''
      }}>
        Add Todo
      </button>
      <ul>
        {todos.map(todo =>
          <li key={todo.id}>{todo.text}</li>
        )}
      </ul>
    </div>
  )
}

const render = () => {
  ReactDOM.render(
    <TodoApp todos={store.getState().todos} />,
    document.getElementById('root'))
}
store.subscribe(render)
render()
