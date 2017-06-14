The example used to

@[Test reducer]({
  "command": "./run",
  "project": "counter"
})


# Reducer

The first function we're going to write is the "reducer" for the `Counter` application.
Actions describe the fact that something happened, but don't specify how the application's state changes in response.
This is the job of reducers.

A reducer accepts the application `state` and the `action` which has been dispatched as arguments
and returns the next state.

To guide the counter reducer implementation, a unit test is provided.

For instance, it asserts that when the state of the counter is `1` and you pass an `'INCREMENT'` action,
it should return `2`. Or, when the state of the counter is `1` and you pass an `'DECREMENT'` action,
it should return `0`.

Now, look at the test to understand what is expected for the counter reducer and fix the reducer code to make the tests pass…

@[Test reducer]({
  "stubs": ["src/reducers/counter-reducer.js", "src/reducers/counter-reducer.test.js"],
  "command": "./run reducers/counter-reducer.test",
  "project": "counter"
})

However, if you fix the code simply, the counter reducer is not totally working. For instance,
if we dispatch an action which is not understood, it should return the current state of
the application.

Another issue is that while the reducer is normaly in control of the application state
currently it does not specify the initial state. In the case of the counter example that could be 0.
The convention we use in redux is that, if the reducer receive `undefined` as the state argument,
it **must** return what it considers to be the initial state of the application (`0` in this case).

Let's complete the code of the counter reducer… Have a look at the new tests to make them pass

@[Improved reducer]({
  "stubs": ["src/reducers/counter-reducer-improvement.js", "src/reducers/counter-reducer-improvement.test.js"],
  "command": "./run reducers/counter-reducer-improvement.test",
  "project": "counter"
})

If all the tests pass, the counter reducer is finished. Good job!

But… this code could be improved to be more readable ;-)
For example, the bunch of `if`s is often replaced by the `swith` statement and the initial value condition
is replaced by the ES6 default argument. The `function` declaration could also be replaced
by an arrow function which has clearer semantic for a reducer which is a pure function that takes the previous state and an action, and returns the next state:

`(previousState, action) => newState`

@[Final reducer]({
  "stubs": ["src/reducers/final-counter-reducer.js"],
  "command": "./run reducers/final-counter-reducer.test",
  "project": "counter"
})

# Store

# React component
