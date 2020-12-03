import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import { applyMiddleware, compose, createStore } from 'redux'

import reducers from './store'
import './config'
import DashBoard from './components/DashBoard'

const store = createStore(reducers, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
))

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route component={DashBoard} />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
