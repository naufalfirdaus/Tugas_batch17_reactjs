import React, {useEffect, useState} from 'react'

export default function EmployeeList() {
    const listEmployee = [
        {empId:1,fullname:'iqsan',salary:7500},
        {empId:2,fullname:'aeni',salary:5500},
        {empId:3,fullname:'bee',salary:5000}
    ]
    const [employee, setEmployee] = useState(listEmployee)
    const [totalSalary, setTotalSalary] = useState(0)
    const penambahanGaji = (id) =>{
        setEmployee(
            [...employee.map(emp=>{
                if (id === emp.empId) {
                    emp.salary = emp.salary + 500
                    return emp
                }
                else{
                    return emp
                }
            })]
        )
    }
    const raiseSalary = (id) =>{
        setEmployee(
            [...employee.map(emp=>{
                if (id === emp.empId) {
                    emp.salary = emp.salary + (0.1*emp.salary)
                    return emp
                }
                else{
                    return emp
                }
            })]
        )
    }
    const cutSalary = (id) =>{
        setEmployee(
            [...employee.map(emp=>{
                if (id === emp.empId) {
                    emp.salary = emp.salary - (0.05*emp.salary)
                    return emp
                }
                else{
                    return emp
                }
            })]
        )
    }
    useEffect(()=>{
        const TotalSalary = employee.reduce((sum,el)=> sum + (el.salary * el.empId),0)
        setTotalSalary(TotalSalary)
    },[employee])
  return (
    <div>
        <h2>List Employee</h2>
        <ul>
            {
                (employee || []).map(emp =>(
                    <li key={emp.empId}>
                        <p>EmpId : {emp.empId}</p>
                        <p>Full name : {emp.fullname}</p>
                        <p>Salary : {emp.salary}</p>
                        <button onClick={()=>penambahanGaji(emp.empId)}>Penambah Gaji</button>
                        <button onClick={()=>raiseSalary(emp.empId)}>Raise salary 10%</button>
                        <button onClick={()=>cutSalary(emp.empId)}>Cut salary 5%</button>
                    </li>
                ))
            }
        </ul>
        <h3>Total Salary Rp. {totalSalary}</h3>
    </div>
  )
}
