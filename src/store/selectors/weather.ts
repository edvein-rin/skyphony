import { createSelector } from 'reselect'
import {
  DailyForecast,
  Dict,
  FeelsLikeRange,
  HourlyForecast,
  TemperatureRange,
  Weather,
} from '../../api/api'
import State from '../state'

export const weatherSelector = (state: State): Weather | undefined =>
  state.weather

export type Unit = 'Imperial' | 'Metric'

function valueUpdater<T>(value: T, updater: (value: T) => T): T
function valueUpdater<T>(dict: Dict<T>, updater: (value: T) => T): Dict<T>
function valueUpdater<T>(value: any, updater: (value: T) => T): any {
  if (typeof value === 'object') {
    const dict: Dict<T> = value as Dict<T>

    Object.keys(dict).forEach((key: string) => {
      dict[key] = updater(dict[key])
    })

    return dict
  }

  return updater(value)
}

export function unitConverter(weather: Weather, unit: Unit): Weather {
  const newWeather = weather

  const kelvinKonverter =
    unit === 'Imperial' ? kelvinToFahrenheit : kelvinToCelsium
  const metersPerSecConverter =
    unit === 'Imperial' ? metersPerSecToMilesPerHour : (x: number) => x

  newWeather.current.temperature = valueUpdater(
    weather.current.temperature,
    kelvinKonverter
  )
  newWeather.current.feelsLike = valueUpdater(
    weather.current.feelsLike,
    kelvinKonverter
  )
  newWeather.current.windSpeed = valueUpdater(
    weather.current.windSpeed,
    metersPerSecConverter
  )

  newWeather.hourly = newWeather.hourly.map((forecast: HourlyForecast) => {
    const newForecast = forecast

    newForecast.temperature = valueUpdater(
      forecast.temperature,
      kelvinKonverter
    )
    newForecast.feelsLike = valueUpdater(forecast.feelsLike, kelvinKonverter)
    newForecast.windSpeed = valueUpdater(
      forecast.windSpeed,
      metersPerSecConverter
    )

    return newForecast
  })

  newWeather.daily = newWeather.daily.map((forecast: DailyForecast) => {
    const newForecast = forecast

    newForecast.temperature = valueUpdater(
      forecast.temperature,
      kelvinKonverter
    ) as TemperatureRange
    newForecast.feelsLike = valueUpdater(
      forecast.feelsLike,
      kelvinKonverter
    ) as FeelsLikeRange
    newForecast.windSpeed = valueUpdater(
      forecast.windSpeed,
      metersPerSecToMilesPerHour
    )

    return newForecast
  })

  return newWeather
}

export const ImperialWeatherSelector = createSelector(
  weatherSelector,
  (weather: Weather | undefined) => {
    if (weather) {
      return unitConverter(weather, 'Imperial')
    }

    return undefined
  }
)

export const MetricWeatherSelector = createSelector(
  weatherSelector,
  (weather: Weather | undefined) => {
    if (weather) {
      return unitConverter(weather, 'Metric')
    }

    return undefined
  }
)

export const kelvinToFahrenheit = (temp: number) =>
  ((temp - 273.15) * 9) / 5 + 32
export const kelvinToCelsium = (temp: number) => temp - 273.15

export const metersPerSecToMilesPerHour = (metersPerSec: number) =>
  metersPerSec * 2.237

export default weatherSelector
