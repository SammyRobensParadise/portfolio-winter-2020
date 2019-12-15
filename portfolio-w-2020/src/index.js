/* eslint-disable import/no-named-as-default-member */
import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import './index.css'
import { render } from 'react-dom'
import * as serviceWorker from './serviceWorker'
// eslint-disable-next-line import/no-named-as-default
import App from './App'

import AppReduce from './reducers/reducers'

const store = createStore(AppReduce)
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register()
