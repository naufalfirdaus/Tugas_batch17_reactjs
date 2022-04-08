import * as ActionType from '../constants/Dependents'

export const GetDependentsRequest = () =>({
    type : ActionType.GET_DEPENDENTS_REQUEST
})

export const GetDependentsSuccess = (payload) =>({
    type: ActionType.GET_DEPENDENTS_SUCCESS,
    payload
})

export const GetDependentsFailed = (payload) =>({
    type:ActionType.GET_DEPENDENTS_FAILED,
    payload
})

export const AddDependentsRequest = (payload) =>({
    type:ActionType.ADD_DEPENDENTS_REQUEST,
    payload
})

export const AddDependentsSuccess = (payload) =>({
    type:ActionType.ADD_DEPENDENTS_SUCCESS,
    payload
})

export const AddDependentsFailed = (payload) =>({
    type:ActionType.ADD_DEPENDENTS_FAILED,
    payload
})

export const DelDependentsRequest = (payload) =>({
    type:ActionType.DEL_DEPENDENTS_REQUEST,
    payload
})

export const DelDependentsSuccess = (payload) =>({
    type : ActionType.DEL_DEPENDENTS_SUCCESS,
    payload
})

export const DelDependentsFailed = (payload) =>({
    type : ActionType.DEL_DEPENDENTS_FAILED,
    payload
})