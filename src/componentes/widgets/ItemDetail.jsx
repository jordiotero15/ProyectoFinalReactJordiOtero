import React, { useState, useContext } from 'react';
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { TbArrowBack } from "react-icons/tb";
import { GoShieldCheck } from "react-icons/go";
import { Link } from 'react-router-dom';
import { CartContext } from '../widgets/CartContext';

const lista = [
    { name: "1 unidad", value: 1 },
    { name: "2 unidades", value: 2 },
    { name: "3 unidades", value: 3 },
    { name: "4 unidades", value: 4 },
    { name: "5 unidades", value: 5 },
    { name: "6 unidades", value: 6 }
];

function ItemDetail({ producto }) {
    const { carrito, addToCart } = useContext(CartContext);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedQuantity, setSelectedQuantity] = useState(1);

    const handleAddToCart = () => {
        addToCart(producto, selectedQuantity);
        console.log("Carrito:", carrito);
    };

    const handleSelectQuantity = (cantidad) => {
        setSelectedQuantity(cantidad);
        setIsOpen(false);
    };

    return (
        <>
            <div className='grid grid-cols-3 p-10 mt-10 bg-gray-100 border border-gray-300 rounded w-4/5'>
                <div className='flex justify-center'>
                    <img src={producto.img} alt={producto.alt} className='w-2/3 h-fit' />
                </div>
                <div className='flex flex-col gap-5'>
                    <h3 className='pr-5 font-bold text-3xl'>{producto.name}</h3>
                    <h4 className='pr-5 font-semibold text-3xl'>$ {producto.precio}</h4>
                    <p className='pr-5 text-justify'>{producto.description}</p>
                </div>
                <div className='border border-gray-300 rounded-lg p-5 w-94 '>
                    <div className='flex flex-col gap-3'>
                        <h5 className='font-semibold'>Stock disponible</h5>
                        <div className='relative'>
                            <button onClick={() => setIsOpen((prev) => !prev)} className='flex gap-x-1 transition duration-1000 text-sm'>
                                Cantidad:<span className='font-semibold'>{selectedQuantity} unidad(es)</span>
                                {!isOpen ? (
                                    <RiArrowDropDownLine className='text-2xl text-blue-500 ' />
                                ) : (
                                    <RiArrowDropUpLine className='text-2xl text-blue-500 ' />
                                )}
                                <p className='text-xm text-gray-500'>({producto.stock} disponibles)</p>
                            </button>
                            {isOpen && (
                                <div className='absolute bg-white rounded-md w-3/5'>
                                    {lista.map((item, id) => (
                                        <ul key={id} className='w-full hover:bg-slate-100 cursor-pointer border-l-transparent hover:border-l-blue-600 border-l-4 transition duration-200'>
                                            <li onClick={() => handleSelectQuantity(item.value)} className='p-2 pl-4'>{item.name}</li>
                                        </ul>
                                    ))}
                                </div>
                            )}
                        </div>
                        <div className='flex flex-col gap-1'>
                            <Link onClick={handleAddToCart} className='bg-blue-500 text-white hover:bg-blue-600 text-lg font-bold transition-all duration-500 h-10 pt-1 rounded text-center' to="/cart">Comprar ahora</Link>
                            <button onClick={handleAddToCart} className='text-blue-500 text-lg font-bold h-10 border-2 rounded active:border-blue-500'>Agregar al carrito</button>
                        </div>
                        <div className=''>
                            <div className='flex gap-2 mb-4'>
                                <TbArrowBack className="text-2xl text-gray-500" />
                                <h6 className='text-gray-500 font-light'><span className='text-blue-500 font-semibold cursor-pointer'>Devolución gratis.</span> Tienes 30 días desde que lo recibes.</h6>
                            </div>
                            <div className='flex gap-2'>
                                <GoShieldCheck className="text-3xl text-gray-500" />
                                <h6 className='text-gray-500 font-light'><span className='text-blue-500 font-semibold cursor-pointer'>Compra Protegida.</span> Recibe el producto que esperabas o te devolvemos tu dinero.</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ItemDetail;



