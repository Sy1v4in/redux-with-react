# Adding a todo: writing a Todo List reducer

Although the state in the previous was simply a number, in this application, the state is an array of "todos".
A `todo` is a simple object with an `id`, its `text` and a `completed` boolean to specify if the todo has been done or not.
The `id` and the `text` of the `todo` to add are basically provided by the action (`id` and `text` properties of the action itself).

So let's begin by writting the Todo reducer for the `'ADD_TODO'` action. As in the previous application, we provide a test to be sure the reducer implementation you will provide is correct ;-)

Just remember that the reducer is a **pure** function. Then you don't have to modify the supllied `state`, you have to create a new one!
Some ES6 feature as destructuring is really a nice help for that ;-)

@[Add todo reducer]({
  "stubs": ["src/reducers/todos-add.js", "src/reducers/todos-add.spec.js"],
  "command": "yarn techio-test -- todos-add",
  "project": "todos"
})


# Toggling a todo: updating the Todo List reducer

In this section, we're following the same previous approach to implement the `'TOGGLE_TODO'` action.
The idea behind this action is to toggle the `completed` property of a given `todo`. The action owns the `id` of the `todo` to toggle.

The toggle reducer implementation is not really complicated, but… watch out… don't modify the state! :D

@[Toggle todo reducer]({
  "stubs": ["src/reducers/todos-toggle.js", "src/reducers/todos-toggle.spec.js"],
  "command": "yarn techio-test -- todos-toggle",
  "project": "todos"
})
