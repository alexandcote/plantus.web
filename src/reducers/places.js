// @flow
import { PLACES_SUCCESS, PLACES_ERROR } from '../actions/places';
import type Place from '../types/place';

type State = [Place]

const places = (state: State = [], action: Object) => {
  switch (action.type) {
    case PLACES_SUCCESS:
      return action.places;
    case PLACES_ERROR:
      return [];
    default:
      return state;
  }
};

export default places;
