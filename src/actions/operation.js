// @flow
import type Operation from '../types/plant-type';

export const OPERATION_REQUEST = 'OPERATION_REQUEST';
export const OPERATION_SUCCESS = 'OPERATION_SUCCESS';
export const OPERATION_ERROR = 'OPERATION_ERROR';

export const operationRequest = (id: string) => ({
  type: OPERATION_REQUEST,
  id,
});

export const operationSuccess = (operation: Operation) => ({
  type: OPERATION_SUCCESS,
  operation,
});

export const operationError = (error: string) => ({
  type: OPERATION_ERROR,
  error,
});
