import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { createStore } from 'redux'

import itemApp from './app/TodoApp/reducer'
import MyComponent from './app/TodoApp/app'
import HelloReact from './app/HelloWorld/HelloReact'

const store = createStore(
  itemApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

ReactDOM.render(
  <div>
    <HelloReact />
    <Provider store={store}>
      <MyComponent />
    </Provider>
  </div>,
  document.getElementById('root'),
)
