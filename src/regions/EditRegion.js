import React, {useEffect,useState} from 'react'
import apiRegion from '../api/apiRegion'
import { useHistory } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { EditRegionRequest } from '../redux-saga/action/RegionAction'

export default function EditRegion({match}) {
    let history = useHistory()
    const dispatch = useDispatch()
    const [values,setValues] = useState({
        region_id : undefined,
        region_name : ''
    })
    useEffect(()=>{
        apiRegion.findOne(match.params.id)
        .then(data =>{
            setValues({
                ...values,
                region_id : data.region_id,
                region_name : data.region_name
            })
        })
        .catch(error => console.log(error))
    },[])
    const handleChange = name => event =>{
        setValues({...values,[name]: event.target.value})
    }
    const onSubmit = async () =>{
        const payload ={
            region_id : values.region_id,
            region_name : values.region_name
        }
        dispatch(EditRegionRequest(payload))
            window.alert('Data Successfully Edited')
            history.push('/region')
    }
  return (
    <div>
        <h1>Edit Region</h1>
        <form>
            <label>
                Region Name :
            </label>
            <input type='text' placeholder='Region Name' value={values.region_name} onChange={handleChange('region_name')}/>
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
