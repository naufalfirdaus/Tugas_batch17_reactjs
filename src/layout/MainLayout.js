import React from 'react'
import { Link } from 'react-router-dom'

export default function mainLayout() {
  return (
    <div>
        <h2>Main Layout</h2>
        <ul>
            <Link to='/region'>
                Region
            </Link>
        </ul>
        <ul>
            <Link to='/country'>
                Country
            </Link>
        </ul>
        <ul>
            <Link to='/department'>
                Department
            </Link>
        </ul>
        <ul>
            <Link to='/dependent'>
                Dependent
            </Link>
        </ul>
        <ul>
            <Link to='/job'>
                Job
            </Link>
        </ul>
        <ul>
            <Link to='/location'>
                Location
            </Link>
        </ul>
        <ul>
            <Link to='/employee'>
                Employee
            </Link>
        </ul>
    </div>
  )
}
