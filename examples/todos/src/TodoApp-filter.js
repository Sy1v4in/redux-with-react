import React from 'react'

import { createStore, combineReducers } from 'redux'
import ReactDOM from 'react-dom'

import todos from './reducers/todos'
import visibilityFilter from './reducers/visibility-filter'

const todoApp = combineReducers({ todos, visibilityFilter })
const store = createStore(todoApp)

let nextTodoId = 0

const FilterLink = ({ filter, children }) => (
  <a href="#">
    {/* TODO: install a onClick handler to dispatch the the 'SET_VISIBILITY_FILTER' action
       with the supplied filter */}
    {children}
  </a>
)

const getTodos = (todos, filter) => {
  // TODO: return the todos according to the filter value
}

// TODO: do not forget to provide the visibilityFilter in props
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
        {/* TODO: use the getTodos instead of the todos directly */}
        {todos.map(todo =>
          <li key={todo.id}
            onClick={() => {
                store.dispatch({
                    type: 'TOGGLE_TODO',
                    id: todo.id
                })
            }}
            style={{
                textDecoration: todo.completed ? 'line-through': 'none'
            }}>
            {todo.text}
          </li>
        )}
        </ul>
        {/* Use of FilterLink */}
        <p>
          Show:
          {' '}
          <FilterLink filter='SHOW_ALL'>All</FilterLink>
          {', '}
          {/* TODO: Add the show active and show completed FilterLinks */}
        </p>
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
