import React,{useEffect,useState} from 'react'
import apiJobs from '../api/apiJobs'
import {useHistory} from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { GetJobsRequest,AddJobsRequest } from '../redux-saga/actions/JobsAction'
export default function AddJobs() {
    let history = useHistory()
    const dispatch = useDispatch()
    const { jobs } = useSelector((state) => state.jobsStated)
    const [value,setValue] = useState({
        job_id : undefined,
        job_title : '',
        min_salary : '',
        max_salary :''
    })
    const handleChange = name => event =>{
        setValue({...value,[name]:event.target.value})
    }
    const onSubmit = async()=>{
        const payload = {
            job_id : (value.job_id) || '',
            job_title : (value.job_title) || '',
            min_salary : (value.min_salary) || '',
            max_salary : (value.max_salary) || ''
        }
        dispatch(AddJobsRequest(payload))
        window.alert('Data Succesfully Insert')
        history.push('/jobs')
    }

  return (
    <div>
        <h1>Add Jobs</h1>
        <form>
            <div>
                <label>
                    Job Id : 
                </label>
                <input type='text' name='job_id' id='job_id' placeholder='job id' onChange={handleChange('job_id')} />
            </div>
            <div>
                <label>
                    Job Title : 
                </label>
                <input type='text' name='job_title' id='job_title' placeholder='job title' onChange={handleChange('job_title')} />
            </div>
            <div>
                <label>
                    Min Salary  : 
                </label>
                <input type='text' name='min_salary' id='min_salary' placeholder='min salary' onChange={handleChange('min_salary')} />
            </div>
            <div>
                <label>
                    Max Salary  : 
                </label>
                <input type='text' name='max_salary' id='max_salary' placeholder='max salary' onChange={handleChange('max_salary')} />
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