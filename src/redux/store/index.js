import {createStore} from 'redux'
import cartReducer from '../reducers/cartReducer'
import employeeReducer from '../reducers/employeeReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore (
    
    cartReducer,
    composeWithDevTools()
)

export default store