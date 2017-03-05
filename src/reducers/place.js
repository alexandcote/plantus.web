// @flow
import { PLACE_SUCCESS, PLACE_ERROR } from '../actions/places';
import type Place from '../types/place';

type State = Place

const places = (state: State = null, action: Object) => {
  switch (action.type) {
    case PLACE_SUCCESS:
      return action.place;
    case PLACE_ERROR:
      return null;
    default:
      return state;
  }
};

export default places;
