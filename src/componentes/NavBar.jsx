import React from 'react';
import CartWidget from './CartWidget';
import { NavLink } from 'react-router-dom';
import logoImg from '/img/prot1.png';

const items = [
    {
        name: "inicio",
        id: 1
    },
    {
        name: "proteinas",
        category: "proteinas",
        id: 2
    },
    {
        name: "aminoacidos",
        category: "aminoacidos",
        id: 3
    },
    {
        name: "vitaminas",
        category: "vitaminas",
        id: 4
    },
    {
        name: "contacto",
        id: 5
    }
]

const NavBar = () => {

    return (
        <header className="shadow-md w-full justify-between">
            <nav className='md:flex items-center justify-between py-4 md-px-10 px-7'>
                <div className='md:flex items-center py-4 md:px-10 px-7'>
                    <img src={logoImg} alt="Suplementos Uruguay" className='font-bold cursor-pointer' />
                    <p className='font-bold font-[Poppins] px-20'>Suplementos Uruguay</p>
                </div>
                <ul className='md:flex md:items-center items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in '>
                    {items.map((link) => {
                        return (
                            <li key={link.id} className='h-100 md:px-2 text-xl md:my-0 my-7 hover hover:bg-gray-600 duration-700'>
                                <NavLink to={link.category ? `/category/${link.category}` : `/${link.name}`} className='text-black uppercase hover:text-white hover duration-500 '>{link.name}</NavLink>
                            </li>
                        )
                    }
                    )}
                    <CartWidget />
                </ul>
            </nav>
        </header>
    );
};

export default NavBar;

