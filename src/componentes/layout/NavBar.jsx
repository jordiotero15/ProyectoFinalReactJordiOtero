import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { IoPersonCircleOutline } from 'react-icons/io5';
import { ShoppingCartIcon } from "lucide-react"


const navigation = [
    {
        name: "inicio",
        id: 1
    },
    {
        name: "productos",
        id: 2,
        children: [
            {
                name: "proteinas",
                category: "proteinas",
                id: 2.1
            },
            {
                name: "aminoacidos",
                category: "aminoacidos",
                id: 2.2
            },
            {
                name: "vitaminas",
                category: "vitaminas",
                id: 2.3
            }
        ]
    },
    {
        name: "contacto",
        id: 3
    },
    {
        name: "ayuda",
        id: 4
    }
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function NavBar() {
    return (
        <Disclosure as="nav" className="bg-gray-800">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 md:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
                                <div className="flex flex-shrink-0 items-center">
                                    <img
                                        className="h-8 w-auto"
                                        src="../img/prot1.png"
                                        alt="Suplementos Uruguay"
                                    />
                                </div>
                                <div className="hidden md:ml-6 md:block">
                                    <ul className="flex items-center space-x-4">
                                        {navigation.map((item) =>
                                            item.children ? (
                                                <Menu as="div" key={item.id} className="relative">
                                                    <Menu.Button className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium uppercase h-12 ">
                                                        {item.name}
                                                    </Menu.Button>
                                                    <Transition
                                                        as={Fragment}
                                                        enter="transition ease-out duration-100"
                                                        enterFrom="transform opacity-0 scale-95"
                                                        enterTo="transform opacity-100 scale-100"
                                                        leave="transition ease-in duration-75"
                                                        leaveFrom="transform opacity-100 scale-100"
                                                        leaveTo="transform opacity-0 scale-95"
                                                    >
                                                        <Menu.Items className="absolute z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                            <div className="py-1">
                                                                {item.children.map((child) => (
                                                                    <Menu.Item key={child.id}>
                                                                        {({ active }) => (
                                                                            <NavLink
                                                                                to={`/category/${child.category}`}
                                                                                className={({ isActive }) =>
                                                                                    classNames(
                                                                                        isActive ? 'bg-gray-700 text-white' : 'text-gray-700 uppercase',
                                                                                        'block px-4 py-2 text-sm uppercase'
                                                                                    )
                                                                                }
                                                                            >
                                                                                {child.name}
                                                                            </NavLink>
                                                                        )}
                                                                    </Menu.Item>
                                                                ))}
                                                            </div>
                                                        </Menu.Items>
                                                    </Transition>
                                                </Menu>
                                            ) : (
                                                <li key={item.id} className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium uppercase">
                                                    <NavLink
                                                        to={`/${item.name}`}
                                                        className={({ isActive }) =>
                                                            classNames(
                                                                isActive ? 'bg-gray-900 text-white' : 'text-gray-300',
                                                                'block rounded-md px-3 py-2 text-sm font-medium '
                                                            )
                                                        }
                                                    >
                                                        {item.name}
                                                    </NavLink>
                                                </li>
                                            )
                                        )}
                                        <li className="h-full flex items-center">
                                            <form className="w-full mx-auto">
                                                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Buscar</label>
                                                <div className="relative">
                                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                                        </svg>
                                                    </div>
                                                    <input type="search" id="default-search" className="block w-full sm:w-auto md:w-70 lg:w-72 xl:w-80 h-10 pl-10 pr-3 text-sm text-gray-900 border border-gray-300 rounded-md bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Buscar productos" required />
                                                    <button type="submit" className="absolute right-2.5 bottom-1 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                        <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </form>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 md:static mdinset-auto md:ml-6 md:pr-0 ">
                                <NavLink to="/cart" className="text-white">
                                    <ShoppingCartIcon className="h-8 w-8" />
                                </NavLink>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="md:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    className={classNames(
                                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'block rounded-md px-3 py-2 text-base font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    <NavLink className="uppercase" to={item.category ? `/category/${item.category}` : `/${item.name}`}>{item.name}</NavLink>
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}

