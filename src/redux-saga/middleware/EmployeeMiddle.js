import {call,put} from 'redux-saga/effects'
import apiEmployee from '../../api/apiEmployee'
import {GetEmployeeSuccess,GetEmployeeFailed, DelEmployeeSuccess, DelEmployeeFailed, AddEmployeeSuccess, AddEmployeeFailed, EditEmployeeSuccess, EditEmployeeFailed} from '../action/EmployeeAction'

function* handleGetEmployee() {
    try {
        const result = yield call(apiEmployee.list)
        yield put(GetEmployeeSuccess(result))
    } catch (error) {
        yield put(GetEmployeeFailed(error))
    }
}

function* handleDelEmployee(action) {
    const {payload} = action
    try {
        const result = yield call(apiEmployee.deleteRow,payload)
        yield put(DelEmployeeSuccess(payload))
    } catch (error) {
        yield put(DelEmployeeFailed(error))
    }
}

function* handleAddEmployee(action) {
    const {payload} = action
    try {
        const result = yield call(apiEmployee.Create,payload)
        yield put(AddEmployeeSuccess(result.data))
    } catch (error) {
        yield put(AddEmployeeFailed(error))
    }
}

function* handleEditEmployee(action) {
    const {payload} = action
    try {
        const result = yield call(apiEmployee.update,payload)
        yield put(EditEmployeeSuccess(result.data))
    } catch (error) {
        yield put(EditEmployeeFailed(error))
    }
}

export {
    handleGetEmployee,
    handleDelEmployee,
    handleAddEmployee,
    handleEditEmployee
}