// @flow
import * as PlantTypeActions from '../actions/plant-type';
import type PlantType from '../types/plant-type';

type State = [PlantType]

const plantTypes = (state: State = [], action: Object) => {
  switch (action.type) {
    case PlantTypeActions.PLANT_TYPE_SUCCESS:
      return action.plantTypes;
    case PlantTypeActions.PLANT_TYPE_ERROR:
      return [];
    default:
      return state;
  }
};

export default plantTypes;
