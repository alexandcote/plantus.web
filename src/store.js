// @flow
import { createStore, applyMiddleware, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { autoRehydrate, persistStore } from 'redux-persist';
import { routerMiddleware } from 'react-router-redux';
import localForage from 'localforage';

import reducers from './reducers';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

// const store: Store = composeWithDevTools(
//   applyMiddleware(sagaMiddleware),
//   applyMiddleware(routerMiddleware(history)),
//   autoRehydrate(),
// )(createStore)(reducers);

const store: Store = (history) => {
  const s = createStore(
    reducers,
    composeWithDevTools(
      applyMiddleware(sagaMiddleware, routerMiddleware(history)),
      autoRehydrate(),
    ),
  );
  persistStore(s, { storage: localForage });
  sagaMiddleware.run(sagas);
  return s;
};

export default store;
