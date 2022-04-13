import * as ActionType from '../constants/JobConstant'

export const GetJobRequest = () =>({
    type : ActionType.GET_JOB_REQUEST
})

export const GetJobSuccess = (payload) =>({
    type : ActionType.GET_JOB_SUCCESS,
    payload
})

export const GetJobFailed = (payload) =>({
    type : ActionType.GET_JOB_FAILED,
    payload
})

export const DelJobRequest = (payload) =>({
    type : ActionType.DEL_JOB_REQUEST,
    payload
})

export const DelJobSuccess = (payload) =>({
    type : ActionType.DEL_JOB_SUCCESS,
    payload
})

export const DelJobFailed = (payload) =>({
    type : ActionType.DEL_JOB_FAILED,
    payload
})

export const AddJobRequest = (payload) =>({
    type : ActionType.ADD_JOB_REQUEST,
    payload
})

export const AddJobSuccess = (payload) =>({
    type : ActionType.ADD_JOB_SUCCESS,
    payload
})

export const AddJobFailed = (payload) =>({
    type : ActionType.ADD_JOB_FAILED,
    payload
})

export const EditJobRequest = (payload) =>({
    type : ActionType.EDIT_JOB_REQUEST,
    payload
})

export const EditJobSuccess = (payload) =>({
    type : ActionType.EDIT_JOB_SUCCESS,
    payload
})

export const EditJobFailed = (payload) =>({
    type : ActionType.EDIT_JOB_FAILED,
    payload
})