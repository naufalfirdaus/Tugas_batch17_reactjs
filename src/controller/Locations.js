import React,{useState,useEffect} from 'react'
import apiLocations from '../api/apiLocations'
import {useHistory} from 'react-router-dom'

export default function Locations() {
    let history = useHistory()
    const [location,setLocation] =useState()
    let [refresh, setRefresh] = useState(false);

    useEffect(()=>{
        apiLocations.list().then(data => {
            setLocation(data)
        })
    },[])

    useEffect(()=>{
        apiLocations.list().then(data => {
            setLocation(data)
        })
        setRefresh(false)
    },[refresh])

    const onEdit = async (id) =>{
        history.push(`location/edit/${id}`)
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
        <h2>List of Location</h2>
        <button onClick={()=>history.push('/location/new')}>Add Location</button>
        <button onClick={()=>history.push('/')}>Back</button>
        <table>
            <thead>
                Location Name
            </thead>
            <tbody>
                {
                    location && location.map(loc =>{
                        return (
                        <tr>
                            <td>{loc.location_id}</td>
                            <td>{loc.street_address}</td>
                            <td>{loc.postal_code}</td>
                            <td>{loc.city}</td>
                            <td>{loc.state_province}</td>
                            <td>{loc.country_id}</td>
                            <button onClick={()=>onEdit(loc.location_id)}>Edit</button>
                            <button onClick={()=>{
                                if(window.confirm('Delete this record')) {
                                    onDelete(loc.location_id)
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
