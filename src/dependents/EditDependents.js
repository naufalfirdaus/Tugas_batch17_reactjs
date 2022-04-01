import React, {useEffect,useState} from 'react'
import apiDependents from '../api/apiDependents'
import { useHistory } from 'react-router-dom'

export default function EditDependents({match}) {
    let history = useHistory()
    const [values,setValues] = useState({
        dependent_id : undefined,
        first_name : '',
        last_name:'',
        relationship:'',
        employee_id:''
    })
    useEffect(()=>{
        apiDependents.findOne(match.params.id)
        .then(data =>{
            setValues({
                ...values,
                dependent_id : data.dependent_id,
                dependent_name : data.dependent_name
            })
        })
        .catch(error => console.log(error))
    },[])
    const handleChange = name => event => {
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
        await apiDependents.update(payload)
        .then(result => {
            window.alert('Data Successfully Edited')
            history.push('/Dependents')
        })
    }
  return (
    <div>
        <h1>Edit Dependents</h1>
        <form>
            <div>
                <label>
                    first Name : 
                </label>
                <input type='text' placeholder='first_name' value={values.first_name} onChange={handleChange('first_name')} />
            </div>
            <div>
                <label>
                    last Name : 
                </label>
                <input type='text' placeholder='last_name' value={values.lastt_name} onChange={handleChange('last_name')} />
            </div>
            <div>
                <label>
                    relationship : 
                </label>
                <input type='text' placeholder='relationship' value={values.relationship} onChange={handleChange('relationship')} />
            </div>
            <div>
                <label>
                    Employee : 
                </label>
                <input type='text' placeholder='employee_id' value={values.employee_id_name} onChange={handleChange('employee_id')} />
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
