import * as ActionType from '../constants/Locations'

const INIT_STATE = {
    locations : []
}

const LocationsReduce =(state = INIT_STATE, action)=>{
    switch (action.type) {
        case ActionType.GET_LOCATIONS_REQUEST:
            return {...state}
        case ActionType.GET_LOCATIONS_SUCCESS:
            return GetLocationsSucceed (state,action)
        case ActionType.ADD_LOCATIONS_REQUEST:{
            return {...state}
        }
        case ActionType.ADD_LOCATIONS_SUCCESS:{
            return AddLocationsSucceed (state,action)
        }
        case ActionType.DEL_LOCATIONS_REQUEST:{
            return {
                ...state
            }
        }
        case ActionType.DEL_LOCATIONS_SUCCESS:{
            return DelLocationsSucceed(state,action)
        }
        default:
            return GetLocationsSucceed (state,action)
    }
}

const GetLocationsSucceed = (state,action)=>{
    return {
        ...state,
        locations :action.payload
    }
}

const AddLocationsSucceed = (state,action) =>{
    let {payload} = action
    return {
        ...state,
        locations : [...state.locations,payload]
    }
}

const DelLocationsSucceed = (state,action) => {
    const {payload} = action
    const filterLocations = state.locations.filter(el=>el.location_id !== payload)
    return {
        ...state,
        locations : [...filterLocations]
    }
}

export default LocationsReduce