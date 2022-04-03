import React, { useState, useEffect } from 'react'
import apiJob from '../api/apiJob'
import { useHistory } from 'react-router-dom'

export default function Job() {
    let history = useHistory()
    const [job, setJob] = useState()
    let [refresh, setRefresh] = useState(false);


    useEffect(() => {
        apiJob.list().then(data => {
            setJob(data)
        })
    }, [])

    useEffect(()=>{
        apiJob.list().then(data => {
            setJob(data)
        })
        setRefresh(false)
    },[refresh])

    const onEdit = async (id) =>{
        history.push(`job/edit/${id}`)
    }

    const onDelete = async (id) =>{
        apiJob.deleteRow(id)
        .then(()=>{
            setRefresh(true)
            window.alert('Data Successfully Deleted')
        })
        .catch(error => window.error(error.message))
    }

    return (
        <div>
            <h2>List of Job</h2>
            <button onClick={() => history.push('/job/new')}>Add Job</button>
            <button onClick={() => history.push('/')}>Back</button>
            <table>
                <thead>
                    Job Tittle
                </thead>
                <tbody>
                    {
                        job && job.map(regi => {
                            return (
                                <tr>
                                    <td>{regi.job_id}</td>
                                    <td>{regi.job_title}</td>
                                    <td>{regi.min_salary}</td>
                                    <td>{regi.max_salary}</td>
                                    <button onClick={()=>onEdit(regi.job_id)}>Edit</button>
                                    <button onClick={()=>{
                                        if(window.confirm('Delete this record')) {
                                            onDelete(regi.job_id)
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