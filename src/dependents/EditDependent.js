import React, {useEffect,useState} from 'react'
import apiDependent from '../api/apiDependent'
import { useHistory } from 'react-router-dom'

export default function EditDependent({match}) {
    let history = useHistory()
    const [values,setValues] = useState({
        dependent_id : undefined,
        first_name : '',
        last_name : '',
        relationship : '',
        employee_id : ''
    })
    useEffect(()=>{
        apiDependent.findOne(match.params.id)
        .then(data =>{
            setValues({
                ...values,
                dependent_id : data.dependent_id,
                first_name : data.first_name,
                last_name : data.last_name,
                relationship : data.relationship,
                employee_id : data.employee_id
            })
        })
        .catch(error => console.log(error))
    },[])
    const handleChange = name => event =>{
        setValues({...values,[name]: event.target.value})
    }
    const onSubmit = async () =>{
        const payload ={
            dependent_id : values.dependent_id,
            first_name : values.first_name,
            last_name : values.last_name,
            relationship : values.relationship,
            employee_id : values.employee_id
        }
        await apiDependent.update(payload)
        .then(result => {
            window.alert('Data Successfully Edited')
            history.push('/dependent')
        })
    }
  return (
    <div>
        <h1>Edit Dependent</h1>
        <form>    
            <label>
                First Name :
            </label>
            <input type='text' placeholder='First Name' value={values.first_name} onChange={handleChange('first_name')}/><br/>

            <label>
                Last Name :
            </label>
            <input type='text' placeholder='Last Name' value={values.last_name} onChange={handleChange('last_name')}/><br/>

            <label>
                Relationship :
            </label>
            <input type='text' placeholder='Relationship' value={values.relationship} onChange={handleChange('relationship')}/><br/>
            
            <label>
                Employee Id :
            </label>
            <input type='text' placeholder='Employee Id' value={values.employee_id} onChange={handleChange('employee_id')}/><br/>
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
