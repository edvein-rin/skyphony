import Action, { ThunkResult } from '../action'
import { Location, Weather } from '../../api/api'

export interface UpdateWeatherAction extends Action {
  type: 'updateWeather'
  weather: Weather
}

export default function updateWeather(
  location: Location
): ThunkResult<Promise<UpdateWeatherAction>, UpdateWeatherAction> {
  return async (dispatch, getState) =>
    getState()
      .api.getWeather(location)
      .then((weather) =>
        dispatch({
          type: 'updateWeather',
          weather,
        })
      )
}
