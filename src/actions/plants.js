// @flow
import type Plant from '../types/plant';

export const PLANTS_REQUEST = 'PLANTS_REQUEST';
export const PLANTS_SUCCESS = 'PLANTS_SUCCESS';
export const PLANTS_ERROR = 'PLANTS_ERROR';
export const LOGOUT = 'LOGOUT';

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
