import React from 'react'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import AppReduce from '../src/reducers/reducers'
const store = createStore(AppReduce)
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register()
