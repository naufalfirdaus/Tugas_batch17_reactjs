import React, { useState, useEffect } from 'react'
import apiCountries from '../api/apiCountries'
import { useHistory } from 'react-router-dom'

export default function Countries() {
    let history = useHistory()
    const [countries, setCountries] = useState()
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
        history.push(`countries/edit/${id}`)
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
            <button onClick={() => history.push('/countries/new')}>Add Region</button>
            <button onClick={() => history.push('/')}>Back</button>
            <table>
                <thead>
                    Country Name
                </thead>
                <tbody>
                    {
                        countries && countries.map(regi => {
                            return (
                                <tr>
                                    <td>{regi.country_id}</td>
                                    <td>{regi.country_name}</td>
                                    <td>{regi.region_id}</td>
                                    <button onClick={()=>onEdit(regi.country_id)}>Edit</button>
                                    <button onClick={()=>{
                                        if(window.confirm('Delete this record')) {
                                            onDelete(regi.region_id)
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