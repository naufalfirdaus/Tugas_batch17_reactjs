import * as ActionType from '../constants/Locations'

export const GetLocationsRequest = () =>({
    type : ActionType.GET_LOCATIONS_REQUEST
})

export const GetLocationsSuccess = (payload) =>({
    type: ActionType.GET_LOCATIONS_SUCCESS,
    payload
})

export const GetLocationsFailed = (payload) =>({
    type:ActionType.GET_LOCATIONS_FAILED,
    payload
})

export const AddLocationsRequest = (payload) =>({
    type:ActionType.ADD_LOCATIONS_REQUEST,
    payload
})

export const AddLocationsSuccess = (payload) =>({
    type:ActionType.ADD_LOCATIONS_SUCCESS,
    payload
})

export const AddLocationsFailed = (payload) =>({
    type:ActionType.ADD_LOCATIONS_FAILED,
    payload
})

export const DelLocationsRequest = (payload) =>({
    type:ActionType.DEL_LOCATIONS_REQUEST,
    payload
})

export const DelLocationsSuccess = (payload) =>({
    type : ActionType.DEL_LOCATIONS_SUCCESS,
    payload
})

export const DelLocationsFailed = (payload) =>({
    type : ActionType.DEL_LOCATIONS_FAILED,
    payload
})