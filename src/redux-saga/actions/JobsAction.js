import * as ActionType from '../constants/Jobs'

export const GetJobsRequest = () =>({
    type : ActionType.GET_JOBS_REQUEST
})

export const GetJobsSuccess = (payload) =>({
    type: ActionType.GET_JOBS_SUCCESS,
    payload
})

export const GetJobsFailed = (payload) =>({
    type:ActionType.GET_JOBS_FAILED,
    payload
})

export const AddJobsRequest = (payload) =>({
    type:ActionType.ADD_JOBS_REQUEST,
    payload
})

export const AddJobsSuccess = (payload) =>({
    type:ActionType.ADD_JOBS_SUCCESS,
    payload
})

export const AddJobsFailed = (payload) =>({
    type:ActionType.ADD_JOBS_FAILED,
    payload
})

export const DelJobsRequest = (payload) =>({
    type:ActionType.DEL_JOBS_REQUEST,
    payload
})

export const DelJobsSuccess = (payload) =>({
    type : ActionType.DEL_JOBS_SUCCESS,
    payload
})

export const DelJobsFailed = (payload) =>({
    type : ActionType.DEL_JOBS_FAILED,
    payload
})