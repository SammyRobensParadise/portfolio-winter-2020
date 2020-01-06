import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { CookiesProvider } from 'react-cookie'
import './index.css'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import App from './App'
import AppReduce from './reducers/reducers'

window.env = process.env.NODE_ENV

const store = createStore(AppReduce)
if (process.env.NODE_ENV !== 'production') {
  // if dev or staging
  import('react-axe').then((axe) => {
    axe.default(React, ReactDOM, 1000)
    ReactDOM.render(
      <Provider store={store}>
        <CookiesProvider>
          <App />
        </CookiesProvider>
      </Provider>,
      document.getElementById('root'),
    )
  })
} else {
  // disable console errors in production
  // eslint-disable-next-line no-console
  console.error = () => {}
  // eslint-disable-next-line no-console
  console.warn = () => {}
  ReactDOM.render(
    <Provider store={store}>
      <CookiesProvider>
        <App />
      </CookiesProvider>
    </Provider>,
    document.getElementById('root'),
  )
}
// register sw for offline
serviceWorker.register()
