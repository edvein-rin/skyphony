import process from 'process'
import { Map } from 'immutable'

const baseURL = 'http://api.openweathermap.org/'
const APIKey = process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY

type RequestType = 'geo/1.0/direct' | 'data/2.5/weather' | 'data/2.5/onecall'
type RequestOptions = Map<string, any>

export interface Coords {
  lat: number
  lon: number
}

export async function request(
  type: RequestType,
  options: RequestOptions
): Promise<any> {
  const link = new URL(baseURL + type)
  const optionsWithAPIKey = options.set('appid', APIKey)
  link.search = new URLSearchParams(optionsWithAPIKey.toObject()).toString()

  const response = await fetch(link.toString())
  const data = await response.json()

  return data
}

export async function getCoordsByCityName(name: string): Promise<Coords> {
  const response = await request('geo/1.0/direct', Map({ q: name }))
  const city = response[0]
  const coords: Coords = {
    lat: city.lat,
    lon: city.lon,
  }

  return coords
}
