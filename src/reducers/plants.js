// @flow
import { PLANTS_SUCCESS, PLANTS_ERROR } from '../actions/plants';
import type Plant from '../types/plant';

type State = [Plant]

const plants = (state: State = [], action: Object) => {
  switch (action.type) {
    case PLANTS_SUCCESS:
      return action.plants;
    case PLANTS_ERROR:
      return [];
    default:
      return state;
  }
};

export default plants;
