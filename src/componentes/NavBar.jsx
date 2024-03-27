import React from 'react';
import CartWidget from './CartWidget';

const items = [
    {
        name: "Inicio"
    },
    {
        name: "Productos"
    },
    {
        name: "Contacto"
    }
]

const NavBar = () => {
    return (
        <header className="shadow-md w-full fixed top-0 left-0 ">
            <nav className='md:flex items-center justify-between py-4 md-px-10 px-7'>
                <div className='md:flex items-center py-4 md:px-10 px-7'>
                    <img className='font-bold cursor-pointer' src="/icon.png" alt="" />
                    <h1 className='font-bold font-[Poppins] px-20'>Suplementos Uruguay</h1>
                </div>
                <ul className='md:flex md:items-center items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in'>
                    {items.map((link) => (
                        <li className='md:ml-8 text-xl md:my-0 my-7 mx-4'><a href="#" className='text-black hover:text-gray-400 duration-500 '>{link.name}</a></li>
                    ))}
                    <CartWidget />
                </ul>
            </nav>
        </header>
    );
};

export default NavBar;

