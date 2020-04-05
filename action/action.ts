import { BaseAction, actionIds } from '../action-types/action-types';

export const apiRequestStart = (): BaseAction => ({
  type: actionIds.API_REQUEST_START,
  payload: null,
});

export const apiRequestCompleted = (
  apiData: String
): BaseAction => ({
  type: actionIds.API_REQUEST_COMPLETED,
  payload: apiData,
});
