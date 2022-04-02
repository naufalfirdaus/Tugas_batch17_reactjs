import * as ActionType from "../constants/Countries";

export const GetCountriesRequest = () => ({
  type: ActionType.GET_COUNTRIES_REQUEST,
});

export const GetCountriesSuccess = (payload) => ({
  type: ActionType.GET_COUNTRIES_SUCCESS,
  payload,
});

export const GetCountriesFailed = (payload) => ({
  type: ActionType.GET_COUNTRIES_FAILED,
  payload,
});

export const AddCountriesRequest = (payload) => ({
  type: ActionType.ADD_COUNTRIES_REQUEST,
  payload,
});

export const AddCountriesSuccess = (payload) => ({
  type: ActionType.ADD_COUNTRIES_SUCCESS,
  payload,
});

export const AddCountriesFailed = (payload) => ({
  type: ActionType.ADD_COUNTRIES_SUCCESS,
  payload,
});
