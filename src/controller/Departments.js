import React,{useState,useEffect} from 'react'
import apiDepartments from '../api/apiDepartments'
import {useHistory} from 'react-router-dom'

export default function Departments() {
    let history = useHistory()
    const [departments,setDepartment] =useState()
    let [refresh, setRefresh] = useState(false);

    useEffect(()=>{
        apiDepartments.list().then(data => {
            setDepartment(data)
        })
    },[])

    useEffect(()=>{
        apiDepartments.list().then(data => {
            setDepartment(data)
        })
        setRefresh(false)
    },[refresh])

    const onEdit = async (id) =>{
        history.push(`department/edit/${id}`)
    }
    const onDelete = async (id) =>{
        apiDepartments.deleteRow(id)
        .then(()=>{
            setRefresh(true)
            window.alert('Data Successfully Deleted')
        })
        .catch(error => window.error(error.message))
    }
  return (
    <div>
        <h2>List of Department</h2>
        <button onClick={()=>history.push('/department/new')}>Add Departments</button>
        <button onClick={()=>history.push('/')}>Back</button>
        <table>
            <thead>
                Departments Name
            </thead>
            <tbody>
                {
                    departments && departments.map(depa =>{
                        return (
                        <tr>
                            <td>{depa.department_id}</td>
                            <td>{depa.department_name}</td>
                            <td>{depa.location_id}</td>
                            <button onClick={()=>onEdit(depa.department_id)}>Edit</button>
                            <button onClick={()=>{
                                if(window.confirm('Delete this record')) {
                                    onDelete(depa.department_id)
                                }
                                }}>Delete</button>
                        </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
