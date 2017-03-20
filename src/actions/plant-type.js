// @flow
import type PlantType from '../types/plant-type';

export const PLANT_TYPE_REQUEST = 'PLANT_TYPE_REQUEST';
export const PLANT_TYPE_SUCCESS = 'PLANT_TYPE_SUCCESS';
export const PLANT_TYPE_ERROR = 'PLANT_TYPE_ERROR';

export const plantTypeRequest = () => ({
  type: PLANT_TYPE_REQUEST,
});

export const plantTypeSuccess = (plantTypes: [PlantType]) => ({
  type: PLANT_TYPE_SUCCESS,
  plantTypes,
});

export const plantTypeError = (error: string) => ({
  type: PLANT_TYPE_ERROR,
  error,
});
