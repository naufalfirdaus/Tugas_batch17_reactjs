import React, {useState,useEffect} from 'react'
import apiCountry from '../api/apiCountry'
import { useHistory } from 'react-router-dom'

export default function Country() {
    let history = useHistory()
    const [country,setCountry] =useState()
    let [refresh, setRefresh] = useState(false);

    useEffect(()=>{
        apiCountry.list().then(data => {
            setCountry(data)
        })
    },[])

    useEffect(()=>{
        apiCountry.list().then(data =>{
            setCountry(data)
        })
        setRefresh(false)
    },[refresh])

    const onEdit = async(id)=>{
        history.push(`country/edit/${id}`)
    }

    const onDelete = async(id) =>{
        apiCountry.deleteRow(id)
        .then(()=>{
            setRefresh(true)
            window.alert('Data Successfully Deleted')
        })
        .catch(error => window.error(error.massage))
    }
  return (
    <div>
        <h2>List of Country</h2>
        <button onClick={()=>history.push('/country/new')}>Add Country</button>
        <button onClick={()=>history.push('/')}>Back</button>
        <table>
            <thead>
                Country Name 
            </thead>
            <tbody>
                {
                    country && country.map(coun =>{
                        return(
                        <tr>
                            <td>{coun.country_id}</td>
                            <td>{coun.country_name}</td>
                            <td>{coun.region_id}</td>
                            <button onClick={()=>onEdit(coun.country_id)}>Edit</button>
                            <button onClick={()=>{
                                if(window.confirm('Delete this record')){
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
