import { takeEvery, all } from "redux-saga/effects";
import { handleAddRegion, handleDelRegion, handleGetRegion } from "./RegionSaga";
import * as ActionTypeRegion from "../constants/Region";
import { handleAddCountries, handleDelCountries, handleGetCountries } from "./CountriesSaga";
import * as ActionTypeCountries from "../constants/Countries";
import { handleAddDepartments, handleDelDepartments, handleGetDepartments } from "./DepartmentsSaga";
import * as ActionTypeDepartments from "../constants/Departments";
import { handleAddDependents, handleDelDependents, handleGetDependents } from "./DependentsSaga";
import * as ActionTypeDependents from "../constants/Dependents";
import { handleAddJobs, handleDelJobs, handleGetJobs } from "./JobsSaga";
import * as ActionTypeJobs from "../constants/Jobs";

function* watchAll() {
  yield all([
    takeEvery(ActionTypeRegion.GET_REGIONS_REQUEST, handleGetRegion),
    takeEvery(ActionTypeRegion.DEL_REGIONS_REQUEST, handleDelRegion),
    takeEvery(ActionTypeRegion.ADD_REGIONS_REQUEST, handleAddRegion),
    takeEvery(ActionTypeCountries.GET_COUNTRIES_REQUEST, handleGetCountries),
    takeEvery(ActionTypeCountries.ADD_COUNTRIES_REQUEST, handleAddCountries),
    takeEvery(ActionTypeCountries.DEL_COUNTRIES_REQUEST, handleDelCountries),
    takeEvery(ActionTypeDepartments.GET_DEPARTMENTS_REQUEST, handleGetDepartments),
    takeEvery(ActionTypeDepartments.ADD_DEPARTMENTS_REQUEST, handleAddDepartments),
    takeEvery(ActionTypeDepartments.DEL_DEPARTMENTS_REQUEST, handleDelDepartments),
    takeEvery(ActionTypeDependents.GET_DEPENDENTS_REQUEST, handleGetDependents),
    takeEvery(ActionTypeDependents.ADD_DEPENDENTS_REQUEST, handleAddDependents),
    takeEvery(ActionTypeDependents.DEL_DEPENDENTS_REQUEST, handleDelDependents),
    takeEvery(ActionTypeJobs.GET_JOBS_REQUEST, handleGetJobs),
    takeEvery(ActionTypeJobs.ADD_JOBS_REQUEST, handleAddJobs),
    takeEvery(ActionTypeJobs.DEL_JOBS_REQUEST, handleDelJobs),
  ]);
}

export default watchAll;
