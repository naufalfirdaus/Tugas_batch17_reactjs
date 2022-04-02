import * as ActionType from "../constants/Countries";

const INIT_STATE = {
  countries: [],
};

const CountriesReduce = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ActionType.GET_COUNTRIES_REQUEST:
      return { ...state };
    case ActionType.GET_COUNTRIES_SUCCESS:
      return GetCountriesSucceed(state, action);
    case ActionType.ADD_COUNTRIES_REQUEST:
      return { ...state };
    case ActionType.ADD_COUNTRIES_SUCCESS:
      return AddCountriesSucceed(state, action);
    default:
      return GetCountriesSucceed(state, action);
  }
};

const GetCountriesSucceed = (state, action) => {
  return {
    ...state,
    countries: action.payload,
  };
};

const AddCountriesSucceed = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    countries: [...state.countries, payload],
  };
};

export default CountriesReduce;
