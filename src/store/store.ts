import {
  applyMiddleware,
  createStore as createReduxStore,
  Store as ReduxStore,
} from 'redux'
import thunk, { ThunkDispatch, ThunkMiddleware } from 'redux-thunk'

import rootReducer from './reducers/root'
import State from './state'
import Action from './action'

export type Store = ReduxStore<State, Action> & {
  dispatch: ThunkDispatch<State, undefined, Action>
}

export default function createStore(): Store {
  return createReduxStore(
    rootReducer,
    applyMiddleware(thunk as ThunkMiddleware<State, Action>)
  )
}
