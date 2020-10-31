import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducer';
import rootSaga from '../sagas';

export function configureStore(){
    const sagaMiddleware = createSagaMiddleware();
    const middlewares = [sagaMiddleware]
    const store = createStore(rootReducer, applyMiddleware(...middlewares));
    sagaMiddleware.run(rootSaga);
    return  store;
}