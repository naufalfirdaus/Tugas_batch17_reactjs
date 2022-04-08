import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom'
import { GetDependentsRequest, DelDependentsRequest } from '../redux-saga/actions/DependentsAction';

export default function Dependents() {

    let history = useHistory()
    const dispatch = useDispatch()
    const { dependents } = useSelector((state) => state.dependentsStated)


     useEffect(() => {
    dispatch(GetDependentsRequest())
  }, [])

    const onEdit = async (id) => {
    history.push(`dependents/edit/${id}`)
  }
    const onDelete = async (id) => {
        dispatch(DelDependentsRequest(id))
    }

    return (
        <div>
            <h2>List of Dependents</h2>
            <button onClick={()=>history.push('/dependents/new')}>Add Dependents</button>
            <button onClick={() => history.push("/")}>Back</button>
            <table>
               <thead> 
                   <tr>         
            <th>Dependent Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Relationship</th>
            <th>Employee Id</th>
            </tr>
                </thead>
                <tbody>
                    {
                        dependents && dependents.map(depend => {
                            return (
                                <tr>
                                    <td>{depend.dependent_id}</td>
                                    <td>{depend.first_name}</td>
                                    <td>{depend.last_name}</td>
                                    <td>{depend.relationship}</td>
                                    <td>{depend.employee_id}</td>
                                    <button onClick={() => onEdit(depend.dependent_id)}>Edit</button>
                                    <button onClick={() => {
                                        if (window.confirm("Delete this record ?"))
                                            onDelete(depend.dependent_id)
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