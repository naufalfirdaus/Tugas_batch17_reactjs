import { combineReducers } from "redux";

import RegionsReduce from "./RegionReducer";
import CountriesReduce from "./CountriesReducer";
import DepartmentsReduce from "./DepartmentsReducer";
import DependentsReducer from "./DependentsReducer";
import JobsReduce from "./JobsReducer";

const rootReducer = combineReducers({
  regionStated: RegionsReduce,
  countriesStated: CountriesReduce,
  departmentsStated: DepartmentsReduce,
  dependentsStated: DependentsReducer,
  jobsStated: JobsReduce,
});

export default rootReducer;
