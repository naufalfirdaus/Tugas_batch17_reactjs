import * as ActionType from "../constants/CountriesConstant";

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
