import {configureStore} from "@reduxjs/toolkit"
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers.js';
import rootSaga from './sagas.js';

const sagaMiddleware = createSagaMiddleware();

//   while using createStore use middleware as ===>>> applyMiddleware(createSagaMiddleware)

const store = configureStore({
  reducer:rootReducer,
middleware:getDefaultMiddleware=>getDefaultMiddleware().concat(sagaMiddleware)
});

sagaMiddleware.run(rootSaga);

export default store;
