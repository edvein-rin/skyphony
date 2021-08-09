import process from 'process'

import { Coords } from './api'
import OpenWeatherMapAPI from './openweathermap'

describe('API', () => {
  const api = new OpenWeatherMapAPI(
    process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY || ''
  )

  test('getCoords', async () => {
    const coordsExpected: Coords = {
      lat: 51.5085,
      lon: -0.1257,
    }

    const coords: Coords = await api.getCoords('London')

    expect(coords).toStrictEqual(coordsExpected)
  })

  test('getWeather', async () => {
    await api.getWeather({
      lat: 51.5085,
      lon: -0.1257,
    })
  })
})
