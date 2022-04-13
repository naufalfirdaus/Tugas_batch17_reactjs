import * as ActionType from '../constants/LocationConstant'

const INIT_STATE = {
    location : []
}

const LocationReduce = (state = INIT_STATE, action) =>{
    switch (action.type) {
        case ActionType.GET_LOCATION_REQUEST:
            return {...state}
        case ActionType.GET_LOCATION_SUCCESS:
            return GetLocationSucceed (state,action)
        case ActionType.DEL_LOCATION_REQUEST:
            return {...state}
        case ActionType.DEL_LOCATION_SUCCESS:
            return DelLocationSucceed (state,action)
        case ActionType.ADD_LOCATION_REQUEST:
            return {...state}
        case ActionType.ADD_LOCATION_SUCCESS:
            return AddLocationSucceed (state,action)
        case ActionType.EDIT_LOCATION_FAILED:
            return {...state}
        case ActionType.EDIT_LOCATION_SUCCESS:
            return EditLocationSucceed (state,action)
        default:
            return GetLocationSucceed (state,action)
    }
}

const GetLocationSucceed = (state, action)=>{
    return {
        ...state,
        location : action.payload
    }
}
const DelLocationSucceed = (state, action)=>{
    const {payload} = action
    const filterLocation = state.location.filter(el => el.location_id !== payload)
    return {
        ...state,
        location : [...filterLocation]
    }
}
const AddLocationSucceed = (state, action)=>{
    const {payload} = action
    return {
        ...state,
        location : [...state.location,payload]
    }
}
const EditLocationSucceed = (state, action)=>{
    const {payload} = action
    return {
        ...state,
        location : [...state.location,payload]
    }
}

export default LocationReduce