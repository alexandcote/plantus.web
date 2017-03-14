// @flow
import * as PlacesActions from '../actions/places';
import type Place from '../types/place';

type State = {
  list: [Place],
  modalVisibility: boolean,
}

const places = (state: State = { list: [], modalVisibility: false }, action: Object) => {
  switch (action.type) {
    case PlacesActions.PLACES_SUCCESS:
      return {
        list: action.places,
        modalVisibility: state.modalVisibility,
      };
    case PlacesActions.PLACES_ERROR:
      return {
        list: [],
        modalVisibility: state.modalVisibility,
      };
    case PlacesActions.CHANGE_PLACES_MODAL_VISIBILITY:
      return {
        list: state.list,
        modalVisibility: action.visibility,
      };
    case PlacesActions.NEW_PLACE_SUCCESS:
      return {
        list: state.list.concat(action.place),
        modalVisibility: state.modalVisibility,
      };
    default:
      return state;
  }
};

export default places;
