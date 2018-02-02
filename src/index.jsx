import React from 'react'
import ReactDOM from 'react-dom'
import AppContainer from './containers/AppContainer'
import { createStore, applyMiddleware } from 'redux'
import Reducers from './reducers'
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux'
import { requestList } from './actions/actions'
import injectTapEventPlugin from 'react-tap-event-plugin';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

injectTapEventPlugin();

const store = createStore(
  Reducers,
  applyMiddleware(
    thunkMiddleware
  )
);

ReactDOM.render(
  <Provider store={store}>
    <div>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography type="title" color="inherit">
            Go workshop 2018
          </Typography>
        </Toolbar>
      </AppBar>
      <AppContainer />
    </div>
  </Provider>,
  document.getElementById('root')
);

store.dispatch(requestList());