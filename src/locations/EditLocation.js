import React, { Fragment, useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import apiLocation from '../api/apiLocation'

export default function EditLocation(props) {
    const [values,setValues] = useState({
        location_id : undefined,
        street_address : '',
        postal_code : '',
        city : '',
        state_province : '',
        country_id : undefined
    })
    useEffect(()=>{
        apiLocation.findOne(props.id)
        .then(data =>{
            setValues({
                ...values,
                location_id : data.location_id,
                street_address : data.street_address,
                postal_code : data.postal_code,
                city : data.city,
                state_province : data.state_province,
                country_id : data.country_id
            })
        })
        .catch(error => console.log(error))
    },[])
    const handleChange = name => event => {
        setValues({...values,[name]: event.target.value})
    }
    const onSubmit = async () =>{
        const payload ={
            location_id : values.location_id,
            street_address : values.street_address,
            postal_code : values.postal_code,
            city : values.city,
            state_province : values.state_province,
            country_id : values.country_id
        }
        await apiLocation.update(payload)
        .then(result => {
            props.closeModal();
            window.alert('Data Succesfully Insert')
            props.onRefresh();
        })
    }
  return (
    <div>
            <Transition appear show={props.isOpen} as={Fragment}>
                <Dialog
                    as="div"
                    static
                    className="fixed inset-0 z-10 overflow-y-auto"
                    onClose={() => null}
                >
                    <div className="min-h-screen px-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span
                            className="inline-block h-screen align-middle"
                            aria-hidden="true"
                        >
                            &#8203;
                        </span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                                <Dialog.Title
                                    as="h3"
                                    className="text-lg font-medium leading-6 text-gray-900"
                                >
                                    Edit Location
                                </Dialog.Title>
                                <div className="mt-2">
                                    <form action="#" method='POST'>
                                        <div className="col-span-6 sm:col-span-3">
                                            <input
                                                type="text"
                                                name="location_id"
                                                value={values.location_id}
                                                onChange={handleChange('location_id')}
                                                hidden
                                            />
                                            <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                                Street Address
                                            </label>

                                            <input
                                                type="text"
                                                name="street_address"
                                                value={values.street_address}
                                                onChange={handleChange('street_address')}
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 uppercase rounded-md"
                                            />
                                            <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                                Postal Code
                                            </label>

                                            <input
                                                type="text"
                                                name="postal_code"
                                                value={values.postal_code}
                                                onChange={handleChange('postal_code')}
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 uppercase rounded-md"
                                            />
                                            <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                                City
                                            </label>

                                            <input
                                                type="text"
                                                name="city"
                                                value={values.city}
                                                onChange={handleChange('city')}
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 uppercase rounded-md"
                                            />
                                            <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                                State Province
                                            </label>

                                            <input
                                                type="text"
                                                name="state_province"
                                                value={values.state_province}
                                                onChange={handleChange('state_province')}
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 uppercase rounded-md"
                                            />
                                            <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                                Country Id
                                            </label>

                                            <input
                                                type="text"
                                                name="country_id"
                                                value={values.country_id}
                                                onChange={handleChange('country_id')}
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 uppercase rounded-md"
                                            />
                                        </div>
                                    </form>
                                </div>

                                <div className="flex flex-row space-x-4 mt-4">
                                    <button
                                        type="button"
                                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                        onClick={onSubmit}
                                    >
                                        Submit
                                    </button>

                                    <button
                                        type="button"
                                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                        onClick={props.closeModal}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </div>
  )
}