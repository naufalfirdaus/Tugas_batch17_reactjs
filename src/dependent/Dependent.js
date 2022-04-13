import React, { Fragment, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Page from '../components/commons/Page';
import { useNavigate, Link } from "react-router-dom";
import AddDependent from './AddDependent';
import EditDependent from './EditDependent';
import { Dialog, Menu, Transition } from '@headlessui/react'
import { ToastContainer, toast } from 'react-toastify';
import {
    DotsVerticalIcon,
    DuplicateIcon,
    PencilAltIcon,
    TrashIcon,
    UserAddIcon,
} from '@heroicons/react/solid'
import { GetDependentRequest, DelDependentRequest } from '../redux-saga/action/DependentAction';

const columns = [
    {name: 'Dependent Id'},
    {name: 'First Name'},
    {name: 'Last Name'},
    {name: 'Relationship'},
    {name: 'Employee Id'},
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
export default function Dependent() {
    let navigate = useNavigate()
    const dispatch = useDispatch()
    let [isOpen, setIsOpen] = useState(false)
    let [refresh, setRefresh] = useState(false)
    let [isEditOpen, setIsEditOpen] = useState(false)
    const [editPayload, setEditPayload] = useState()

    const {dependent} = useSelector((state) => state.dependentStated)


    useEffect(() =>{
        dispatch(GetDependentRequest())
        setRefresh(false)
    },[refresh])

    const onDelete = async (id) =>{
        dispatch(DelDependentRequest(id))
    }
    const onEdit = async (id) =>{
        setEditPayload(id)
        setIsEditOpen(true)
    }

    return (
        <div>
            <Page title='Dependent' titleButton='Create' onClick={() => setIsOpen(true)}>
                <table className="min-w-full">
                    <thead>
                        <tr className="border-t border-gray-200">
                            {
                                (columns || []).map(col => (
                                    <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        <span className="lg:pl-2">{col.name}</span>
                                    </th>
                                ))
                            }
                            <th className="pr-6 py-3 border-b border-gray-200 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider" />
                        </tr>

                    </thead>
                    <tbody className="bg-white divide-y divide-gray-100">
                        {
                            dependent && dependent.map(depen => (
                                <tr key={depen.country_id}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{depen.dependent_id}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{depen.first_name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{depen.last_name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{depen.relationship}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{depen.employee_id}</td>
                                    <td>
                                        <Menu as="div" className="relative flex justify-end items-center">
                                            {({ open }) => (
                                                <>
                                                    <Menu.Button className="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                                                        <span className="sr-only">Open options</span>
                                                        <DotsVerticalIcon className="w-5 h-5" aria-hidden="true" />
                                                    </Menu.Button>
                                                    <Transition
                                                        show={open}
                                                        as={Fragment}
                                                        enter="transition ease-out duration-100"
                                                        enterFrom="transform opacity-0 scale-95"
                                                        enterTo="transform opacity-100 scale-100"
                                                        leave="transition ease-in duration-75"
                                                        leaveFrom="transform opacity-100 scale-100"
                                                        leaveTo="transform opacity-0 scale-95"
                                                    >
                                                        <Menu.Items
                                                            static
                                                            className="mx-3 origin-top-right absolute right-7 top-0 w-48 mt-1 rounded-md shadow-lg z-10 bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none"
                                                        >
                                                            <div className="py-1">
                                                                <Menu.Item>
                                                                    {({ active }) => (

                                                                        <Link to='#'
                                                                            onClick={() => onEdit(depen.dependent_id)}
                                                                            className={classNames(
                                                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                                'group flex items-center px-4 py-2 text-sm'
                                                                            )}>

                                                                            <PencilAltIcon
                                                                                className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                                                                aria-hidden="true"
                                                                            />
                                                                            Edit
                                                                        </Link>
                                                                    )}
                                                                </Menu.Item>

                                                            </div>
                                                            <div className="py-1">
                                                                <Menu.Item>
                                                                    {({ active }) => (
                                                                        <Link
                                                                            to="#"
                                                                            onClick={() => {
                                                                                if (window.confirm("Delete this record")) {
                                                                                    onDelete(depen.dependent_id)
                                                                                }
                                                                            }}
                                                                            className={classNames(
                                                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                                'group flex items-center px-4 py-2 text-sm'
                                                                            )}
                                                                        >
                                                                            <TrashIcon
                                                                                className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                                                                aria-hidden="true"
                                                                            />
                                                                            Delete
                                                                        </Link>
                                                                    )}
                                                                </Menu.Item>
                                                            </div>
                                                        </Menu.Items>
                                                    </Transition>
                                                </>
                                            )}
                                        </Menu>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </Page>
            <ToastContainer autoClose={2000} />
            {
                isOpen ? <AddDependent
                    isOpen={isOpen}
                    closeModal={() => setIsOpen(false)}
                    onRefresh={() => setRefresh(true)}
                /> : null
            }

            {
                isEditOpen ? <EditDependent
                    isOpen={isEditOpen}
                    closeModal={() => setIsEditOpen(false)}
                    onRefresh={() => setRefresh(true)}
                    id={editPayload}
                /> : null
            }
        </div>
    )
}