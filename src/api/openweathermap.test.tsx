import process from 'process'
import { getCoordsByCityName, Coords } from './openweathermap'

describe('API', () => {
  test('.env access', async () => {
    const apiKey = process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY

    expect(typeof apiKey).toBe('string')
  })

  test('getCoordsByCityName', async () => {
    const coordsExpected: Coords = {
      lat: 51.5085,
      lon: -0.1257,
    }

    const coords: Coords = await getCoordsByCityName('London')
    expect(coords).toStrictEqual(coordsExpected)
  })
})
