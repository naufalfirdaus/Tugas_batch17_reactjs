import React, {useEffect,useState} from 'react'
import apiCountry from '../api/apiCountry'
import { useHistory } from 'react-router-dom'

export default function EditCountry({match}) {
    let history = useHistory()
    const [values,setValues] = useState({
        country_id : '',
        country_name : '',
        region_id : ''
    })
    useEffect(()=>{
        apiCountry.findOne(match.params.id)
        .then(data =>{
            setValues({
                ...values,
                country_id : data.country_id,
                country_name : data.country_name,
                region_id : data.region_id
            })
        })
        .catch(error => console.log(error))
    },[])
    const handleChange = name => event =>{
        setValues({...values,[name]: event.target.value})
    }
    const onSubmit = async () =>{
        const payload ={
            country_id : values.country_id,
            country_name : values.country_name,
            region_id : values.region_id
        }
        await apiCountry.update(payload)
        .then(result => {
            window.alert('Data Successfully Edited')
            history.push('/country')
        })
    }
  return (
    <div>
        <h1>Edit Country</h1>
        <form>
        <label>
                Country Id :
            </label>
            <input type='text' placeholder='Country Id' value={values.country_id} onChange={handleChange('country_id')}/><br/>
    
            <label>
                Country Name :
            </label>
            <input type='text' placeholder='Country Name' value={values.country_name} onChange={handleChange('country_name')}/><br/>

            <label>
                Region Id :
            </label>
            <input type='text' placeholder='Region Id' value={values.region_id} onChange={handleChange('region_id')}/><br/>
        </form>
        <button type='button' onClick={onSubmit}>
            Submit 
        </button>
        <button type='button' onClick={()=>history.goBack()}>
            Cancel
        </button>
    </div>
  )
}
