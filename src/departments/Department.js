import React, {useState,useEffect} from 'react'
import apiDepartment from '../api/apiDepartment'
import { useHistory } from 'react-router-dom'

export default function Department() {
    let history = useHistory()
    const [department,setDepartment] =useState()
    let [refresh, setRefresh] = useState(false);

    useEffect(()=>{
        apiDepartment.list().then(data => {
            setDepartment(data)
        })
    },[])

    useEffect(()=>{
        apiDepartment.list().then(data =>{
            setDepartment(data)
        })
        setRefresh(false)
    },[refresh])

    const onEdit = async(id)=>{
        history.push(`department/edit/${id}`)
    }

    const onDelete = async(id) =>{
        apiDepartment.deleteRow(id)
        .then(()=>{
            setRefresh(true)
            window.alert('Data Successfully Deleted')
        })
        .catch(error => window.error(error.massage))
    }
  return (
    <div>
        <h2>List of Department</h2>
        <button onClick={()=>history.push('/department/new')}>Add Department</button>
        <button onClick={()=>history.push('/')}>Back</button>
        <table>
            <thead>
                Department Name 
            </thead>
            <tbody>
                {
                    department && department.map(depa =>{
                        return(
                        <tr>
                            <td>{depa.department_id}</td>
                            <td>{depa.department_name}</td>
                            <td>{depa.location_id}</td>
                            <button onClick={()=>onEdit(depa.department_id)}>Edit</button>
                            <button onClick={()=>{
                                if(window.confirm('Delete this record')){
                                    onDelete(depa.department_id)
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
