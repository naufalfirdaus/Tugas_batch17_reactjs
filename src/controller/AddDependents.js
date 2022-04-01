import React,{useEffect,useState} from 'react'
import apiDependents from '../api/apiDependents'
import {useHistory} from 'react-router-dom'

export default function AddDependents() {
    let history = useHistory()
    const [value,setValue] = useState({
        dependent_id : undefined,
        first_name : '',
        last_name : '',
        relationship : '',
        employee_id : ''
    })
    const handleChange = name => event =>{
        setValue({...value,[name]:event.target.value})
    }
    const onSubmit = async()=>{
        const payload = {
            dependent_id : (value.dependent_id) || '',
            first_name : (value.first_name) || '',
            last_name : (value.last_name) || '',
            relationship : (value.relationship) || '',
            employee_id : (value.employee_id) || ''
        }
        await apiDependents.Create(payload)
        .then(result =>{
            window.alert('Data Succesfully Insert')
            history.push('/dependent')
        })
        .catch(error => console.log(error))
    }
  return (
    <div>
        <h1>Add Dependent</h1>
        <form>
            <div>
                <label>
                    Dependent ID : 
                </label>
                <input type='text' placeholder='Dependent ID' onChange={handleChange('dependent_id')} />
            </div>
            <div>
                <label>
                    First Name : 
                </label>
                <input type='text' placeholder='First Name' onChange={handleChange('first_name')} />
            </div>
            <div>
                <label>
                    Last Name : 
                </label>
                <input type='text' placeholder='Last Name' onChange={handleChange('last_name')} />
            </div>
            <div>
                <label>
                    Relationship : 
                </label>
                <input type='text' placeholder='Relationship' onChange={handleChange('relationship')} />
            </div>
            <div>
                <label>
                    Employee ID : 
                </label>
                <input type='text' placeholder='Employee ID' onChange={handleChange('employee_id')} />
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
