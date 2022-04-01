import React, { useState, useEffect } from 'react'
import apiDependents from '../api/apiDependents'
import { useHistory } from 'react-router-dom'

export default function Dependents() {
    let history = useHistory()
    const [Dependents, setDependents] = useState()
    let [refresh, setRefresh] = useState(false);


    useEffect(() => {
        apiDependents.list().then(data => {
            setDependents(data)
        })
    }, [])

    useEffect(()=>{
        apiDependents.list().then(data => {
            setDependents(data)
        })
        setRefresh(false)
    },[refresh])

    const onEdit = async (id) =>{
        history.push(`dependents/edit/${id}`)
    }
    const onDelete = async (id) =>{
        apiDependents.deleteRow(id)
        .then(()=>{
            setRefresh(true)
            window.alert('Data Successfully Deleted')
        })
        .catch(error => window.error(error.message))
    }

    return (
        <div>
            <h2>List of Dependents</h2>
            <button onClick={() => history.push('/Dependents/new')}>Add Dependents</button>
            <button onClick={() => history.push('/')}>Back</button>
            <table>
                <thead>
                    Dependents Name
                </thead>
                <tbody>
                    {
                        Dependents && Dependents.map(coun => {
                            return (
                                <tr>
                                    <td>{coun.dependent_id}</td>
                                    <td>{coun.first_name}</td>
                                    <td>{coun.last_name}</td>
                                    <td>{coun.relationship}</td>
                                    <td>{coun.employee_id}</td>
                                    <button onClick={()=>onEdit(coun.dependent_id)}>Edit</button>
                                    <button onClick={()=>{
                                        if(window.confirm('Delete this record')) {
                                            onDelete(coun.dependent_id)
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
