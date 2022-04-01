import React, {useState,useEffect} from 'react'
import apiDependent from '../api/apiDependent'
import { useHistory } from 'react-router-dom'

export default function Dependent() {
    let history = useHistory()
    const [dependent,setDependent] =useState()
    let [refresh, setRefresh] = useState(false);

    useEffect(()=>{
        apiDependent.list().then(data => {
            setDependent(data)
        })
    },[])

    useEffect(()=>{
        apiDependent.list().then(data =>{
            setDependent(data)
        })
        setRefresh(false)
    },[refresh])

    const onEdit = async(id)=>{
        history.push(`dependent/edit/${id}`)
    }

    const onDelete = async(id) =>{
        apiDependent.deleteRow(id)
        .then(()=>{
            setRefresh(true)
            window.alert('Data Successfully Deleted')
        })
        .catch(error => window.error(error.massage))
    }
  return (
    <div>
        <h2>List of Dependent</h2>
        <button onClick={()=>history.push('/dependent/new')}>Add Dependent</button>
        <button onClick={()=>history.push('/')}>Back</button>
        <table>
            <thead>
                Dependent Name 
            </thead>
            <tbody>
                {
                    dependent && dependent.map(depe =>{
                        return(
                        <tr>
                            <td>{depe.dependent_id}</td>
                            <td>{depe.first_name}</td>
                            <td>{depe.last_name}</td>
                            <td>{depe.relationship}</td>
                            <td>{depe.employee_id}</td>
                            <button onClick={()=>onEdit(depe.dependent_id)}>Edit</button>
                            <button onClick={()=>{
                                if(window.confirm('Delete this record')){
                                    onDelete(depe.dependent_id)
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
