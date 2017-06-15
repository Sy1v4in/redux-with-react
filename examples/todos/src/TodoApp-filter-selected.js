import React from 'react'

import { createStore, combineReducers } from 'redux'
import ReactDOM from 'react-dom'

import todos from './reducers/todos'
import visibilityFilter from './reducers/visibility-filter'

const todoApp = combineReducers({ todos, visibilityFilter })
const store = createStore(todoApp)

let nextTodoId = 0

// TODO: add the currentFilter
const FilterLink = ({ filter, children }) => {
  // TODO: return a span if the filter is the currentFilter
  return (
    <a href="#"
      onClick={(e) => {
        e.preventDefault()
        store.dispatch({type: 'SET_VISIBILITY_FILTER', filter})
      }}>
      {children}
    </a>
  )
}

const getTodos = (todos, filter) => {
  // { autofold
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_ACTIVE':
      return todos.filter(todo => !todo.completed)
    case 'SHOW_COMPLETE':
      return todos.filter(todo => todo.completed)
  }
  // }
}

const TodoApp = ({ todos, visibilityFilter }) => {
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
        {getTodos(todos, visibilityFilter).map(todo =>
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
        <p>
          {/* Provide the visibilityFilter as the currentFilter to each FilterLink */}
          Show:
          {' '}
          <FilterLink filter='SHOW_ALL'>All</FilterLink>
          {', '}
          <FilterLink filter='SHOW_ACTIVE'>active</FilterLink>
          {', '}
          <FilterLink filter='SHOW_COMPLETE'>completed</FilterLink>
        </p>
    </div>
  )
}

const render = () => {
  ReactDOM.render(
    <TodoApp {...store.getState()} />,
    document.getElementById('root'))
}
store.subscribe(render)
render()
