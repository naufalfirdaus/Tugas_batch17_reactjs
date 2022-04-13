import * as ActionType from '../constants/JobConstant'

const INIT_STATE = {
    job : []
}

const JobReduce = (state = INIT_STATE, action) =>{
    switch (action.type) {
        case ActionType.GET_JOB_REQUEST:
            return {...state}
        case ActionType.GET_JOB_SUCCESS:
            return GetJobSucceed (state,action)
        case ActionType.DEL_JOB_REQUEST:
            return {...state}
        case ActionType.DEL_JOB_SUCCESS:
            return DelJobSucceed (state,action)
        case ActionType.ADD_JOB_REQUEST:
            return {...state}
        case ActionType.ADD_JOB_SUCCESS:
            return AddJobSucceed (state,action)
        case ActionType.EDIT_JOB_FAILED:
            return {...state}
        case ActionType.EDIT_JOB_SUCCESS:
            return EditJobSucceed (state,action)
        default:
            return GetJobSucceed (state,action)
    }
}

const GetJobSucceed = (state, action)=>{
    return {
        ...state,
        job : action.payload
    }
}
const DelJobSucceed = (state, action)=>{
    const {payload} = action
    const filterJob = state.job.filter(el => el.job_id !== payload)
    return {
        ...state,
        job : [...filterJob]
    }
}
const AddJobSucceed = (state, action)=>{
    const {payload} = action
    return {
        ...state,
        job : [...state.job,payload]
    }
}
const EditJobSucceed = (state, action)=>{
    const {payload} = action
    return {
        ...state,
        job : [...state.job,payload]
    }
}

export default JobReduce