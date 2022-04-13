import {call,put} from 'redux-saga/effects'
import apiJob from '../../api/apiJob'
import { GetJobSuccess,GetJobFailed, DelJobSuccess, DelJobFailed, AddJobSuccess, AddJobFailed, EditJobRequest, EditJobSuccess, EditJobFailed } from '../action/JobAction'

function* handleGetJob() {
    try {
        const result = yield call(apiJob.list)
        yield put(GetJobSuccess(result))
    } catch (error) {
        yield put(GetJobFailed(error))
    }
}

function* handleDelJob(action) {
    const {payload} = action
    try {
        const result = yield call(apiJob.deleteRow,payload)
        yield put(DelJobSuccess(payload))
    } catch (error) {
        yield put(DelJobFailed(error))
    }
}

function* handleAddJob(action) {
    const {payload} = action
    try {
        const result = yield call(apiJob.Create,payload)
        yield put(AddJobSuccess(result.data))
    } catch (error) {
        yield put(AddJobFailed(error))
    }
}

function* handleEditJob(action) {
    const {payload} = action
    try {
        const result = yield call(apiJob.update,payload)
        yield put(EditJobSuccess(result.data))
    } catch (error) {
        yield put(EditJobFailed(error))
    }
}

export {
    handleGetJob,
    handleDelJob,
    handleAddJob,
    handleEditJob
}