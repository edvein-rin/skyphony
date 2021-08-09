import { Map } from 'immutable'

export interface Forecast {
  time: number
  temperature:
    | number
    | {
        morning: number
        day: number
        evening: number
        night: number
        min: number
        max: number
      }
  feelsLike:
    | number
    | {
        morning: number
        day: number
        evening: number
        night: number
      }
  windSpeed: number
  windDegree: number
  humidity: number
  shortDescription: string
  fullDescription?: string
  icon?: string
}
export interface Weather {
  current: Forecast
  hourly: Forecast[]
  daily: Forecast[]
}

export type City = string
export interface Coords {
  lat: number
  lon: number
}
export type Place = City | Coords

export interface API {
  getWeather(place: Place): Promise<Weather>
}

export type Options = Map<string, any>
export async function request(
  url: string,
  options: Options
): Promise<Response> {
  const link = new URL(url)
  link.search = new URLSearchParams(options.toObject()).toString()

  const response: Response = await fetch(link.toString())

  return response
}
