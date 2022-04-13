import * as ActionType from '../constants/DependentConstant'

const INIT_STATE = {
    dependent : []
}

const DependentReduce = (state = INIT_STATE, action) =>{
    switch (action.type) {
        case ActionType.GET_DEPENDENT_REQUEST:
            return {...state}
        case ActionType.GET_DEPENDENT_SUCCESS:
            return GetDependentSucceed (state,action)
        case ActionType.DEL_DEPENDENT_REQUEST:
            return {...state}
        case ActionType.DEL_DEPENDENT_SUCCESS:
            return DelDependentSucceed (state,action)
        case ActionType.ADD_DEPENDENT_REQUEST:
            return {...state}
        case ActionType.ADD_DEPENDENT_SUCCESS:
            return AddDependentSucceed (state,action)
        case ActionType.EDIT_DEPENDENT_FAILED:
            return {...state}
        case ActionType.EDIT_DEPENDENT_SUCCESS:
            return EditDependentSucceed (state,action)
        default:
            return GetDependentSucceed (state,action)
    }
}

const GetDependentSucceed = (state, action)=>{
    return {
        ...state,
        dependent : action.payload
    }
}
const DelDependentSucceed = (state, action)=>{
    const {payload} = action
    const filterDependent = state.dependent.filter(el => el.dependent_id !== payload)
    return {
        ...state,
        dependent : [...filterDependent]
    }
}
const AddDependentSucceed = (state, action)=>{
    const {payload} = action
    return {
        ...state,
        dependent : [...state.dependent,payload]
    }
}
const EditDependentSucceed = (state, action)=>{
    const {payload} = action
    return {
        ...state,
        dependent : [...state.dependent,payload]
    }
}

export default DependentReduce