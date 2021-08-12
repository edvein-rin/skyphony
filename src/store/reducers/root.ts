import { Reducer } from '../reducer'
import Action from '../action'
import State, { defaultState } from '../state'

const root: Reducer = (
  state: State | undefined = defaultState,
  action: Action
): State => {
  const newState: State = state

  switch (action.type) {
    case 'loadWeather':
      newState.weather = action.weather
      return newState

    default:
      throw Error('Unknown action type')
  }
}

export default root
