import { Reducer as ReduxReducer } from 'redux'

import Action from './action'
import State from './state'

export type Reducer = ReduxReducer<State, Action>
