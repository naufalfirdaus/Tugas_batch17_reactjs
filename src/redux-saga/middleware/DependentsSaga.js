import { call,put } from "redux-saga/effects";
import apiDependents from "../../api/apiDependents";
import { GetDependentsSuccess,GetDependentsFailed,AddDependentsSuccess,AddDependentsFailed,DelDependentsSuccess,DelDependentsFailed } from "../actions/DependentsAction";

function* handleGetDependents(){
    try {
        const result = yield call(apiDependents.list);
        yield put(GetDependentsSuccess(result))
    }
    catch(error){
        yield put(GetDependentsFailed(error))
    }
}
function* handleAddDependents(action){
    const {payload} = action
    try {
        const result = yield call(apiDependents.Create,payload)
        yield put(AddDependentsSuccess(result.data))
    } catch (error) {
        yield put(AddDependentsFailed(error))
    }
}
function* handleDelDependents(action){
    const {payload} =action
    try {
        const result = yield call(apiDependents.deleteRow,payload)
        yield put(DelDependentsSuccess(payload))
    } catch (error) {
        yield put(DelDependentsFailed(error))
    }
}

export {
    handleGetDependents,
    handleAddDependents,
    handleDelDependents
}