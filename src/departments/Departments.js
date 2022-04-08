import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom'
import { GetDepartmentsRequest, DelDepartmentsRequest } from '../redux-saga/actions/DepartmentsAction';

export default function Departments() {

    let history = useHistory()
    const dispatch = useDispatch()
    const { departments } = useSelector((state) => state.departmentsStated)


     useEffect(() => {
    dispatch(GetDepartmentsRequest())
  }, [])

    const onEdit = async (id) => {
    history.push(`departments/edit/${id}`)
  }
    const onDelete = async (id) => {
        dispatch(DelDepartmentsRequest(id))
    }

    return (
        <div>
            <h2>List of Departments</h2>
            <button onClick={()=>history.push('/departments/new')}>Add Department</button>
            <button onClick={() => history.push("/")}>Back</button>
            <table>
               <thead>
            <tr>
            <th>Department Id</th>
            <th>Department Name</th>
            <th>Location Id</th>
            </tr>
            </thead>
                <tbody>
                    {
                        departments && departments.map(dept => {
                            return (
                                <tr>
                                    <td>{dept.department_id}</td>
                                    <td>{dept.department_name}</td>
                                    <td>{dept.location_id}</td>
                                    <button onClick={() => onEdit(dept.department_id)}>Edit</button>
                                    <button onClick={() => {
                                        if (window.confirm("Delete this record ?"))
                                            onDelete(dept.department_id)
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