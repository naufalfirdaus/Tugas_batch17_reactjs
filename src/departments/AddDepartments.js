import React,{useEffect,useState} from 'react'
import apiDepartments from '../api/apiDepartments'
import {useHistory} from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { GetDepartmentsRequest,AddDepartmentsRequest } from '../redux-saga/actions/DepartmentsAction'
export default function AddDepartments() {
    let history = useHistory()
    const dispatch = useDispatch()
    const { departments } = useSelector((state) => state.departmentsStated)
    const [value,setValue] = useState({
        department_id : undefined,
        department_name : '',
        location_id : ''
    })
    const handleChange = name => event =>{
        setValue({...value,[name]:event.target.value})
    }
    const onSubmit = async()=>{
        const payload = {
            department_id : (value.department_id) || '',
            department_name : (value.department_name) || '',
            location_id : (value.location_id) || ''
        }
        dispatch(AddDepartmentsRequest(payload))
        window.alert('Data Succesfully Insert')
        history.push('/departments')
    }

  return (
    <div>
        <h1>Add Departments</h1>
        <form>
            <div>
                <label>
                    Department Id : 
                </label>
                <input type='text' name='department_id' id='department_id' placeholder='department id' onChange={handleChange('department_id')} />
            </div>
            <div>
                <label>
                    Departmnet Name : 
                </label>
                <input type='text' name='department_name' id='department_name' placeholder='departmet name' onChange={handleChange('department_name')} />
            </div>
            <div>
                <label>
                    Location Id : 
                </label>
                <input type='text' name='location_id' id='location_id' placeholder='location id' onChange={handleChange('location_id')} />
            </div>
        </form>
        <div>
            <button type='button' onClick={onSubmit}>
                Submit
            </button>
            <button type='button' onClick={()=>history.goBack()}>
                Cancel
            </button>
        </div>
    </div>
  )
}