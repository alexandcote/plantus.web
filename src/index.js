// @flow
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { autoRehydrate, persistStore } from 'redux-persist';
import { routerMiddleware, syncHistoryWithStore } from 'react-router-redux';
import localForage from 'localforage';
import './main.scss';

import App from './components/App';

import reducers from './reducers';
import sagas from './sagas';
import middlewares from './middlewares';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(sagaMiddleware, routerMiddleware(browserHistory), ...middlewares),
    autoRehydrate(),
  ),
);

persistStore(store, { storage: localForage, blacklist: ['auth'] });
sagaMiddleware.run(sagas);

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <App history={history} />
  </Provider>,
  document.getElementById('root'),
);
