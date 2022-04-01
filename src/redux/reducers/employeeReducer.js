import { GET_DATA,ADD_QTY,MIN_QTY } from "../constants/cartConstant";

const listEmployee =[
    {empId:1,fullName:'naufal',salary:4500},
    {empId:2,fullName:'dian',salary:5500},
    {empId:3,fullName:'firdaus',salary:5000}
]

const INIT_STATE = {
    employees : [...listEmployee]
}

const employeeReducer = (state = INIT_STATE, action)=>{
    switch (action.type) {
        case GET_DATA:
            return {...state}
        default:
            return {...state}
    }
}

export default employeeReducer