import React, { useState, useEffect } from 'react'
import apiLocations from '../api/apiLocations'
import { useHistory } from 'react-router-dom'

export default function Locations() {
    let history = useHistory()
    const [Locations, setLocations] = useState()
    let [refresh, setRefresh] = useState(false);


    useEffect(() => {
        apiLocations.list().then(data => {
            setLocations(data)
        })
    }, [])

    useEffect(()=>{
        apiLocations.list().then(data => {
            setLocations(data)
        })
        setRefresh(false)
    },[refresh])

    const onEdit = async (id) =>{
        history.push(`locations/edit/${id}`)
    }
    const onDelete = async (id) =>{
        apiLocations.deleteRow(id)
        .then(()=>{
            setRefresh(true)
            window.alert('Data Successfully Deleted')
        })
        .catch(error => window.error(error.message))
    }

    return (
        <div>
            <h2>List of Locations</h2>
            <button onClick={() => history.push('/locations/new')}>Add Locations</button>
            <button onClick={() => history.push('/')}>Back</button>
            <table>
                <thead>
                    Locations Name
                </thead>
                <tbody>
                    {
                        Locations && Locations.map(coun => {
                            return (
                                <tr>
                                    <td>{coun.location_id}</td>
                                    <td>{coun.street_address}</td>
                                    <td>{coun.postal_code}</td>
                                    <td>{coun.city}</td>
                                    <td>{coun.state_province}</td>
                                    <td>{coun.country_id}</td>
                                    <button onClick={()=>onEdit(coun.location_id)}>Edit</button>
                                    <button onClick={()=>{
                                        if(window.confirm('Delete this record')) {
                                            onDelete(coun.location_id)
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
