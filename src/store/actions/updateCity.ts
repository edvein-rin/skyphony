import { City, LocationName } from '../../api/api'
import Action, { ThunkResult } from '../action'

export interface UpdateCityAction extends Action {
  type: 'updateCity'
  city: City
}

export default function updateCity(
  locationName: LocationName
): ThunkResult<Promise<UpdateCityAction>, UpdateCityAction> {
  return async (dispatch, getState) =>
    getState()
      .api.getCoords(locationName)
      .then((coords) => {
        const city: City = {
          coords,
          name: locationName,
        }

        return dispatch({ type: 'updateCity', city })
      })
}
