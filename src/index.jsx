import React from 'react'
import ReactDOM from 'react-dom'
import AppContainer from './containers/AppContainer'
import { createStore, applyMiddleware } from 'redux'
import Reducers from './reducers'
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux'
import { requestList } from './actions/actions'

const store = createStore(
  Reducers,
  applyMiddleware(
    thunkMiddleware
  )
);

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);

store.dispatch(requestList());