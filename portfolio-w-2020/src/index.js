import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import './index.css'
import { render } from 'react-dom'
import * as serviceWorker from './serviceWorker'
import App from './App'
import AppReduce from './reducers/reducers'

window.env = window.location.href.includes('localhost') ? 'development' : 'production'

const store = createStore(AppReduce)
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)
serviceWorker.register()
