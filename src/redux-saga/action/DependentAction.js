import * as ActionType from '../constants/DependentConstant'

export const GetDependentRequest = () =>({
    type : ActionType.GET_DEPENDENT_REQUEST
})

export const GetDependentSuccess = (payload) =>({
    type : ActionType.GET_DEPENDENT_SUCCESS,
    payload
})

export const GetDependentFailed = (payload) =>({
    type : ActionType.GET_DEPENDENT_FAILED,
    payload
})

export const DelDependentRequest = (payload) =>({
    type : ActionType.DEL_DEPENDENT_REQUEST,
    payload
})

export const DelDependentSuccess = (payload) =>({
    type : ActionType.DEL_DEPENDENT_SUCCESS,
    payload
})

export const DelDependentFailed = (payload) =>({
    type : ActionType.DEL_DEPENDENT_FAILED,
    payload
})

export const AddDependentRequest = (payload) =>({
    type : ActionType.ADD_DEPENDENT_REQUEST,
    payload
})

export const AddDependentSuccess = (payload) =>({
    type : ActionType.ADD_DEPENDENT_SUCCESS,
    payload
})

export const AddDependentFailed = (payload) =>({
    type : ActionType.ADD_DEPENDENT_FAILED,
    payload
})

export const EditDependentRequest = (payload) =>({
    type : ActionType.EDIT_DEPENDENT_REQUEST,
    payload
})

export const EditDependentSuccess = (payload) =>({
    type : ActionType.EDIT_DEPENDENT_SUCCESS,
    payload
})

export const EditDependentFailed = (payload) =>({
    type : ActionType.EDIT_DEPENDENT_FAILED,
    payload
})