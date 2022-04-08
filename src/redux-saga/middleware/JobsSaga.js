import { call,put } from "redux-saga/effects";
import apiJobs from "../../api/apiJobs";
import { GetJobsSuccess,GetJobsFailed,AddJobsSuccess,AddJobsFailed,DelJobsSuccess,DelJobsFailed } from "../actions/JobsAction";

function* handleGetJobs(){
    try {
        const result = yield call(apiJobs.list);
        yield put(GetJobsSuccess(result))
    }
    catch(error){
        yield put(GetJobsFailed(error))
    }
}
function* handleAddJobs(action){
    const {payload} = action
    try {
        const result = yield call(apiJobs.Create,payload)
        yield put(AddJobsSuccess(result.data))
    } catch (error) {
        yield put(AddJobsFailed(error))
    }
}
function* handleDelJobs(action){
    const {payload} =action
    try {
        const result = yield call(apiJobs.deleteRow,payload)
        yield put(DelJobsSuccess(payload))
    } catch (error) {
        yield put(DelJobsFailed(error))
    }
}

export {
    handleGetJobs,
    handleAddJobs,
    handleDelJobs
}