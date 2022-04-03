import { call, put } from "redux-saga/effects";
import apiCountries from "../../api/apiCountries";
import { GetCountriesSuccess, GetCountriesFailed, AddCountriesSuccess, AddCountriesFailed, DelCountriesSuccess } from "../actions/CountriesAction";

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
    yield put(AddCountriesSuccess(result.data));
  } catch (error) {
    yield put(AddCountriesFailed(error));
  }
}

function* handleDelCountries(action) {
  const { payload } = action;
  try {
    // const result = yield call(apiCountries.deleteRow, payload);
    yield put(DelCountriesSuccess(payload));
  } catch (error) {
    yield put(DelCountriesSuccess(error));
  }
}

export { handleGetCountries, handleAddCountries, handleDelCountries };
