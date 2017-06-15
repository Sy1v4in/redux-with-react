# Adding a todo: writing a Todo List reducer

Although the state in the previous was simply a number, in this application, the state is an array of "todos".
A `todo` is a simple object with an `id`, its `text` and a `completed` boolean to specify if the todo has been done or not.

So let's begin by writting the Todo reducer for the `'ADD_TODO'` action. As in the previous application, we provide a test to be sure the reducer implementation you will provide is correct ;-)

Just remember that the reducer is a **pure** function. Then you don't have to modify the supllied `state`, you have to create a new one!
Some ES6 feature as destructuring is really a nice help for that ;-)

@[Add todo reducer]({
  "stubs": ["src/reducers/todos-add.js", "src/reducers/todos-add.spec.js"],
  "command": "yarn techio-test -- todos-add",
  "project": "todos"
})


# Toggling a todo: updating the Todo List reducer
