import React, {useEffect,useState} from 'react'
import apiDepartments from '../api/apiDepartments'
import { useHistory } from 'react-router-dom'

export default function EditDepartments({match}) {
    let history = useHistory()
    const [values,setValues] = useState({
        department_id : undefined,
        department_name : '',
        location_id : ''
    })
    useEffect(()=>{
        apiDepartments.findOne(match.params.id)
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
    const handleChange = name => event => {
        setValues({...values,[name]: event.target.value})
    }
    const onSubmit = async () =>{
        const payload ={
            department_id : values.department_id,
            department_name : values.department_name,
            location_id : values.location_id
        }
        await apiDepartments.update(payload)
        .then(result => {
            window.alert('Data Successfully Edited')
            history.push('/departments')
        })
    }
  return (
    <div>
        <h1>Edit Departments</h1>
        <form>
             <div>
                <label>
                   Department Id : 
                </label>
                <input type='text' name='department_id' id='department_id' placeholder='department id' value={values.department_id} onChange={handleChange('department_id')} />
            </div>
             <div>
                <label>
                   Department Name : 
                </label>
                <input type='text' name='department_name' id='department_name' placeholder='department name' value={values.department_name} onChange={handleChange('department_name')} />
            </div>
            <div>
                <label>
                   Location Id : 
                </label>
                <input type='text' name='location_id' id='location_id' placeholder='location id' value={values.location_id} onChange={handleChange('location_id')} />
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