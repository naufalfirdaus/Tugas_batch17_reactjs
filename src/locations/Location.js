import React, {useState,useEffect} from 'react'
import apiLocation from '../api/apiLocation'
import { useHistory } from 'react-router-dom'

export default function Location() {
    let history = useHistory()
    const [location,setlocation] =useState()
    let [refresh, setRefresh] = useState(false);

    useEffect(()=>{
        apiLocation.list().then(data => {
            setlocation(data)
        })
    },[])

    useEffect(()=>{
        apiLocation.list().then(data =>{
            setlocation(data)
        })
        setRefresh(false)
    },[refresh])

    const onEdit = async(id)=>{
        history.push(`location/edit/${id}`)
    }

    const onDelete = async(id) =>{
        apiLocation.deleteRow(id)
        .then(()=>{
            setRefresh(true)
            window.alert('Data Successfully Deleted')
        })
        .catch(error => window.error(error.massage))
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
                    location && location.map(loca =>{
                        return(
                        <tr>
                            <td>{loca.location_id}</td>
                            <td>{loca.street_address}</td>
                            <td>{loca.postal_code}</td>
                            <td>{loca.city}</td>
                            <td>{loca.state_province}</td>
                            <td>{loca.country_id}</td>
                            <button onClick={()=>onEdit(loca.location_id)}>Edit</button>
                            <button onClick={()=>{
                                if(window.confirm('Delete this record')){
                                    onDelete(loca.location_id)
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
