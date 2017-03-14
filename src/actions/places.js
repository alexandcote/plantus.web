// @flow
import type Place from '../types/place';

export const PLACES_REQUEST = 'PLACES_REQUEST';
export const PLACES_SUCCESS = 'PLACES_SUCCESS';
export const PLACES_ERROR = 'PLACES_ERROR';

export const PLACE_REQUEST = 'PLACE_REQUEST';
export const PLACE_SUCCESS = 'PLACE_SUCCESS';
export const PLACE_ERROR = 'PLACE_ERROR';

export const CHANGE_PLACES_MODAL_VISIBILITY = 'CHANGE_PLACES_MODAL_VISIBILITY';

export const NEW_PLACE_REQUEST = 'NEW_PLACE_REQUEST';
export const NEW_PLACE_SUCCESS = 'NEW_PLACE_SUCCESS';
export const NEW_PLACE_ERROR = 'NEW_PLACE_ERROR';

export const placesRequest = () => ({
  type: PLACES_REQUEST,
});

export const placesSuccess = (places: [Place]) => ({
  type: PLACES_SUCCESS,
  places,
});

export const placesError = (error: string) => ({
  type: PLACES_ERROR,
  error,
});

export const placeRequest = (id: string) => ({
  type: PLACE_REQUEST,
  id,
});

export const placeSuccess = (place: Place) => ({
  type: PLACE_SUCCESS,
  place,
});

export const placeError = (error: string) => ({
  type: PLACE_ERROR,
  error,
});

export const newPlaceRequest = (place: Place) => ({
  type: NEW_PLACE_REQUEST,
  place,
});

export const newPlaceSuccess = (place: Place) => ({
  type: NEW_PLACE_SUCCESS,
  place,
});

export const newPlaceError = (error: string) => ({
  type: NEW_PLACE_ERROR,
  error,
});

export const changePlacesModalVisibility = (visibility: boolean) => ({
  type: CHANGE_PLACES_MODAL_VISIBILITY,
  visibility,
});
