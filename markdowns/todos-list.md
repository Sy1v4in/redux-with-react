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

The toggle reducer implementation is not really complicated, but… watch out… it is a pure function so don't modify the state!

But what does it mean?

Mainly, that is mean that the new state array should be a new one. You don't have to modify the array itself.
But, in this new array, you have to keep the reference to the `todo` which haven't change. Then, react will easily understand that some todos did not change and has not to "redraw" them. Finally, the `todo` which has been toggled should be a new one.

Let's code this new toggle reducer. Using the `map` method could ease its writting

@[Toggle todo reducer]({
  "stubs": ["src/reducers/todos-toggle.js", "src/reducers/todos-toggle.spec.js"],
  "command": "yarn techio-test -- todos-toggle",
  "project": "todos"
})


# Reducers refactoring: composition

In the previous sections we wrote a reducer which can handle 2 actions: adding a new `todo` and toggling a given `todo`. But, the code to update a `todo` or to create a new one is embedded into the `todos` reducer. That is not really a good thing because it mixes 2 different concerns: how the `todos` *array* is updated and how *individual* `todo`s are updated.

Because you're aware about this problem of [separation of concerns](https://en.wikipedia.org/wiki/Separation_of_concerns), you would want to extract 2 more specific functions which addresses a single concern. In this context, you can extract a function that is responsible to create and update a single `todo` called `todo()` with the `state` and the `action` as parameters. Then the `'TOGGLE_TODO'` action in the `todo` reducer will create a new toggled `todo` if the supplied todo provided as the `state` matches with the one specifying in the `action`.

You can then rewrite the `todos` reducer easily using the `todo` one.

This is the reducer composition: different reducers specify how different parts of the state tree are updated in response to actions.
Because reducers are *normal* javascript functions, a reducer can call other reducers naturally to delegate an abstract way handling an update of some parts of the state it manages.

Just let's do it. Hopefully we have some tests to check if the refactore does the right thing ;-)

@[Toggle todo reducer]({
  "stubs": ["src/reducers/todos-refactored.js", "src/reducers/todos-refactored.spec.js"],
  "command": "yarn techio-test -- todos-refactored",
  "project": "todos"
})
