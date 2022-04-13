import {call,put} from 'redux-saga/effects'
import apiCountry from '../../api/apiCountry'
import { GetCountrySuccess,GetCountryFailed, DelCountrySuccess, DelCountryFailed, AddCountrySuccess, AddCountryFailed, EditCountryRequest, EditCountrySuccess, EditCountryFailed } from '../action/CountryAction'

function* handleGetCountry() {
    try {
        const result = yield call(apiCountry.list)
        yield put(GetCountrySuccess(result))
    } catch (error) {
        yield put(GetCountryFailed(error))
    }
}

function* handleDelCountry(action) {
    const {payload} = action
    try {
        const result = yield call(apiCountry.deleteRow,payload)
        yield put(DelCountrySuccess(payload))
    } catch (error) {
        yield put(DelCountryFailed(error))
    }
}

function* handleAddCountry(action) {
    const {payload} = action
    try {
        const result = yield call(apiCountry.Create,payload)
        yield put(AddCountrySuccess(result.data))
    } catch (error) {
        yield put(AddCountryFailed(error))
    }
}

function* handleEditCountry(action) {
    const {payload} = action
    try {
        const result = yield call(apiCountry.update,payload)
        yield put(EditCountrySuccess(result.data))
    } catch (error) {
        yield put(EditCountryFailed(error))
    }
}

export {
    handleGetCountry,
    handleDelCountry,
    handleAddCountry,
    handleEditCountry
}