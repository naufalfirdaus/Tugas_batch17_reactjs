import {call,put} from 'redux-saga/effects'
import apiDepartment from '../../api/apiDepartment'
import { GetDepartmentSuccess,GetDepartmentFailed, DelDepartmentSuccess, DelDepartmentFailed, AddDepartmentSuccess, AddDepartmentFailed, EditDepartmentRequest, EditDepartmentSuccess, EditDepartmentFailed } from '../action/DepartmentAction'

function* handleGetDepartment() {
    try {
        const result = yield call(apiDepartment.list)
        yield put(GetDepartmentSuccess(result))
    } catch (error) {
        yield put(GetDepartmentFailed(error))
    }
}

function* handleDelDepartment(action) {
    const {payload} = action
    try {
        const result = yield call(apiDepartment.deleteRow,payload)
        yield put(DelDepartmentSuccess(payload))
    } catch (error) {
        yield put(DelDepartmentFailed(error))
    }
}

function* handleAddDepartment(action) {
    const {payload} = action
    try {
        const result = yield call(apiDepartment.Create,payload)
        yield put(AddDepartmentSuccess(result.data))
    } catch (error) {
        yield put(AddDepartmentFailed(error))
    }
}

function* handleEditDepartment(action) {
    const {payload} = action
    try {
        const result = yield call(apiDepartment.update,payload)
        yield put(EditDepartmentSuccess(result.data))
    } catch (error) {
        yield put(EditDepartmentFailed(error))
    }
}

export {
    handleGetDepartment,
    handleDelDepartment,
    handleAddDepartment,
    handleEditDepartment
}