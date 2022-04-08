import * as ActionType from '../constants/Jobs'

const INIT_STATE = {
    jobs : []
}

const JobsReduce =(state = INIT_STATE, action)=>{
    switch (action.type) {
        case ActionType.GET_JOBS_REQUEST:
            return {...state}
        case ActionType.GET_JOBS_SUCCESS:
            return GetJobsSucceed (state,action)
        case ActionType.ADD_JOBS_REQUEST:{
            return {...state}
        }
        case ActionType.ADD_JOBS_SUCCESS:{
            return AddJobsSucceed (state,action)
        }
        case ActionType.DEL_JOBS_REQUEST:{
            return {
                ...state
            }
        }
        case ActionType.DEL_JOBS_SUCCESS:{
            return DelJobsSucceed(state,action)
        }
        default:
            return GetJobsSucceed (state,action)
    }
}

const GetJobsSucceed = (state,action)=>{
    return {
        ...state,
        jobs :action.payload
    }
}

const AddJobsSucceed = (state,action) =>{
    let {payload} = action
    return {
        ...state,
        jobs : [...state.jobs,payload]
    }
}

const DelJobsSucceed = (state,action) => {
    const {payload} = action
    const filterJobs = state.jobs.filter(el=>el.job_id !== payload)
    return {
        ...state,
        jobs : [...filterJobs]
    }
}

export default JobsReduce