import React,{useEffect,useState} from 'react'
import apiDepartment from '../api/apiDepartment'
import { useHistory } from 'react-router-dom'

export default function AddDepartment() {
    let history = useHistory()
    const [value,setValue] = useState({
        department_id : undefined,
        department_name : '',
        location_id : ''
    })
    
    const handleChange = name => event => {
        setValue({...value,[name]:event.target.value})
    }

    const onSubmit = async()=>{
        const payload = {
            department_name : (value.department_name) || '',
            location_id : (value.location_id) || ''
        }
        await apiDepartment.Create(payload)
        .then(result =>{
            window.alert('Data Successfully Insert')
            history.push('/department')
        })
        .catch(error => console.log(error))
    }
  return (
    <div>
        <h1>Add Department</h1>
        <form>
            <label>
                Department Name :
            </label>
            <input type='text' placeholder='Department Name' onChange={handleChange('department_name')}/><br/>

            <label>
                Location Id :
            </label>
            <input type='text' placeholder='Location Id' onChange={handleChange('location_id')}/><br/>
        </form>
        <button type='button' onClick={onSubmit}>
            Submit
        </button>
        <button type='button' onClick={()=>history.goBack()}>
            Cancel
        </button>
    </div>
  )
}
