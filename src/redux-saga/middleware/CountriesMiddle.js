import { call, put } from "redux-saga/effects";
import apiCountries from "../../api/apiCountries";
import { GetCountriesSuccess, GetCountriesFailed } from "../action/CountriesAction";

function* handleGetCountries() {
  try {
    const result = yield call(apiCountries.list);
    yield put(GetCountriesSuccess(result));
  } catch (error) {
    yield put(GetCountriesFailed(error));
  }
}

export { handleGetCountries };
