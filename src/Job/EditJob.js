import React, {useEffect,useState} from 'react'
import apiJob from '../api/apiJob'
import { useHistory } from 'react-router-dom'

export default function EditJob({match}) {
    let history = useHistory()
    const [values,setValues] = useState({
        job_id : '',
        job_title : '',
        min_salary : '',
        max_salary : ''
    })
    useEffect(()=>{
        apiJob.findOne(match.params.id)
        .then(data =>{
            setValues({
                ...values,
                job_id : data.job_id,
                job_title : data.job_title,
                min_salary : data.min_salary,
                max_salary : data.max_salary
            })
        })
        .catch(error => console.log(error))
    },[])
    const handleChange = name => event =>{
        setValues({...values,[name]: event.target.value})
    }
    const onSubmit = async () =>{
        const payload ={
            job_id : values.job_id,
            job_title : values.job_title,
            min_salary : values.min_salary,
            max_salary : values.max_salary
        }
        await apiJob.update(payload)
        .then(result => {
            window.alert('Data Successfully Edited')
            history.push('/job')
        })
    }
  return (
    <div>
        <h1>Edit Job</h1>
        <form>    
            <label>
                Job Id :
            </label>
            <input type='text' placeholder='Job Id' value={values.job_id} onChange={handleChange('job_id')}/><br/>

            <label>
                Job Title :
            </label>
            <input type='text' placeholder='Job Title' value={values.job_title} onChange={handleChange('job_title')}/><br/>

            <label>
                Min Salary :
            </label>
            <input type='text' placeholder='Min Salary' value={values.min_salary} onChange={handleChange('min_salary')}/><br/>

            <label>
                Max Salary :
            </label>
            <input type='text' placeholder='Max Salary' value={values.max_salary} onChange={handleChange('max_salary')}/><br/>
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
