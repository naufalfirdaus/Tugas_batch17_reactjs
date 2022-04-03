import { takeEvery, all } from "redux-saga/effects";
import { handleAddRegion, handleDelRegion, handleGetRegion } from "./RegionSaga";
import * as ActionTypeRegion from "../constants/Region";
import { handleAddCountries, handleDelCountries, handleGetCountries } from "./CountriesSaga";
import * as ActionTypeCountries from "../constants/Countries";
import { handleAddDepartments, handleDelDepartments, handleGetDepartments } from "./DepartmentsSaga";
import * as ActionTypeDepartments from "../constants/Departments";

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
  ]);
}

export default watchAll;
