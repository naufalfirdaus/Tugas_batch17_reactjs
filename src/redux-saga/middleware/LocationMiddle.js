import {call,put} from 'redux-saga/effects'
import apiLocation from '../../api/apiLocation'
import { GetLocationSuccess,GetLocationFailed, DelLocationSuccess, DelLocationFailed, AddLocationSuccess, AddLocationFailed, EditLocationRequest, EditLocationSuccess, EditLocationFailed } from '../action/LocationAction'

function* handleGetLocation() {
    try {
        const result = yield call(apiLocation.list)
        yield put(GetLocationSuccess(result))
    } catch (error) {
        yield put(GetLocationFailed(error))
    }
}

function* handleDelLocation(action) {
    const {payload} = action
    try {
        const result = yield call(apiLocation.deleteRow,payload)
        yield put(DelLocationSuccess(payload))
    } catch (error) {
        yield put(DelLocationFailed(error))
    }
}

function* handleAddLocation(action) {
    const {payload} = action
    try {
        const result = yield call(apiLocation.Create,payload)
        yield put(AddLocationSuccess(result.data))
    } catch (error) {
        yield put(AddLocationFailed(error))
    }
}

function* handleEditLocation(action) {
    const {payload} = action
    try {
        const result = yield call(apiLocation.update,payload)
        yield put(EditLocationSuccess(result.data))
    } catch (error) {
        yield put(EditLocationFailed(error))
    }
}

export {
    handleGetLocation,
    handleDelLocation,
    handleAddLocation,
    handleEditLocation
}