Here is a step by step example in order to code a simple application using redux with react.
The application used as example in the simple `Counter` application which you can find the preview:

@[Counter application preview]({
  "command": "./run",
  "project": "counter"
})

Now, let's start to code it!


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

Ok. Now you have a reducer. So… it will be easy to create a store now ;-)

The Store is the object that brings the 3 principles of redux together.
The store has the following responsibilities:

  - holds the application state;
  - allows access to state via the the `getState()` method;
  - allows state to be updated via the `dispatch(action)` method;
  - registers listeners via the `subscribe(listener)` method;
  - Handles unregistering of listeners via the function returned by `subscribe(listener)`.

It's important to note that you'll only have a **single store** in a Redux application.
When you want to split your data handling logic, you'll use reducer composition instead of many stores.

To create a store, redux provides the `createStore` function. It's easy to create a store if you have a reducer while the reducer is the first argument of the `createStore` function.
You may optionally specify the initial state as the second argument to this function.
This is useful for hydrating the state of the client to match the state of a Redux application running on the server.

The store has 3 important methods.

The first method of a store is called `getState()`. It retrieves the current state of the redux store.

The second and the most commonly used `store` method is called `dispatch`. It dispatches action to change the state of the application.

The third redux `store` method is called `subscribe`. It let's you register a callback that the redux store will called anytime an action has been dispatched. So, you can update the UI of your application to refact the current application state.

Let's imagine a very naive implementation of an application which renders a counter into the doccument body of a web page. Anytime the body has been clicked an `'INCREMENT'` action is dispatched to increment the counter.

Once the following code launched, you can click on the page to see the counter to be incremented.

@[Run naive implementation]({
  "stubs": ["src/index.js"],
  "command": "yarn viewer-start",
  "project": "counter-vanilla"
})

As you can see, the initial state is not displayed. You can amend the code extracting the lambda from the `subscribe` method into a `render` function and then, call it once, in order to display the initial state.


# React component

We have a naive implementation of the counter application which updates the document body manually anytime the store state is changing.
Of course this approach does not scale to complex applications. So, instead of manually updating the DOM, we're going to use `react`.

Then, the `render` function is changed to display the `Counter` react component. You have to provide an html file with a `div` identified with an identifier `<div id="root" />` for example. Then you can call the `ReactDOM.render` method in the `render` method with your `root` component.
As explain previously, the render method is called anytime the state store value is changing. So you can savely pass the current state of the store (`store.getState()`) as a `value` `props` to the `Counter` component.

Now we want to add an increment and decrement button to the `Counter` component, but we don't want to hard-code the redux dependency into this component. So, we add an `onIncrement` and `onDecrement` `props` as callbacks to this component and, in the `render` method, we provide this 2 `props` callbacks with an implementation using the `store` `dispatch` method with the appropriate actions.

That's done! You can see the final code just bellow:

@[React implementation]({
  "stubs": ["public/index.html", "src/index.js", "src/components/Counter.js"],
  "command": "yarn techio-start",
  "project": "counter"
})
