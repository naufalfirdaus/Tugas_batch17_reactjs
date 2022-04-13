import * as ActionType from '../constants/CountryConstant'

const INIT_STATE = {
    country : []
}

const CountryReduce = (state = INIT_STATE, action) =>{
    switch (action.type) {
        case ActionType.GET_COUNTRY_REQUEST:
            return {...state}
        case ActionType.GET_COUNTRY_SUCCESS:
            return GetCountrySucceed (state,action)
        case ActionType.DEL_COUNTRY_REQUEST:
            return {...state}
        case ActionType.DEL_COUNTRY_SUCCESS:
            return DelCountrySucceed (state,action)
        case ActionType.ADD_COUNTRY_REQUEST:
            return {...state}
        case ActionType.ADD_COUNTRY_SUCCESS:
            return AddCountrySucceed (state,action)
        case ActionType.EDIT_COUNTRY_FAILED:
            return {...state}
        case ActionType.EDIT_COUNTRY_SUCCESS:
            return EditCountrySucceed (state,action)
        default:
            return GetCountrySucceed (state,action)
    }
}

const GetCountrySucceed = (state, action)=>{
    return {
        ...state,
        country : action.payload
    }
}
const DelCountrySucceed = (state, action)=>{
    const {payload} = action
    const filterCountry = state.Country.filter(el => el.country_id !== payload)
    return {
        ...state,
        country : [...filterCountry]
    }
}
const AddCountrySucceed = (state, action)=>{
    const {payload} = action
    return {
        ...state,
        country : [...state.country,payload]
    }
}
const EditCountrySucceed = (state, action)=>{
    const {payload} = action
    return {
        ...state,
        country : [...state.country,payload]
    }
}

export default CountryReduce