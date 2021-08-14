import { Map } from 'immutable'

export type Dict<T> = {
  [key: string]: T
}

export interface TemperatureRange extends Dict<number> {
  morning: number
  day: number
  evening: number
  night: number
  min: number
  max: number
}
export function isTemperatureRange(object: any): boolean {
  return (
    typeof object === 'object' &&
    'morning' in object &&
    'day' in object &&
    'evening' in object &&
    'night' in object &&
    'min' in object &&
    'max' in object
  )
}

export interface FeelsLikeRange extends Dict<number> {
  morning: number
  day: number
  evening: number
  night: number
}

export interface Forecast {
  time: number
  temperature: number
  feelsLike: number
  windSpeed: number
  windDegree: number
  humidity: number
  shortDescription: string
  fullDescription?: string
  icon?: string
}
export type CurrentForecast = Forecast
export type HourlyForecast = Forecast
export interface DailyForecast
  extends Omit<Forecast, 'temperature' | 'feelsLike'> {
  temperature: TemperatureRange
  feelsLike: FeelsLikeRange
}

export interface Weather {
  current: Forecast
  hourly: HourlyForecast[]
  daily: DailyForecast[]
}

export type LocationName = string
export const isLocationName = (object: any): boolean =>
  typeof object === 'string'

export interface Coords {
  lat: number
  lon: number
}
export function isCoords(object: any): boolean {
  return typeof object === 'object' && 'lat' in object && 'lon' in object
}

export interface City {
  name: string
  coords: Coords
}
export function isCity(object: any): boolean {
  return typeof object === 'object' && 'name' in object && 'coords' in object
}

export type Location = LocationName | Coords | City
export const isLocation = (object: any): boolean =>
  isLocationName(object) || isCoords(object) || isCity(object)

export interface API {
  getWeather(location: Location): Promise<Weather>
  getCoords(location: LocationName): Promise<Coords>
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
