// @flow
import type Plant from '../types/plant';

export const PLANTS_REQUEST = 'PLANTS_REQUEST';
export const PLANTS_SUCCESS = 'PLANTS_SUCCESS';
export const PLANTS_ERROR = 'PLANTS_ERROR';

export const PLANT_REQUEST = 'PLANT_REQUEST';
export const PLANT_SUCCESS = 'PLANT_SUCCESS';
export const PLANT_ERROR = 'PLANT_ERROR';

export const plantsRequest = () => ({
  type: PLANTS_REQUEST,
});

export const plantsSuccess = (plants: [Plant]) => ({
  type: PLANTS_SUCCESS,
  plants,
});

export const plantsError = (error: string) => ({
  type: PLANTS_ERROR,
  error,
});

export const plantRequest = (id: string) => ({
  type: PLANT_REQUEST,
  id,
});

export const plantSuccess = (plant: Plant) => ({
  type: PLANT_SUCCESS,
  plant,
});

export const plantError = (error: string) => ({
  type: PLANT_ERROR,
  error,
});
