import React,{useEffect,useState} from 'react'
import apiDepartments from '../api/apiDepartments'
import {useHistory} from 'react-router-dom'

export default function EditDepartments({match}) {
    let history = useHistory()
    const [value,setValue] = useState({
        department_id : undefined,
        department_name : '',
        location_id : ''
    })

    useEffect(()=>{
        apiDepartments.findOne(match.params.id)
        .then(data =>{
            setValue({
                ...value,
                department_id : data.department_id,
                department_name : data.department_name,
                location_id : data.location_id
            })
        })
        .catch(error => console.log(error))
    },[])
    const handleChange = name => event =>{
        setValue({...value,[name]:event.target.value})
    }
    const onSubmit = async()=>{
        const payload = {
            department_id : value.department_id,
            department_name : value.department_name,
            location_id : value.location_id
        }
        await apiDepartments.update(payload)
        .then(result =>{
            window.alert('Data Succesfully Insert')
            history.push('/department')
        })
        .catch(error => console.log(error))
    }
  return (
    <div>
        <h1>Edit Department</h1>
        <form>
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
