import { combineReducers } from "redux";
import RegionsReduce from "./RegionReducer";
import EmployeeReduce from "./EmployeeReducer";
import CountryReduce from "./CountryReducer";
import DepartmentReduce from "./DepartmentReduce";
import DependentReduce from "./DependentReduce";
import JobReduce from "./JobReduce";
import LocationReduce from "./LocationReduce";

const rootReducer = combineReducers({
    regionStated : RegionsReduce,
    countryStated : CountryReduce,
    departmentStated : DepartmentReduce,
    dependentStated : DependentReduce,
    employeeStated : EmployeeReduce,
    jobStated : JobReduce,
    locationStated : LocationReduce,
})

export default rootReducer