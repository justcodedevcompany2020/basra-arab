import './index.css'
import App from './App'
import React from 'react'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
import reducer from './Services/reducer/reducer'
import { applyMiddleware, legacy_createStore as createStore } from 'redux'

const store = createStore(
  reducer,
  applyMiddleware(thunk)
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)

reportWebVitals()
