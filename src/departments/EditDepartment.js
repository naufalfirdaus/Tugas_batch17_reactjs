import React, {useEffect,useState} from 'react'
import apiDepartment from '../api/apiDepartment'
import { useHistory } from 'react-router-dom'

export default function EditDepartment({match}) {
    let history = useHistory()
    const [values,setValues] = useState({
        department_id : undefined,
        department_name : '',
        location_id : ''
    })
    useEffect(()=>{
        apiDepartment.findOne(match.params.id)
        .then(data =>{
            setValues({
                ...values,
                department_id : data.department_id,
                department_name : data.department_name,
                location_id : data.location_id
            })
        })
        .catch(error => console.log(error))
    },[])
    const handleChange = name => event =>{
        setValues({...values,[name]: event.target.value})
    }
    const onSubmit = async () =>{
        const payload ={
            department_id : values.department_id,
            department_name : values.department_name,
            location_id : values.location_id
        }
        await apiDepartment.update(payload)
        .then(result => {
            window.alert('Data Successfully Edited')
            history.push('/department')
        })
    }
  return (
    <div>
        <h1>Edit Department</h1>
        <form>    
            <label>
                Department Name :
            </label>
            <input type='text' placeholder='Department Name' value={values.department_name} onChange={handleChange('department_name')}/><br/>

            <label>
                Region Id :
            </label>
            <input type='text' placeholder='Region Id' value={values.location_id} onChange={handleChange('location_id')}/><br/>
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
