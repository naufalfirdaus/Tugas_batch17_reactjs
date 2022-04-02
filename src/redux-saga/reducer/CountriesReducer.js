import * as ActionType from "../constants/CountriesConstant";

const INIT_STATE = {
  countries: [],
};

const CountriesReduce = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ActionType.GET_COUNTRIES_REQUEST:
      return { ...state };
    case ActionType.GET_COUNTRIES_SUCCESS:
      return GetCountriesSucceed(state, action);
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

export default CountriesReduce;
