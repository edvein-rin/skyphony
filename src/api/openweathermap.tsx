import { Map } from 'immutable'

import {
  request,
  Options,
  API,
  Place,
  City,
  Coords,
  Weather,
  Forecast,
} from './api'

export type Service = 'geo/1.0/direct' | 'data/2.5/weather' | 'data/2.5/onecall'

export default class OpenWeatherMapAPI implements API {
  key: string
  url: string = 'http://api.openweathermap.org/'

  constructor(key: string) {
    this.key = key
  }

  call(service: Service, options: Options): Promise<Response> {
    return request(this.url + service, options.set('appid', this.key))
  }

  async getCoords(city: City): Promise<Coords> {
    const response = await this.call('geo/1.0/direct', Map({ q: city }))
    const data = await response.json()

    const firstCity = data[0]
    const coords: Coords = {
      lat: firstCity.lat,
      lon: firstCity.lon,
    }

    return coords
  }

  async getWeather(place: Place): Promise<Weather> {
    const isCity = typeof place === 'string'
    const coords: Coords = isCity
      ? await this.getCoords(place as string)
      : (place as Coords)

    const response = await this.call(
      'data/2.5/onecall',
      Map({ lat: coords.lat, lon: coords.lon, exclude: 'minutely,alerts' })
    )
    const data = await response.json()

    const processForecast = (
      forecast: any,
      type: 'current' | 'hourly' | 'daily' = 'current'
    ): Forecast => ({
      time: forecast.dt,
      temperature:
        type !== 'daily'
          ? forecast.temp
          : {
              morning: forecast.temp.morn,
              day: forecast.temp.day,
              evening: forecast.temp.eve,
              night: forecast.temp.night,
              min: forecast.temp.min,
              max: forecast.temp.max,
            },
      feelsLike:
        type !== 'daily'
          ? forecast.feels_like
          : {
              morning: forecast.feels_like.morn,
              day: forecast.feels_like.day,
              evening: forecast.feels_like.eve,
              night: forecast.feels_like.night,
            },
      windSpeed: forecast.wind_speed,
      windDegree: forecast.wind_deg,
      humidity: forecast.humidity,
      shortDescription: forecast.weather[0].main,
      fullDescription: forecast.weather[0].description,
      icon: forecast.weather[0].icon,
    })

    const weather: Weather = {
      current: processForecast(data.current),
      hourly: data.hourly.map(processForecast, 'hourly'),
      daily: data.daily.map(processForecast, 'daily'),
    }

    return weather
  }
}
