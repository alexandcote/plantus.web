// @flow
import * as PlantsActions from '../actions/plants';
import type Plant from '../types/plant';

type State = {
  list: [Plant],
  modalVisibility: boolean,
}

const plants = (state: State = { list: [], modalVisibility: false }, action: Object) => {
  switch (action.type) {
    case PlantsActions.PLANTS_SUCCESS:
      return {
        list: action.plants,
        modalVisibility: state.modalVisibility,
      };
    case PlantsActions.PLANTS_ERROR:
      return {
        list: [],
        modalVisibility: state.modalVisibility,
      };
    case PlantsActions.CHANGE_PLANTS_MODAL_VISIBILITY:
      return {
        list: state.list,
        modalVisibility: action.visibility,
      };
    case PlantsActions.NEW_PLANT_SUCCESS:
      return {
        list: state.list.concat(action.plant),
        modalVisibility: state.modalVisibility,
      };
    default:
      return state;
  }
};

export default plants;
