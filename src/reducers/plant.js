// @flow
import { PLANT_SUCCESS, PLANT_ERROR } from '../actions/plants';
import type Plant from '../types/plant';

type State = Plant

const plants = (state: State = null, action: Object) => {
  switch (action.type) {
    case PLANT_SUCCESS:
      return action.plant;
    case PLANT_ERROR:
      return null;
    default:
      return state;
  }
};

export default plants;
