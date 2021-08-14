import { API, City, Weather } from '../api/api'
import OpenWeatherMapAPI from '../api/openweathermap'

export default interface State {
  api: API
  city?: City
  weather?: Weather
  lastWeatherUpdateTime?: number
}

export const defaultState = {
  api: new OpenWeatherMapAPI(
    process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY || ''
  ),
}
