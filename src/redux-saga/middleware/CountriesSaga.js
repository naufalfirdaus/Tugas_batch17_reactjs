import { call, put } from "redux-saga/effects";
import apiCountries from "../../api/apiCountries";
import { GetCountriesSuccess, GetCountriesFailed } from "../actions/CountriesAction";

function* handleGetCountries() {
  try {
    const result = yield call(apiCountries.list);
    yield put(GetCountriesSuccess(result));
  } catch (error) {
    yield put(GetCountriesFailed(error));
  }
}

function* handleAddCountries(action) {
  const { payload } = action;
  try {
    const result = yield call(apiCountries.create, payload);
    yield put(GetCountriesSuccess(result.data));
  } catch (error) {
    yield put(GetCountriesFailed(error));
  }
}

export { handleGetCountries, handleAddCountries };
