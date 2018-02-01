import React from 'react'
import ReactDOM from 'react-dom'
import VideoListContainer from './containers/VideoListContainer'
import { createStore, applyMiddleware } from 'redux'
import { rootReducer } from './reducers/reducers'
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux'
import { requestList } from './actions/actions'

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware
  )
);

store.dispatch(requestList()).then(
  () => ReactDOM.render(
    <Provider store={store}>
      <VideoListContainer />
    </Provider>,
    document.getElementById('root')
  )
);