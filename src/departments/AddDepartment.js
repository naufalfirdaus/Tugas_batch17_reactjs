import React,{useEffect,useState} from 'react'
import apiDepartment from '../api/apiDepartment'
import {useHistory} from 'react-router-dom'

export default function AddDepartment() {
    let history = useHistory()
    const [value,setValue] = useState({
        department_id : '',
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
            location_id : (value.location_id) || '',
        }
        await apiDepartment.Create(payload)
        .then(result =>{
            window.alert('Data Succesfully Insert')
            history.push('/department')
        })
        .catch(error => console.log(error))
    }
  return (
    <div>
        <h1>Add Department</h1>
        <form>
            <div>
                <label>
                    Department ID : 
                </label>
                <input type='text' placeholder='Department ID' onChange={handleChange('department_id')} />
            </div>
            <div>
                <label>
                    Department Name : 
                </label>
                <input type='text' placeholder='Department Name' onChange={handleChange('department_name')} />
            </div>
            <div>
                <label>
                    Location ID : 
                </label>
                <input type='text' placeholder='Location ID' onChange={handleChange('location_id')} />
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