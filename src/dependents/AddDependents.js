import React,{useEffect,useState} from 'react'
import apiDependents from '../api/apiDependents'
import {useHistory} from 'react-router-dom'

export default function AddDependents() {
    let history = useHistory()
    const [value,setValue] = useState({
        dependent_id : '',
        first_name : '',
        last_name:'',
        relationship:'',
        employee_id:''
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
            history.push('/Dependents')
        })
        .catch(error => console.log(error))
    }
  return (
    <div>
        <h1>Add Dependents</h1>
        <form>
        <div>
                <label>
                    dependent Id : 
                </label>
                <input type='text' placeholder='dependent_id' onChange={handleChange('dependent_id')} />
            </div>
            <div>
                <label>
                    First Name : 
                </label>
                <input type='text' placeholder='first_name' onChange={handleChange('first_name')} />
            </div>
            <div>
                <label>
                    Last Name : 
                </label>
                <input type='text' placeholder='last_name' onChange={handleChange('last_name')} />
            </div>
            <div>
                <label>
                    relationship : 
                </label>
                <input type='text' placeholder='relationship' onChange={handleChange('relationship')} />
            </div>
            <div>
                <label>
                    Employee : 
                </label>
                <input type='text' placeholder='employee_id' onChange={handleChange('employee_id')} />
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