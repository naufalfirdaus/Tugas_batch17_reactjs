import React,{useEffect,useState} from 'react'
import apiJob from '../api/apiJob'
import { useHistory } from 'react-router-dom'

export default function AddJob() {
    let history = useHistory()
    const [value,setValue] = useState({
        job_id : '',
        job_title : '',
        min_salary : '',
        max_salary : ''
    })
    
    const handleChange = name => event => {
        setValue({...value,[name]:event.target.value})
    }

    const onSubmit = async()=>{
        const payload = {
            job_id : (value.job_id) || '',
            job_title : (value.job_title) || '',
            min_salary : (value.min_salary) || '',
            max_salary : (value.max_salary) || ''
        }
        await apiJob.Create(payload)
        .then(result =>{
            window.alert('Data Successfully Insert')
            history.push('/job')
        })
        .catch(error => console.log(error))
    }
  return (
    <div>
        <h1>Add Job</h1>
        <form>
            <label>
                Job Id :
            </label>
            <input type='text' placeholder='Job Id' onChange={handleChange('job_id')}/><br/>

            <label>
                Job Title :
            </label>
            <input type='text' placeholder='Job Title' onChange={handleChange('job_title')}/><br/>

            <label>
                Min Salary :
            </label>
            <input type='text' placeholder='Min Salary' onChange={handleChange('min_salary')}/><br/>

            <label>
                Max Salary :
            </label>
            <input type='text' placeholder='Max Salary' onChange={handleChange('max_salary')}/><br/>
            
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
