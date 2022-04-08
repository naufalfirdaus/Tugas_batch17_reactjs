import * as ActionType from '../constants/Departments'

export const GetDepartmentsRequest = () =>({
    type : ActionType.GET_DEPARTMENTS_REQUEST
})

export const GetDepartmentsSuccess = (payload) =>({
    type: ActionType.GET_DEPARTMENTS_SUCCESS,
    payload
})

export const GetDepartmentsFailed = (payload) =>({
    type:ActionType.GET_DEPARTMENTS_FAILED,
    payload
})

export const AddDepartmentsRequest = (payload) =>({
    type:ActionType.ADD_DEPARTMENTS_REQUEST,
    payload
})

export const AddDepartmentsSuccess = (payload) =>({
    type:ActionType.ADD_DEPARTMENTS_SUCCESS,
    payload
})

export const AddDepartmentsFailed = (payload) =>({
    type:ActionType.ADD_DEPARTMENTS_FAILED,
    payload
})

export const DelDepartmentsRequest = (payload) =>({
    type:ActionType.DEL_DEPARTMENTS_REQUEST,
    payload
})

export const DelDepartmentsSuccess = (payload) =>({
    type : ActionType.DEL_DEPARTMENTS_SUCCESS,
    payload
})

export const DelDepartmentsFailed = (payload) =>({
    type : ActionType.DEL_DEPARTMENTS_FAILED,
    payload
})