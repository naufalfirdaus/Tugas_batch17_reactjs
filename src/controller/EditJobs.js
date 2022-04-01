import React, {useEffect,useState} from 'react'
import apiJobs from '../api/apiJobs'
import { useHistory } from 'react-router-dom'

export default function EditJob({match}) {
    let history = useHistory()
    const [values,setValues] = useState({
        job_id : 0,
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
        await apiJobs.update(payload)
        .then(result => {
            window.alert('Data Successfully Edited')
            history.push('/job')
        })
    }
    return (
        <div>
            <h1>Edit Job</h1>
            <form>
                <div>
                    <label>
                        Job Title : 
                    </label>
                    <input type='text' placeholder='Job Title' onChange={handleChange('job_title')} />
                </div>
                <div>
                    <label>
                        Min Salary : 
                    </label>
                    <input type='text' placeholder='Min Salary' onChange={handleChange('min_salary')} />
                </div>
                <div>
                    <label>
                        Min Salary : 
                    </label>
                    <input type='text' placeholder='Max Salary' onChange={handleChange('max_salary')} />
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