import React from 'react'
import ReactDOM from 'react-dom'
import VideoListContainer from './containers/VideoListContainer'
import { createStore, applyMiddleware } from 'redux'
import videoList from './reducers/reducers'
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux'
import { requestList } from './actions/actions'

const store = createStore(
  videoList,
  applyMiddleware(
    thunkMiddleware
  )
);

ReactDOM.render(
  <Provider store={store}>
    <VideoListContainer />
  </Provider>,
  document.getElementById('root')
);

store.dispatch(requestList());