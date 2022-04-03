import { combineReducers } from "redux";

import RegionsReduce from "./RegionReducer";
import CountriesReduce from "./CountriesReducer";
import DepartmentsReduce from "./DepartmentsReducer";
import DependentsReducer from "./DependentsReducer";

const rootReducer = combineReducers({
  regionStated: RegionsReduce,
  countriesStated: CountriesReduce,
  departmentsStated: DepartmentsReduce,
  dependentsStated: DependentsReducer,
});

export default rootReducer;
