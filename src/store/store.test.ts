import createStore from './store'
import { LocationName, Location, City } from '../api/api'
import { weatherSelector } from './selectors/weather'
import updateWeather from './actions/updateWeather'
import updateCity from './actions/updateCity'

describe('Store', () => {
  it('creates', () => {
    const store = createStore()
    expect(store).toBeDefined()
  })

  it('updates weather', async () => {
    const store = createStore()
    const location: Location = {
      lat: 51.5085,
      lon: -0.1257,
    }

    await store.dispatch(updateWeather(location))

    expect(weatherSelector(store.getState())).toBeDefined()
  })

  it('updates city', async () => {
    const cityExpected: City = {
      coords: {
        lat: 51.5085,
        lon: -0.1257,
      },
      name: 'London',
    }

    const store = createStore()
    const locationName: LocationName = 'London'

    await store.dispatch(updateCity(locationName))

    expect(store.getState().city).toStrictEqual(cityExpected)
  })
})
