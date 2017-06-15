// { autofold
import React from 'react'

import { createStore, combineReducers } from 'redux'
import ReactDOM from 'react-dom'

import todos from './reducers/todos'
import visibilityFilter from './reducers/visibility-filter'

const todoApp = combineReducers({ todos, visibilityFilter })
const store = createStore(todoApp)

let nextTodoId = 0
// }

const FilterLink = ({ filter, currentFilter, children }) => {
  // { autofold
  if (filter === currentFilter) {
      return <span>{children}</span>
  }
  return (
    <a href="#"
      onClick={(e) => {
        e.preventDefault()
        store.dispatch({type: 'SET_VISIBILITY_FILTER', filter})
      }}>
      {children}
    </a>
  )
  // }
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

const Todo = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    style={{
        textDecoration: completed ? 'line-through': 'none'
    }}>
    {text}
  </li>
)

const TodoList = ({ todos, onTodoClick }) => (
  <ul>
    {todos.map(todo =>
      <Todo key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)}
      />
    )}
  </ul>
)

const AddTodo = ({ onAddClick }) => {
  let todoText

  <div>
    <input ref={node => todoText = node} />
    <button onClick={() => {
      onAddClick(todoText.value)
      todoText.value = ''
    }}>
      Add Todo
    </button>
  </div>
}

const TodoApp = ({ todos, visibilityFilter }) => {
  let todoText
  return (
    <div>
      {/* TODO: use the AddTodo component */}
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
      {/* TODO: use the TodoList component */}
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
        {/* TODO: to replace all this <ul> element */}
        <p>
          Show:
          {' '}
          <FilterLink filter='SHOW_ALL' currentFilter={visibilityFilter}>All</FilterLink>
          {', '}
          <FilterLink filter='SHOW_ACTIVE' currentFilter={visibilityFilter}>active</FilterLink>
          {', '}
          <FilterLink filter='SHOW_COMPLETE' currentFilter={visibilityFilter}>completed</FilterLink>
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
