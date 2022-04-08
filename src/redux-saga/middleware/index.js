import { takeEvery, all } from "redux-saga/effects";
import { handleAddRegion, handleDelRegion, handleGetRegion } from "./RegionsSaga";
import { handleAddCountries, handleDelCountries, handleGetCountries } from "./CountriesSaga";
import { handleAddLocations, handleDelLocations, handleGetLocations } from "./LocationsSaga";
import { handleAddDepartments, handleDelDepartments, handleGetDepartments } from "./DepartmentsSaga";
import { handleAddJobs, handleDelJobs, handleGetJobs } from "./JobsSaga";
import { handleAddDependents, handleDelDependents, handleGetDependents } from "./DependentsSaga";


import * as ActionTypeRegion from "../constants/Regions";
import * as ActionTypeCountries from "../constants/Countries";
import * as ActionTypeLocations from "../constants/Locations";
import * as ActionTypeDepartments from "../constants/Departments";
import * as ActionTypeJobs from "../constants/Jobs";
import * as ActionTypeDependents from "../constants/Dependents";



function *watchAll(){
    yield all([
    takeEvery(ActionTypeRegion.GET_REGIONS_REQUEST, handleGetRegion),
    takeEvery(ActionTypeRegion.DEL_REGIONS_REQUEST, handleDelRegion),
    takeEvery(ActionTypeRegion.ADD_REGIONS_REQUEST, handleAddRegion),
    takeEvery(ActionTypeCountries.GET_COUNTRIES_REQUEST, handleGetCountries),
    takeEvery(ActionTypeCountries.ADD_COUNTRIES_REQUEST, handleAddCountries),
    takeEvery(ActionTypeCountries.DEL_COUNTRIES_REQUEST, handleDelCountries),
    takeEvery(ActionTypeLocations.GET_LOCATIONS_REQUEST, handleGetLocations),
    takeEvery(ActionTypeLocations.ADD_LOCATIONS_REQUEST, handleAddLocations),
    takeEvery(ActionTypeLocations.DEL_LOCATIONS_REQUEST, handleDelLocations),
    takeEvery(ActionTypeDepartments.GET_DEPARTMENTS_REQUEST, handleGetDepartments),
    takeEvery(ActionTypeDepartments.ADD_DEPARTMENTS_REQUEST, handleAddDepartments),
    takeEvery(ActionTypeDepartments.DEL_DEPARTMENTS_REQUEST, handleDelDepartments),
    takeEvery(ActionTypeJobs.GET_JOBS_REQUEST, handleGetJobs),
    takeEvery(ActionTypeJobs.ADD_JOBS_REQUEST, handleAddJobs),
    takeEvery(ActionTypeJobs.DEL_JOBS_REQUEST, handleDelJobs),
    takeEvery(ActionTypeDependents.GET_DEPENDENTS_REQUEST, handleGetDependents),
    takeEvery(ActionTypeDependents.ADD_DEPENDENTS_REQUEST, handleAddDependents),
    takeEvery(ActionTypeDependents.DEL_DEPENDENTS_REQUEST, handleDelDependents),
    ])
}

export default watchAll;