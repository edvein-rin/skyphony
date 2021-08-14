import { Reducer } from '../reducer'
import Action from '../action'
import State, { defaultState } from '../state'

const root: Reducer = (
  state: State | undefined = defaultState,
  action: Action
): State => {
  const newState: State = state

  switch (action.type) {
    case 'updateWeather':
      newState.weather = action.weather
      return newState

    case 'updateCity':
      newState.city = action.city
      return newState

    default:
      // if action is meant to be handled
      if (!action.type.startsWith('@@')) {
        throw Error(`Unknown action type: ${action.type}`)
      }
      return newState
  }
}

export default root
