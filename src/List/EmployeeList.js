import React,{useEffect, useState} from 'react'

export default function EmployeeList() {
    const listEmployee =[
        {empId:1,fullName:'naufal',salary:4500},
        {empId:2,fullName:'dian',salary:5500},
        {empId:3,fullName:'firdaus',salary:5000}
    ]
    const [employee, setEmployee] = useState(listEmployee)
    const [totalGaji, setTotalGaji ] = useState(0)
    const PenambahanGaji = (id) => {
        setEmployee(
            [...employee.map(emp=>{
                if (id === emp.empId) {
                    emp.salary = emp.salary + 500
                    return emp
                }
                else {
                    return emp
                }
            })]
        )
    }
    const RaiseSalary = (id) => {
        setEmployee([
            ...employee.map((emp)=> {
                if (id === emp.empId){
                    const raise = emp.salary * 0.1;
                    emp.salary = emp.salary + raise;
                    return emp;
                }else {
                    return emp;
                }
            }),
        ]);
    };
    const CutSalary = (id) => {
        setEmployee([
            ...employee.map((emp)=> {
                if (id === emp.empId){
                    const cut = emp.salary * 0.5;
                    emp.salary = emp.salary - cut;
                    return emp;
                }else {
                    return emp;
                }
            }),
        ]);
    };
    useEffect(()=> {
        const TotalGaji = employee.reduce((sum, el)=> sum + el.salary,0);
        setTotalGaji(TotalGaji);
    },[employee])
    
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
                        <button onClick={()=>RaiseSalary(emp.empId)}>Raise salary 10%</button>
                        <button onClick={()=>CutSalary(emp.empId)}>cut salary 5%</button>
                    </li>
                ))
            }
        </ul>
        <h3>Total Salary : Rp. {totalGaji}</h3>
    </div>
  )
}