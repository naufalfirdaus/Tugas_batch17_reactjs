import React, {useState,useEffect} from 'react'
import apiJob from '../api/apiJob'
import { useHistory } from 'react-router-dom'

export default function Job() {
    let history = useHistory()
    const [job,setjob] =useState()
    let [refresh, setRefresh] = useState(false);

    useEffect(()=>{
        apiJob.list().then(data => {
            setjob(data)
        })
    },[])

    useEffect(()=>{
        apiJob.list().then(data =>{
            setjob(data)
        })
        setRefresh(false)
    },[refresh])

    const onEdit = async(id)=>{
        history.push(`job/edit/${id}`)
    }

    const onDelete = async(id) =>{
        apiJob.deleteRow(id)
        .then(()=>{
            setRefresh(true)
            window.alert('Data Successfully Deleted')
        })
        .catch(error => window.error(error.massage))
    }
  return (
    <div>
        <h2>List of Job</h2>
        <button onClick={()=>history.push('/job/new')}>Add Job</button>
        <button onClick={()=>history.push('/')}>Back</button>
        <table>
            <thead>
                Job Name 
            </thead>
            <tbody>
                {
                    job && job.map(j =>{
                        return(
                        <tr>
                            <td>{j.job_id}</td>
                            <td>{j.job_title}</td>
                            <td>{j.min_salary}</td>
                            <td>{j.max_salary}</td>
                            <button onClick={()=>onEdit(j.job_id)}>Edit</button>
                            <button onClick={()=>{
                                if(window.confirm('Delete this record')){
                                    onDelete(j.job_id)
                                }
                            }}>Delete</button>
                        </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
