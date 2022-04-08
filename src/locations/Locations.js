import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom'
import { GetLocationsRequest, DelLocationsRequest } from '../redux-saga/actions/LocationsAction';

export default function Locations() {

    let history = useHistory()
    const dispatch = useDispatch()
    const { locations } = useSelector((state) => state.locationsStated)


     useEffect(() => {
    dispatch(GetLocationsRequest())
  }, [])

    const onEdit = async (id) => {
    history.push(`locations/edit/${id}`)
  }
    const onDelete = async (id) => {
        dispatch(DelLocationsRequest(id))
    }

    return (
        <div>
            <h2>List of Locations</h2>
            <button onClick={()=>history.push('/locations/new')}>Add Region</button>
            <button onClick={() => history.push("/")}>Back</button>
            <table>
               <thead> 
                   <tr>         
            <th>Location Id</th>
            <th>Street Address</th>
            <th>Postal Code</th>
            <th>City</th>
            <th>State Province</th>
            <th>Country Id</th>
            </tr>
                </thead>
                <tbody>
                    {
                        locations && locations.map(loc => {
                            return (
                                <tr>
                                    <td>{loc.location_id}</td>
                                    <td>{loc.street_address}</td>
                                    <td>{loc.postal_code}</td>
                                    <td>{loc.city}</td>
                                    <td>{loc.state_province}</td>
                                    <td>{loc.country_id}</td>
                                    <button onClick={() => onEdit(loc.location_id)}>Edit</button>
                                    <button onClick={() => {
                                        if (window.confirm("Delete this record ?"))
                                            onDelete(loc.location_id)
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