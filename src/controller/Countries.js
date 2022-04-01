import React,{useState,useEffect} from 'react'
import apiCountries from '../api/apiCountries'
import {useHistory} from 'react-router-dom'

export default function Countries() {
    let history = useHistory()
    const [countries,setCountries] =useState()
    let [refresh, setRefresh] = useState(false);

    useEffect(()=>{
        apiCountries.list().then(data => {
            setCountries(data)
        })
    },[])
    
    useEffect(()=>{
        apiCountries.list().then(data => {
            setCountries(data)
        })
        setRefresh(false)
    },[refresh])

    const onEdit = async (id) =>{
        history.push(`country/edit/${id}`)
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
        <button onClick={()=>history.push('/country/new')}>Add Countries</button>
        <button onClick={()=>history.push('/')}>Back</button>
        <table>
            <thead>
                Countries Name
            </thead>
            <tbody>
                {
                    countries && countries.map(count =>{
                        return (
                        <tr>
                            <td>{count.country_id}</td>
                            <td>{count.country_name}</td>
                            <td>{count.region_id}</td>
                            <button onClick={()=>onEdit(count.country_id)}>Edit</button>
                            <button onClick={()=>{
                                        if(window.confirm('Delete this record')) {
                                            onDelete(count.country_id)
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
