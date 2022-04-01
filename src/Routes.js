import React from 'react'
import {Switch,Redirect,Route} from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import Region from './regions/Region'
import AddRegion from './regions/AddRegion'
import EditRegion from './regions/EditRegion'
import Countries from './countries/Countries'
import AddCountries from './countries/AddCountries'
import EditCountries from './countries/EditCountries'
import Departments from './departments/Departments'
import AddDepartments from './departments/AddDepartments'
import EditDepartments from './departments/EditDepartments'
import Locations from './locations/Locations'
import AddLocations from './locations/AddLocations'
import EditLocations from './locations/EditLocations'
import Dependents from './dependents/Dependents'
import AddDependents from './dependents/AddDependents'
import EditDependents from './dependents/EditDependents'
import Job from './job/Job'
import AddJob from './job/AddJob'
import EditJob from './job/EditJob'

export default function Routes() {
  return (
    <Switch>
        <Redirect exact from='/' to='/home'/>
        <Route path='/home' component={MainLayout}/>
        <Route exact path='/region' component={Region}/>
        <Route exact path='/region/new' component={AddRegion}/>
        <Route exact path='/region/edit/:id' component={EditRegion}/>

        <Redirect exact from='/' to='/home'/>
        <Route path='/home' component={MainLayout}/>
        <Route exact path='/countries' component={Countries}/>
        <Route exact path='/countries/new' component={AddCountries}/>
        <Route exact path='/countries/edit/:id' component={EditCountries}/>

        <Redirect exact from='/' to='/home'/>
        <Route path='/home' component={MainLayout}/>
        <Route exact path='/departments' component={Departments}/>
        <Route exact path='/departments/new' component={AddDepartments}/>
        <Route exact path='/departments/edit/:id' component={EditDepartments}/>

        <Redirect exact from='/' to='/home'/>
        <Route path='/home' component={MainLayout}/>
        <Route exact path='/locations' component={Locations}/>
        <Route exact path='/locations/new' component={AddLocations}/>
        <Route exact path='/locations/edit/:id' component={EditLocations}/>

        <Redirect exact from='/' to='/home'/>
        <Route path='/home' component={MainLayout}/>
        <Route exact path='/job' component={Job}/>
        <Route exact path='/job/new' component={AddJob}/>
        <Route exact path='/job/edit/:id' component={EditJob}/>
    </Switch>
  )
}
