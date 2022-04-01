import React,{useEffect,useState} from 'react'
import apiDependent from '../api/apiDependent'
import { useHistory } from 'react-router-dom'

export default function AddDependent() {
    let history = useHistory()
    const [value,setValue] = useState({
        dependent_id : '',
        first_name : '',
        last_name : '',
        relationship : '',
        employee_id : ''
    })
    
    const handleChange = name => event => {
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
        await apiDependent.Create(payload)
        .then(result =>{
            window.alert('Data Successfully Insert')
            history.push('/dependent')
        })
        .catch(error => console.log(error))
    }
  return (
    <div>
        <h1>Add Dependent</h1>
        <form>
            <label>
                Dependent Id :
            </label>
            <input type='text' placeholder='Dependent Id' onChange={handleChange('dependent_id')}/><br/>

            <label>
                First Name :
            </label>
            <input type='text' placeholder='First Name' onChange={handleChange('first_name')}/><br/>

            <label>
                Last Name :
            </label>
            <input type='text' placeholder='Last Name' onChange={handleChange('last_name')}/><br/>

            <label>
                Relationship :
            </label>
            <input type='text' placeholder='Relationship' onChange={handleChange('relationship')}/><br/>
            
            <label>
                Employee Id :
            </label>
            <input type='text' placeholder='Employee Id' onChange={handleChange('employee_id')}/><br/>
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
