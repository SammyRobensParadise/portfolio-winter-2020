import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import './index.css'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import App from './App'
import AppReduce from './reducers/reducers'

window.env = process.env.NODE_ENV

const store = createStore(AppReduce)

if (process.env.NODE_ENV !== 'production') {
  import('react-axe').then((axe) => {
    axe.default(React, ReactDOM, 1000)
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById('root'),
    )
  })
} else {
  // eslint-disable-next-line no-console
  console.error = () => {}
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'),
  )
}

serviceWorker.register()
