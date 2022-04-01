import React,{useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {doGetCart} from '../redux/actions/cartAction'

export default function EmployeeList() {
    const dispatch = useDispatch()
    const employee = useSelector(state=>state.employees)
    //const [employee, setEmployee] = useState([])
    const PenambahanGaji = (id) => {
        // setEmployee(
        //     [...employee.map(emp=>{
        //         if (id === emp.empId) {
        //             emp.salary = emp.salary + 500
        //             return emp
        //         }
        //         else {
        //             return emp
        //         }
        //     })]
        // )
    }
  return (
    <div>
        <h2>List Employees</h2>
        <ul>
            {
                (employee || []).map(emp =>(
                    <li key={emp.empId}>
                        <p>EmpId : {emp.empId}</p>
                        <p>Full name : {emp.fullName}</p>
                        <p>Salary : {emp.salary}</p>
                        <button onClick={()=>PenambahanGaji(emp.empId)}>Penambahan gaji</button>
                        <button>Raise salary 10%</button>
                        <button>cut salary 5%</button>
                    </li>
                ))
            }
        </ul>
        <h3>Total Salary : Rp. {}</h3>
    </div>
  )
}
