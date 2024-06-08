import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ItemQuantitySelector from '../widgets/ItemQuantitySelector';
import { CartContext } from '../widgets/CartContext';
import { LiaShoppingBasketSolid } from "react-icons/lia";

function CartWidget() {
    const { carrito, aumentarCantidad, restarCantidad, comprarProducto, eliminarProducto } = useContext(CartContext);

    const total = carrito.reduce((acc, producto) => acc + producto.precio * producto.cantidad, 0);

    return (
        <>
            <div className="flex justify-center gap-10 w-full h-full px-20 py-16 mt-10">
                <div className="flex flex-col px-4 py-6 bg-gray-100 border border-gray-200 h-fit rounded-lg w-2/3">
                    <div className="w-full border-b-2 pb-2">
                        <h2 className="text-2xl font-bold uppercase">Suplementos Uruguay</h2>
                    </div>
                    {carrito.length > 0 ? (
                        carrito.map(producto => (
                            <div key={producto.id} className="flex w-full p-4">
                                <div className="flex w-2/3 gap-5">
                                    <div>
                                        <img className="max-w-20" src={producto.img} alt={producto.name} />
                                    </div>
                                    <div className='w-full'>
                                        <h3 className="font-bold text-lg mb-2">{producto.name}</h3>
                                        <div className="flex gap-3 text-sm">
                                            <p className="text-blue-500 cursor-pointer font-semibold" onClick={() => eliminarProducto(producto.id)}>Eliminar</p>
                                            <p className="text-blue-500 cursor-pointer font-semibold hidden" onClick={() => comprarProducto(producto)}>Guardar</p>
                                            <Link to="/checkout" className="text-blue-500 cursor-pointer font-semibold">Comprar ahora</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className='pr-10'>
                                    <ItemQuantitySelector
                                        cantidad={producto.cantidad}
                                        setCantidad={(cantidad) => handleSetCantidad(producto.id, cantidad)}
                                        aumentarCantidad={() => aumentarCantidad(producto.id)}
                                        restarCantidad={() => restarCantidad(producto.id)}
                                    />
                                </div>
                                <div className='pl-10'>
                                    <h4 className="text-2xl">${producto.precio * producto.cantidad}</h4>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className='flex flex-col items-center'>
                            <LiaShoppingBasketSolid className=' text-9xl' />
                            <p className="text-center font-semibold py-6 text-xl">¡Empieza un carrito de compras!</p>
                            <div className='w-2/5 flex justify-center'>
                                <Link to="/inicio" className='w-full h-full'>
                                    <button className='bg-blue-500 text-white hover:bg-blue-600 text-lg font-bold transition-all duration-500 h-10 rounded text-center w-full'>
                                        Ver productos
                                    </button>
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
                <div className="flex bg-gray-100 border border-gray-200 h-fit w-1/3 rounded-lg">
                    <div className="w-full  px-6 py-6">
                        <div className="w-full border-b-2 pb-2">
                            <h3 className="text-2xl font-bold">Resumen de Compra</h3>
                        </div>
                        {carrito.length > 0 ? (
                            <div className="flex flex-col py-4">
                                <h4 className="flex justify-between text-2xl font-bold">Total <span>${total}</span></h4>
                            </div>
                        ) : (
                            <div className="flex flex-col py-4">
                                <p className="text-lg font-medium text-start">No hay productos en el carrito.</p>
                            </div>
                        )}
                        <div className="w-full">
                            <Link to="/checkout" className='w-full h-full'>
                                <button
                                    className={`bg-blue-500 text-white text-lg font-bold transition-all duration-500 h-10 rounded text-center w-full ${carrito.length === 0 ? 'hidden' : 'hover:bg-blue-600'}`}
                                >
                                    Comprar ahora
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CartWidget;
