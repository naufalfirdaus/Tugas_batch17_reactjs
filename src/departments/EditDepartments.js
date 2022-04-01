import React, {useEffect,useState} from 'react'
import apiDepartments from '../api/apiDepartments'
import { useHistory } from 'react-router-dom'

export default function EditDepartments({match}) {
    let history = useHistory()
    const [values,setValues] = useState({
        department_id : undefined,
        department_name : ''
    })
    useEffect(()=>{
        apiDepartments.findOne(match.params.id)
        .then(data =>{
            setValues({
                ...values,
                department_id : data.department_id,
                department_name : data.department_name
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
            department_name : values.department_name
        }
        await apiDepartments.update(payload)
        .then(result => {
            window.alert('Data Successfully Edited')
            history.push('/Departments')
        })
    }
  return (
    <div>
        <h1>Edit Departments</h1>
        <form>
            <div>
                <label>
                    Departments Name : 
                </label>
                <input type='text' placeholder='Departments Name' value={values.department_name} onChange={handleChange('department_name')} />
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
