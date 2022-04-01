import React,{useEffect,useState} from 'react'
import apiCountries from '../api/apiCountries'
import {useHistory} from 'react-router-dom'

export default function EditCountries({match}) {
    let history = useHistory()
    const [value,setValue] = useState({
        country_id : undefined,
        country_name : '',
        region_id : ''
    })
    useEffect(()=>{
        apiCountries.findOne(match.params.id)
        .then(data =>{
            setValue({
                ...value,
                country_id : data.country_id,
                country_name : data.country_name,
                region_id : data.region_id
            })
        })
        .catch(error => console.log(error))
    },[])
    const handleChange = name => event =>{
        setValue({...value,[name]:event.target.value})
    }
    const onSubmit = async()=>{
        const payload = {
            country_id : value.country_id,
            country_name : value.country_name,
            region_id : value.region_id
        }
        await apiCountries.update(payload)
        .then(result =>{
            window.alert('Data Succesfully Insert')
            history.push('/country')
        })
        .catch(error => console.log(error))
    }
  return (
    <div>
        <h1>Edit Countries</h1>
        <form>
            <div>
                <label>
                    Country Name : 
                </label>
                <input type='text' placeholder='Country Name' onChange={handleChange('country_name')} />
            </div>
            <div>
                <label>
                    Region ID : 
                </label>
                <input type='text' placeholder='Country Name' onChange={handleChange('region_id')} />
            </div>
        </form>
        <div>
            <button type='button' onClick={onSubmit}>
                Submit
            </button>
            <button type='button' onClick={()=>history.goBack()}>
                Cancel
            </button>
        </div>
    </div>
  )
}
