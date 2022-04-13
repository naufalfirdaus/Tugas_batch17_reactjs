import * as ActionType from '../constants/LocationConstant'

export const GetLocationRequest = () =>({
    type : ActionType.GET_LOCATION_REQUEST
})

export const GetLocationSuccess = (payload) =>({
    type : ActionType.GET_LOCATION_SUCCESS,
    payload
})

export const GetLocationFailed = (payload) =>({
    type : ActionType.GET_LOCATION_FAILED,
    payload
})

export const DelLocationRequest = (payload) =>({
    type : ActionType.DEL_LOCATION_REQUEST,
    payload
})

export const DelLocationSuccess = (payload) =>({
    type : ActionType.DEL_LOCATION_SUCCESS,
    payload
})

export const DelLocationFailed = (payload) =>({
    type : ActionType.DEL_LOCATION_FAILED,
    payload
})

export const AddLocationRequest = (payload) =>({
    type : ActionType.ADD_LOCATION_REQUEST,
    payload
})

export const AddLocationSuccess = (payload) =>({
    type : ActionType.ADD_LOCATION_SUCCESS,
    payload
})

export const AddLocationFailed = (payload) =>({
    type : ActionType.ADD_LOCATION_FAILED,
    payload
})

export const EditLocationRequest = (payload) =>({
    type : ActionType.EDIT_LOCATION_REQUEST,
    payload
})

export const EditLocationSuccess = (payload) =>({
    type : ActionType.EDIT_LOCATION_SUCCESS,
    payload
})

export const EditLocationFailed = (payload) =>({
    type : ActionType.EDIT_LOCATION_FAILED,
    payload
})