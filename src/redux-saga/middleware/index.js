import { takeEvery, all } from "redux-saga/effects";
import { handleAddRegion, handleDelRegion, handleGetRegion } from "./RegionMiddle";
import * as ActionTypeRegion from "../constants/RegionConstant";
import { handleGetCountries } from "./CountriesMiddle";
import * as ActionTypeCountries from "../constants/CountriesConstant";

function* watchAll() {
  yield all([
    takeEvery(ActionTypeRegion.GET_REGIONS_REQUEST, handleGetRegion),
    takeEvery(ActionTypeRegion.DEL_REGIONS_REQUEST, handleDelRegion),
    takeEvery(ActionTypeRegion.ADD_REGIONS_REQUEST, handleAddRegion),
    takeEvery(ActionTypeCountries.GET_COUNTRIES_REQUEST, handleGetCountries),
  ]);
}

export default watchAll;
