import { call,put } from "redux-saga/effects";
import apiLocations from "../../api/apiLocations";
import { GetLocationsSuccess,GetLocationsFailed,AddLocationsSuccess,AddLocationsFailed,DelLocationsSuccess,DelLocationsFailed } from "../actions/LocationsAction";

function* handleGetLocations(){
    try {
        const result = yield call(apiLocations.list);
        yield put(GetLocationsSuccess(result))
    }
    catch(error){
        yield put(GetLocationsFailed(error))
    }
}
function* handleAddLocations(action){
    const {payload} = action
    try {
        const result = yield call(apiLocations.Create,payload)
        yield put(AddLocationsSuccess(result.data))
    } catch (error) {
        yield put(AddLocationsFailed(error))
    }
}
function* handleDelLocations(action){
    const {payload} =action
    try {
        const result = yield call(apiLocations.deleteRow,payload)
        yield put(DelLocationsSuccess(payload))
    } catch (error) {
        yield put(DelLocationsFailed(error))
    }
}

export {
    handleGetLocations,
    handleAddLocations,
    handleDelLocations
}