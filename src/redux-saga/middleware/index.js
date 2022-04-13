import {takeEvery, all} from 'redux-saga/effects'
//IMPORT REGIONS
import { handleAddRegion, handleDelRegion, handleEditRegion, handleGetRegion } from './RegionMiddle'
import * as ActionTypeRegion from '../constants/RegionConstant'
//IMPORT COUNTRY
import * as ActionTypeCountry from '../constants/CountryConstant'
import { handleAddCountry, handleDelCountry, handleEditCountry, handleGetCountry } from './CountryMiddle'
//IMPORT DEPARTMENT
import * as ActionTypeDepartment from '../constants/DepartmentConstant'
import { handleAddDepartment, handleDelDepartment, handleEditDepartment, handleGetDepartment } from './DepartmentMiddle'
//IMPORT DEPENDENT
import * as ActionTypeDependent from '../constants/DependentConstant'
import { handleAddDependent, handleDelDependent, handleEditDependent, handleGetDependent } from './DependentMiddle'
//IMPORT EMPLOYEE
import * as ActionTypeEmployee from '../constants/EmployeeConstant'
import { handleAddEmployee, handleDelEmployee, handleEditEmployee, handleGetEmployee } from './EmployeeMiddle'
//IMPORT JOB
import * as ActionTypeJob from '../constants/JobConstant'
import { handleAddJob, handleDelJob, handleEditJob, handleGetJob } from './JobMiddle'
//IMPORT LOCATION
import * as ActionTypeLocation from '../constants/LocationConstant'
import { handleAddLocation, handleDelLocation, handleEditLocation, handleGetLocation } from './LocationMiddle'

function* watchAll() {
    yield all([
        //TABEL REGIONS
        takeEvery(ActionTypeRegion.GET_REGIONS_REQUEST,handleGetRegion),
        takeEvery(ActionTypeRegion.DEL_REGIONS_REQUEST,handleDelRegion),
        takeEvery(ActionTypeRegion.ADD_REGIONS_REQUEST,handleAddRegion),
        takeEvery(ActionTypeRegion.EDIT_REGIONS_REQUEST,handleEditRegion),

        //TABEL COUNTRY
        takeEvery(ActionTypeCountry.GET_COUNTRY_REQUEST,handleGetCountry),
        takeEvery(ActionTypeCountry.DEL_COUNTRY_REQUEST,handleDelCountry),
        takeEvery(ActionTypeCountry.ADD_COUNTRY_REQUEST,handleAddCountry),
        takeEvery(ActionTypeCountry.EDIT_COUNTRY_REQUEST,handleEditCountry),

        //TABEL DEPARTMENT
        takeEvery(ActionTypeDepartment.GET_DEPARTMENT_REQUEST,handleGetDepartment),
        takeEvery(ActionTypeDepartment.DEL_DEPARTMENT_REQUEST,handleDelDepartment),
        takeEvery(ActionTypeDepartment.ADD_DEPARTMENT_REQUEST,handleAddDepartment),
        takeEvery(ActionTypeDepartment.EDIT_DEPARTMENT_REQUEST,handleEditDepartment),

        //TABEL DEPARTMENT
        takeEvery(ActionTypeDependent.GET_DEPENDENT_REQUEST,handleGetDependent),
        takeEvery(ActionTypeDependent.DEL_DEPENDENT_REQUEST,handleDelDependent),
        takeEvery(ActionTypeDependent.ADD_DEPENDENT_REQUEST,handleAddDependent),
        takeEvery(ActionTypeDependent.EDIT_DEPENDENT_REQUEST,handleEditDependent),

        //TABEL EMPLOYEE
        takeEvery(ActionTypeEmployee.GET_EMPLOYEE_REQUEST,handleGetEmployee),
        takeEvery(ActionTypeEmployee.DEL_EMPLOYEE_REQUEST,handleDelEmployee),
        takeEvery(ActionTypeEmployee.ADD_EMPLOYEE_REQUEST,handleAddEmployee),
        takeEvery(ActionTypeEmployee.EDIT_EMPLOYEE_REQUEST,handleEditEmployee),

        //TABEL JOB
        takeEvery(ActionTypeJob.GET_JOB_REQUEST,handleGetJob),
        takeEvery(ActionTypeJob.DEL_JOB_REQUEST,handleDelJob),
        takeEvery(ActionTypeJob.ADD_JOB_REQUEST,handleAddJob),
        takeEvery(ActionTypeJob.EDIT_JOB_REQUEST,handleEditJob),

        //TABEL LOCATION
        takeEvery(ActionTypeLocation.GET_LOCATION_REQUEST,handleGetLocation),
        takeEvery(ActionTypeLocation.DEL_LOCATION_REQUEST,handleDelLocation),
        takeEvery(ActionTypeLocation.ADD_LOCATION_REQUEST,handleAddLocation),
        takeEvery(ActionTypeLocation.EDIT_LOCATION_REQUEST,handleEditLocation)
    ])
}

export default watchAll