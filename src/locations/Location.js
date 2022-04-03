import React, { useState, useEffect } from 'react'
import apiLocation from '../api/apiLocation'
import { useHistory } from 'react-router-dom'

export default function Location() {
    let history = useHistory()
    const [location, setLocation] = useState()
    let [refresh, setRefresh] = useState(false);


    useEffect(() => {
        apiLocation.list().then(data => {
            setLocation(data)
        })
    }, [])

    useEffect(()=>{
        apiLocation.list().then(data => {
            setLocation(data)
        })
        setRefresh(false)
    },[refresh])

    const onEdit = async (id) =>{
        history.push(`location/edit/${id}`)
    }
    const onDelete = async (id) =>{
        apiLocation.deleteRow(id)
        .then(()=>{
            setRefresh(true)
            window.alert('Data Successfully Deleted')
        })
        .catch(error => window.error(error.message))
    }

    return (
        <div>
            <h2>List of Locations</h2>
            <button onClick={() => history.push('/location/new')}>Add Location</button>
            <button onClick={() => history.push('/')}>Back</button>
            <table>
                <thead>
                    Location Name
                </thead>
                <tbody>
                    {
                        location && location.map(regi => {
                            return (
                                <tr>
                                    <td>{regi.location_id}</td>
                                    <td>{regi.street_address}</td>
                                    <td>{regi.postal_code}</td>
                                    <td>{regi.city}</td>
                                    <td>{regi.state_province}</td>
                                    <td>{regi.country_id}</td>                                   
                                    <button onClick={()=>onEdit(regi.location_id)}>Edit</button>
                                    <button onClick={()=>{
                                        if(window.confirm('Delete this record')) {
                                            onDelete(regi.location_id)
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