import { call,put } from "redux-saga/effects";
import apiDepartments from "../../api/apiDepartments";
import { GetDepartmentsSuccess,GetDepartmentsFailed,AddDepartmentsSuccess,AddDepartmentsFailed,DelDepartmentsSuccess,DelDepartmentsFailed } from "../actions/DepartmentsAction";

function* handleGetDepartments(){
    try {
        const result = yield call(apiDepartments.list);
        yield put(GetDepartmentsSuccess(result))
    }
    catch(error){
        yield put(GetDepartmentsFailed(error))
    }
}
function* handleAddDepartments(action){
    const {payload} = action
    try {
        const result = yield call(apiDepartments.Create,payload)
        yield put(AddDepartmentsSuccess(result.data))
    } catch (error) {
        yield put(AddDepartmentsFailed(error))
    }
}
function* handleDelDepartments(action){
    const {payload} =action
    try {
        const result = yield call(apiDepartments.deleteRow,payload)
        yield put(DelDepartmentsSuccess(payload))
    } catch (error) {
        yield put(DelDepartmentsFailed(error))
    }
}

export {
    handleGetDepartments,
    handleAddDepartments,
    handleDelDepartments
}