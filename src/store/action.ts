import { AnyAction } from 'redux'
import { ThunkAction } from 'redux-thunk'
import State from './state'

export default interface Action extends AnyAction {
  type: string
}

export type ThunkResult<R, A extends Action> = ThunkAction<
  R,
  State,
  undefined,
  A
>
