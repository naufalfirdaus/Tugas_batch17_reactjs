import { combineReducers } from "redux";

import RegionsReduce from "./RegionsReduce";
import CountriesReduce from "./CountriesReduce";
import LocationsReduce from "./LocationsReduce";
import DepartmentsReduce from "./DepartmentsReduce";
import JobsReduce from "./JobsReduce";
import DependentsReduce from "./DependentsReduce";

const rootReducer = combineReducers({
  regionsStated: RegionsReduce,
  countriesStated: CountriesReduce,
  locationsStated: LocationsReduce,
  departmentsStated: DepartmentsReduce,
  jobsStated: JobsReduce,
  dependentsStated: DependentsReduce
});

export default rootReducer