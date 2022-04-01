import {createStore} from 'redux'
import employeeReducer from '../reducers/employeeReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

const store2 = createStore (
    
    employeeReducer,
    composeWithDevTools()
)

export default store2