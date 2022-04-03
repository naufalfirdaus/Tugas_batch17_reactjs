import React, { useState, useEffect } from 'react'
import apiDepartment from '../api/apiDepartment'
import { useHistory } from 'react-router-dom'

export default function Department() {
    let history = useHistory()
    const [department, setDepartment] = useState()
    let [refresh, setRefresh] = useState(false);


    useEffect(() => {
        apiDepartment.list().then(data => {
            setDepartment(data)
        })
    }, [])

    useEffect(()=>{
        apiDepartment.list().then(data => {
            setDepartment(data)
        })
        setRefresh(false)
    },[refresh])

    const onEdit = async (id) =>{
        history.push(`department/edit/${id}`)
    }

    const onDelete = async (id) =>{
        apiDepartment.deleteRow(id)
        .then(()=>{
            setRefresh(true)
            window.alert('Data Successfully Deleted')
        })
        .catch(error => window.error(error.message))
    }

    return (
        <div>
            <h2>List of Department</h2>
            <button onClick={() => history.push('/department/new')}>Add Region</button>
            <button onClick={() => history.push('/')}>Back</button>
            <table>
                <thead>
                    Country Name
                </thead>
                <tbody>
                    {
                        department && department.map(regi => {
                            return (
                                <tr>
                                    <td>{regi.department_id}</td>
                                    <td>{regi.department_name}</td>
                                    <td>{regi.location_id}</td>
                                    <button onClick={()=>onEdit(regi.department_id)}>Edit</button>
                                    <button onClick={()=>{
                                        if(window.confirm('Delete this record')) {
                                            onDelete(regi.department_id)
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