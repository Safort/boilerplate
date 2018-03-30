import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import ping from '../enhancers/ping';


export default function configureStore() {
  const store = createStore(
    rootReducer,
    // initialState,
    applyMiddleware(thunk, ping),
  );

  return store;
}
