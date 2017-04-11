// @flow
export const CHANGE_SELECTED_PLANT = 'CHANGE_SELECTED_PLANT';

export const changeSelectedPlant = (id: string) => ({
  type: CHANGE_SELECTED_PLANT,
  id,
});
