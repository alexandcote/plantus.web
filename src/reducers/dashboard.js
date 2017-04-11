// @flow
import { CHANGE_SELECTED_PLANT } from '../actions/dashboard';

type State = {
  selectedPlant: ?number,
}

const places = (state: State = { selectedPlant: null }, action: Object) => {
  switch (action.type) {
    case CHANGE_SELECTED_PLANT:
      return {
        ...state,
        selectedPlant: action.id,
      };
    default:
      return state;
  }
};

export default places;
