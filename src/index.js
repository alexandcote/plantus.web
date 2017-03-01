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

const sagaMiddleware = createSagaMiddleware();

// const store: Store = composeWithDevTools(
//   applyMiddleware(sagaMiddleware),
//   applyMiddleware(routerMiddleware(history)),
//   autoRehydrate(),
// )(createStore)(reducers);

const store = createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(sagaMiddleware, routerMiddleware(browserHistory)),
    autoRehydrate(),
  ),
);

persistStore(store, { storage: localForage });
sagaMiddleware.run(sagas);

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <App history={history} />
  </Provider>,
  document.getElementById('root'),
);
