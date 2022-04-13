import * as ActionType from '../constants/DepartmentConstant'

const INIT_STATE = {
    department : []
}

const DepartmentReduce = (state = INIT_STATE, action) =>{
    switch (action.type) {
        case ActionType.GET_DEPARTMENT_REQUEST:
            return {...state}
        case ActionType.GET_DEPARTMENT_SUCCESS:
            return GetDepartmentSucceed (state,action)
        case ActionType.DEL_DEPARTMENT_REQUEST:
            return {...state}
        case ActionType.DEL_DEPARTMENT_SUCCESS:
            return DelDepartmentSucceed (state,action)
        case ActionType.ADD_DEPARTMENT_REQUEST:
            return {...state}
        case ActionType.ADD_DEPARTMENT_SUCCESS:
            return AddDepartmentSucceed (state,action)
        case ActionType.EDIT_DEPARTMENT_FAILED:
            return {...state}
        case ActionType.EDIT_DEPARTMENT_SUCCESS:
            return EditDepartmentSucceed (state,action)
        default:
            return GetDepartmentSucceed (state,action)
    }
}

const GetDepartmentSucceed = (state, action)=>{
    return {
        ...state,
        department : action.payload
    }
}
const DelDepartmentSucceed = (state, action)=>{
    const {payload} = action
    const filterDepartment = state.department.filter(el => el.department_id !== payload)
    return {
        ...state,
        department : [...filterDepartment]
    }
}
const AddDepartmentSucceed = (state, action)=>{
    const {payload} = action
    return {
        ...state,
        department : [...state.department,payload]
    }
}
const EditDepartmentSucceed = (state, action)=>{
    const {payload} = action
    return {
        ...state,
        department : [...state.department,payload]
    }
}

export default DepartmentReduce