import { combineReducers } from "redux";

import RegionsReduce from "./RegionReducer";
import CountriesReduce from "./CountriesReducer";

const rootReducer = combineReducers({
  regionStated: RegionsReduce,
  countriesStated: CountriesReduce,
});

export default rootReducer;
