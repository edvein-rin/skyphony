import { Action, applyMiddleware, createStore, Store } from 'redux'
import thunk, { ThunkMiddleware } from 'redux-thunk'

import rootReducer from './reducers/root'
import State from './state'

const store: Store<State> = createStore(
  rootReducer,
  applyMiddleware(thunk as ThunkMiddleware<State, Action>)
)

export default store
