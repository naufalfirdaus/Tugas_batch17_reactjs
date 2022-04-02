import { takeEvery, all } from "redux-saga/effects";
import { handleAddRegion, handleDelRegion, handleGetRegion } from "./RegionSaga";
import * as ActionTypeRegion from "../constants/Region";
import { handleAddCountries, handleGetCountries } from "./CountriesSaga";
import * as ActionTypeCountries from "../constants/Countries";

function* watchAll() {
  yield all([
    takeEvery(ActionTypeRegion.GET_REGIONS_REQUEST, handleGetRegion),
    takeEvery(ActionTypeRegion.DEL_REGIONS_REQUEST, handleDelRegion),
    takeEvery(ActionTypeRegion.ADD_REGIONS_REQUEST, handleAddRegion),
    takeEvery(ActionTypeCountries.GET_COUNTRIES_REQUEST, handleGetCountries),
    takeEvery(ActionTypeCountries.ADD_COUNTRIES_REQUEST, handleAddCountries),
  ]);
}

export default watchAll;
