import {call,put} from 'redux-saga/effects'
import apiDependent from '../../api/apiDependent'
import { GetDependentSuccess,GetDependentFailed, DelDependentSuccess, DelDependentFailed, AddDependentSuccess, AddDependentFailed, EditDependentRequest, EditDependentSuccess, EditDependentFailed } from '../action/DependentAction'

function* handleGetDependent() {
    try {
        const result = yield call(apiDependent.list)
        yield put(GetDependentSuccess(result))
    } catch (error) {
        yield put(GetDependentFailed(error))
    }
}

function* handleDelDependent(action) {
    const {payload} = action
    try {
        const result = yield call(apiDependent.deleteRow,payload)
        yield put(DelDependentSuccess(payload))
    } catch (error) {
        yield put(DelDependentFailed(error))
    }
}

function* handleAddDependent(action) {
    const {payload} = action
    try {
        const result = yield call(apiDependent.Create,payload)
        yield put(AddDependentSuccess(result.data))
    } catch (error) {
        yield put(AddDependentFailed(error))
    }
}

function* handleEditDependent(action) {
    const {payload} = action
    try {
        const result = yield call(apiDependent.update,payload)
        yield put(EditDependentSuccess(result.data))
    } catch (error) {
        yield put(EditDependentFailed(error))
    }
}

export {
    handleGetDependent,
    handleDelDependent,
    handleAddDependent,
    handleEditDependent
}