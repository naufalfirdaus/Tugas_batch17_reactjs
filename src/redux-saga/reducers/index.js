import { combineReducers } from "redux";

import RegionsReduce from "./RegionReducer";
import CountriesReduce from "./CountriesReducer";
import DepartmentsReduce from "./DepartmentsReducer";

const rootReducer = combineReducers({
  regionStated: RegionsReduce,
  countriesStated: CountriesReduce,
  departmentsStated: DepartmentsReduce,
});

export default rootReducer;
