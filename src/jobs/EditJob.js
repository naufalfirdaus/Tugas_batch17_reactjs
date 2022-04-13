import React, { Fragment, useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import apiJob from '../api/apiJob'

export default function EditJob(props) {
    const [values,setValues] = useState({
        job_id : undefined,
        job_title : '',
        min_salary : '',
        max_salary : '',
    })
    useEffect(()=>{
        apiJob.findOne(props.id)
        .then(data =>{
            setValues({
                ...values,
                job_id : data.job_id,
                job_title : data.job_title,
                min_salary : data.min_salary,
                max_salary : data.max_salary
            })
        })
        .catch(error => console.log(error))
    },[])
    const handleChange = name => event => {
        setValues({...values,[name]: event.target.value})
    }
    const onSubmit = async () =>{
        const payload ={
            job_id : values.job_id,
            job_title : values.job_title,
            min_salary : values.min_salary,
            max_salary : values.max_salary
        }
        await apiJob.update(payload)
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
                                    Edit Job
                                </Dialog.Title>
                                <div className="mt-2">
                                    <form action="#" method='POST'>
                                        <div className="col-span-6 sm:col-span-3">
                                            <input
                                                type="text"
                                                name="job_id"
                                                value={values.job_id}
                                                onChange={handleChange('job_id')}
                                                hidden
                                            />
                                            <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                                Job Title
                                            </label>

                                            <input
                                                type="text"
                                                name="job_title"
                                                value={values.job_title}
                                                onChange={handleChange('job_title')}
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 uppercase rounded-md"
                                            />
                                            <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                                Min Salary
                                            </label>

                                            <input
                                                type="text"
                                                name="min_salary"
                                                value={values.min_salary}
                                                onChange={handleChange('min_salary')}
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 uppercase rounded-md"
                                            />
                                            <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                                Max Salary
                                            </label>

                                            <input
                                                type="text"
                                                name="max_salary"
                                                value={values.max_salary}
                                                onChange={handleChange('max_salary')}
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