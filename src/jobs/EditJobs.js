import React, {useEffect,useState} from 'react'
import apiJobs from '../api/apiJobs'
import { useHistory } from 'react-router-dom'

export default function EditJobs({match}) {
    let history = useHistory()
    const [values,setValues] = useState({
        job_id : undefined,
        job_title : '',
        min_salary : '',
        max_salary : ''
    })
    useEffect(()=>{
        apiJobs.findOne(match.params.id)
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
    const handleChange = name => event => {
        setValues({...values,[name]: event.target.value})
    }
    const onSubmit = async () =>{
        const payload ={
            job_id : values.job_id,
            job_title : values.job_title,
            min_salary : values.min_salary,
            max_salary : values.max_salary
        }
        await apiJobs.update(payload)
        .then(result => {
            window.alert('Data Successfully Edited')
            history.push('/jobs')
        })
    }
  return (
    <div>
        <h1>Edit Jobs</h1>
        <form>
             <div>
                <label>
                   Job Id : 
                </label>
                <input type='text' name='job_id' id='job_id' placeholder='job id' value={values.job_id} onChange={handleChange('job_id')} />
            </div>
             <div>
                <label>
                   Job Title : 
                </label>
                <input type='text' name='job_title' id='job_title' placeholder='job title' value={values.job_title} onChange={handleChange('job_title')} />
            </div>
            <div>
                <label>
                   Min Salary : 
                </label>
                <input type='text' name='min_salary' id='min_salary' placeholder='min salary' value={values.min_salary} onChange={handleChange('min_salary')} />
            </div>
            <div>
                <label>
                   Max Salary : 
                </label>
                <input type='text' name='max_salary' id='max_salary' placeholder='Max salary' value={values.max_salary} onChange={handleChange('max_salary')} />
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