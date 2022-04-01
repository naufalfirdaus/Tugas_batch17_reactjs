import React from 'react'
import { Link } from 'react-router-dom'

export default function mainLayout() {
  return (
    <div>
        <h2>Main Layout</h2>
        <ul>
            <Link to='/region'>
                Region
            </Link><br/>
            <Link to='/country'>
                Country 
            </Link><br/>
            <Link to='/department'>
              Department
            </Link><br/>
            <Link to='/dependent'>
              Dependent
            </Link><br/>
            <Link to='/employee'>
              Employee
            </Link><br/>
            <Link to='/job'>
              Jobs
            </Link><br/>
            <Link to='/location'>
              Location
            </Link><br/>
            <Link to='/user'>
              User
            </Link><br/>
        </ul>
    </div>
  )
} 
