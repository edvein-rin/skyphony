import ActionInterface, { ThunkResult } from '../action'
import { Location, Weather } from '../../api/api'

export interface Action extends ActionInterface {
  type: 'loadWeather'
  weather: Weather
}

export default function getWeather(
  location: Location
): ThunkResult<void, Action> {
  return (dispatch, getState) => {
    getState()
      .api.getWeather(location)
      .then((weather) => {
        dispatch({
          type: 'loadWeather',
          weather,
        })
      })
  }
}
