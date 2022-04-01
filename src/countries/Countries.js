import React, { useState, useEffect } from 'react'
import apiCountries from '../api/apiCountries'
import { useHistory } from 'react-router-dom'

export default function Countries() {
    let history = useHistory()
    const [Countries, setCountries] = useState()
    let [refresh, setRefresh] = useState(false);


    useEffect(() => {
        apiCountries.list().then(data => {
            setCountries(data)
        })
    }, [])

    useEffect(()=>{
        apiCountries.list().then(data => {
            setCountries(data)
        })
        setRefresh(false)
    },[refresh])

    const onEdit = async (id) =>{
        history.push(`Countries/edit/${id}`)
    }
    const onDelete = async (id) =>{
        apiCountries.deleteRow(id)
        .then(()=>{
            setRefresh(true)
            window.alert('Data Successfully Deleted')
        })
        .catch(error => window.error(error.message))
    }

    return (
        <div>
            <h2>List of Countries</h2>
            <button onClick={() => history.push('/countries/new')}>Add Countries</button>
            <button onClick={() => history.push('/')}>Back</button>
            <table>
                <thead>
                    Countries Name
                </thead>
                <tbody>
                    {
                        Countries && Countries.map(coun => {
                            return (
                                <tr>
                                    <td>{coun.country_id}</td>
                                    <td>{coun.country_name}</td>
                                    <button onClick={()=>onEdit(coun.country_id)}>Edit</button>
                                    <button onClick={()=>{
                                        if(window.confirm('Delete this record')) {
                                            onDelete(coun.country_id)
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
