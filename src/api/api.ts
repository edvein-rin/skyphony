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

export type LocationName = string
export const isLocationName = (object: any): boolean =>
  typeof object === 'string'

export interface Coords {
  lat: number
  lon: number
}
export function isCoords(object: any): boolean {
  return 'lat' in object && 'lon' in object
}

export interface City {
  name: string
  coords: Coords
}
export function isCity(object: any): boolean {
  return 'name' in object && 'coords' in object
}

export type Location = LocationName | Coords | City
export const isLocation = (object: any): boolean =>
  isLocationName(object) || isCoords(object) || isCity(object)

export interface API {
  getWeather(location: Location): Promise<Weather>
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
