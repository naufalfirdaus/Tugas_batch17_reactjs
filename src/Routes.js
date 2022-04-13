import React from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
import DashboardLayout from './layout/DashboardLayout'
import MainLayout from './layout/MainLayout'
import Region from './regions/Region'
import AddRegion from './regions/AddRegion'
import EditRegion from './regions/EditRegion'
import Employee from './employee/Employee'
import AddEmployee from './employee/AddEmployee'
import Country from './countries/Country'
import AddCountry from './countries/AddCountry'
import EditCountry from './countries/EditCountry'
import Department from './departments/Department'
import AddDepartment from './departments/AddDepartment'
import EditDepartment from './departments/EditDepartment'
import Dependent from './dependent/Dependent'
import AddDependent from './dependent/AddDependent'
import EditDependent from './dependent/EditDependent'
import Job from './jobs/Job'
import AddJob from './jobs/AddJob'
import EditJob from './jobs/EditJob'
import Location from './locations/Location'
import AddLocation from './locations/AddLocation'
import EditLocation from './locations/EditLocation'

export default function Routes() {
  return useRoutes([
    {
        path: '/',
        element: <DashboardLayout />,
        children: [
            { path: 'region', element: <Region /> },
            { path: 'region/new', element: <AddRegion /> },
            { path: 'region/edit', element: <EditRegion /> },
            { path: 'country', element: <Country /> },
            { path: 'country/new', element: <AddCountry /> },
            { path: 'country/edit', element: <EditCountry /> },
            { path: 'department', element: <Department /> },
            { path: 'department/new', element: <AddDepartment /> },
            { path: 'department/edit', element: <EditDepartment /> },
            { path: 'dependent', element: <Dependent /> },
            { path: 'dependent/new', element: <AddDependent /> },
            { path: 'dependent/edit', element: <EditDependent /> },
            { path: 'employee', element: <Employee /> },
            { path: 'employee/new', element: <AddEmployee /> },
            { path: 'job', element: <Job /> },
            { path: 'job/new', element: <AddJob /> },
            { path: 'job/edit', element: <EditJob /> },
            { path: 'location', element: <Location /> },
            { path: 'location/new', element: <AddLocation /> },
            { path: 'location/edit', element: <EditLocation /> },
        ]
    },
    { path: '*', element: <Navigate to='/404' replace /> }
])
}

// import React from 'react'
// import { Switch,Redirect,Route } from 'react-router-dom'
// import MainLayout from './layout/MainLayout'
// import Region from './regions/Region'
// import AddRegion from './regions/AddRegion'
// import Country from './countries/Country'
// import AddCountry from './countries/AddCountry'
// import Department from './departments/Department'
// import AddDepartment from './departments/AddDepartment'
// import Dependent from './dependent/Dependent'
// import AddDependent from './dependent/AddDependent'
// import Job from './jobs/Job'
// import AddJob from './jobs/AddJob'
// import Location from './locations/Location'
// import AddLocation from './locations/AddLocation'
// import EditRegion from './regions/EditRegion'
// import EditCountry from './countries/EditCountry'
// import EditDepartment from './departments/EditDepartment'
// import EditLocation from './locations/EditLocation'
// import EditDependent from './dependent/EditDependent'
// import EditJob from './jobs/EditJob'
// import Employee from './employee/Employee'
// import AddEmployee from './employee/AddEmployee'

// export default function Routes() {
//   return (
//     <Switch>

//         <Redirect exact from='/' to='home'/>
//         <Route path='/home' component={MainLayout}/>
//         <Route exact path='/country' component={Country}/>
//         <Route exact path='/country/new' component={AddCountry}/>
//         <Route exact path='/country/edit/:id' component={EditCountry}/>
//         <Route exact path='/region' component={Region}/>
//         <Route exact path='/region/new' component={AddRegion}/>
//         <Route exact path='/region/edit/:id' component={EditRegion}/>
//         <Route exact path='/department' component={Department}/>
//         <Route exact path='/department/new' component={AddDepartment}/>
//         <Route exact path='/department/edit/:id' component={EditDepartment}/>
//         <Route exact path='/dependent' component={Dependent}/>
//         <Route exact path='/dependent/new' component={AddDependent}/>
//         <Route exact path='/dependent/edit/:id' component={EditDependent}/>
//         <Route exact path='/job' component={Job}/>
//         <Route exact path='/job/new' component={AddJob}/>
//         <Route exact path='/job/edit/:id' component={EditJob}/>
//         <Route exact path='/location' component={Location}/>
//         <Route exact path='/location/new' component={AddLocation}/>
//         <Route exact path='/location/edit/:id' component={EditLocation}/>
//         <Route exact path='/employee' component={Employee}/>
//         <Route exact path='/employee/new' component={AddEmployee}/>
        
//     </Switch>
//   )
// }
