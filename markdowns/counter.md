# Reducer

The first function we're going to right is the "reducer" for the `Counter` application.
A reducer accepts the applicatio `state` and the action which has been dispatched as arguments
and returns the next state.

To guide the reducer implementation, the counter reducer test is provided.
For instance, it asserts that when the state of the counter is `1` and you pass an `'INCREMENT'` action,
it should return `2`. Or, when the state of the counter is `1` and you pass an `'DECREMENT'` action,
it should return `0`.

Fix the reducer code to make the tests pass…

@[Test reducer]({
  "stubs": ["src/reducers/counter-reducer.js", "src/reducers/counter-reducer.test.js"],
  "command": "./run counter-reducer.test",
  "project": "counter"
})

However, if you fix the code simply, the counter reducer is not totally working. For instance,
if we dispatch an action which is not understood, it should return the current state of
the application.

Another issue is that while the reducer is normaly in controle of the application state
currently it does not specify the initial state. In case of counter example it could be 0.
The convention we use in redux is that, if the reducer receive `undefined` as the state argument,
it must return what it considers to be the initial state of the application (`0` in this case).

@[Improved reducer]({
  "stubs": ["src/reducers/counter-reducer-improvement.js", "src/reducers/counter-reducer-improvement.test.js"],
  "command": "./run counter-reducer-improvement.test",
  "project": "counter"
})

If all the tests pass, the counter reducer is finished. Good job!

But… this code could be improved to be more readable.
For example, the bunch of `if`s is often replaced by the `swith` statement and the initial value condition
is replaced by the ES6 default argument. The `function` declaration could also be replaced
by an arrow function which has clearer semantic for a reducer which is a pure function that takes the previous state and an action, and returns the next state:

`(previousState, action) => newState`

@[Final reducer]({
  "stubs": ["src/reducers/final-counter-reducer.js"],
  "command": "./run final-counter-reducer.test",
  "project": "counter"
})

# Store

# React component
