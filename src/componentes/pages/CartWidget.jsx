// import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import ItemQuantitySelector from '../widgets/ItemQuantitySelector';
// import { CartContext } from '../widgets/CartContext';

// function CartWidget() {
//     const { carrito, aumentarCantidad, restarCantidad, comprarProducto } = useContext(CartContext);

//     const total = carrito.reduce((acc, producto) => acc + producto.precio * producto.cantidad, 0);

//     return (
//         <>
//             <div className="flex justify-center gap-10 w-full h-full px-20 py-16 mt-10">
//                 <div className="flex flex-col px-4 py-6 bg-gray-100 border border-gray-200 h-fit rounded-lg w-2/3">
//                     <div className="w-full border-b-2 pb-2">
//                         <h2 className="text-2xl font-bold uppercase">Suplementos Uruguay</h2>
//                     </div>
//                     {carrito.length > 0 ? (
//                         carrito.map(producto => (
//                             <div key={producto.id} className="flex justify-between w-full py-4">
//                                 <div className="flex gap-5">
//                                     <div>
//                                         <img className="max-w-20" src={producto.img} alt={producto.name} />
//                                     </div>
//                                     <div>
//                                         <h3 className="font-bold text-lg mb-2">{producto.name}</h3>
//                                         <div className="flex gap-3 text-sm">
//                                             <p className="text-blue-500 cursor-pointer font-semibold" onClick={() => restarCantidad(producto.id)}>Eliminar</p>
//                                             <p className="text-blue-500 cursor-pointer font-semibold hidden" onClick={() => comprarProducto(producto)}>Guardar</p>
//                                             <Link to="/cart" className="text-blue-500 cursor-pointer font-semibold">Comprar ahora</Link>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div>
//                                     <ItemQuantitySelector
//                                         cantidad={producto.cantidad}
//                                         aumentarCantidad={() => aumentarCantidad(producto.id)}
//                                         restarCantidad={() => restarCantidad(producto.id)}
//                                     />
//                                 </div>
//                                 <div>
//                                     <h4 className="text-2xl">${producto.precio * producto.cantidad}</h4>
//                                 </div>
//                             </div>
//                         ))
//                     ) : (
//                         <p className="text-center font-semibold py-6">Tu carrito está vacío</p>
//                     )}
//                 </div>
//                 <div className="flex px-4 py-6 bg-gray-100 border border-gray-200 h-fit w-1/3 rounded-lg">
//                     <div className="w-full">
//                         <div className="w-full border-b-2 pb-2">
//                             <h3 className="text-2xl font-bold">Resumen de Compra</h3>
//                         </div>
//                         <div className="flex flex-col py-4">
//                             <h4 className="flex justify-between text-2xl font-bold">Total <span>${total}</span></h4>
//                         </div>
//                         <div>
//                             <button className='bg-blue-500 text-white hover:bg-blue-600 text-lg font-bold transition-all duration-500 h-10 rounded text-center w-full'>Comprar ahora</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default CartWidget;
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ItemQuantitySelector from '../widgets/ItemQuantitySelector';
import { CartContext } from '../widgets/CartContext';

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
                            <div key={producto.id} className="flex justify-between w-full py-4">
                                <div className="flex gap-5">
                                    <div>
                                        <img className="max-w-20" src={producto.img} alt={producto.name} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-2">{producto.name}</h3>
                                        <div className="flex gap-3 text-sm">
                                            <p className="text-blue-500 cursor-pointer font-semibold" onClick={() => eliminarProducto(producto.id)}>Eliminar</p>
                                            <p className="text-blue-500 cursor-pointer font-semibold hidden" onClick={() => comprarProducto(producto)}>Guardar</p>
                                            <Link to="/cart" className="text-blue-500 cursor-pointer font-semibold">Comprar ahora</Link>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <ItemQuantitySelector
                                        cantidad={producto.cantidad}
                                        setCantidad={(cantidad) => handleSetCantidad(producto.id, cantidad)}
                                        aumentarCantidad={() => aumentarCantidad(producto.id)}
                                        restarCantidad={() => restarCantidad(producto.id)}
                                    />
                                </div>
                                <div>
                                    <h4 className="text-2xl">${producto.precio * producto.cantidad}</h4>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center font-semibold py-6">Tu carrito está vacío</p>
                    )}
                </div>
                <div className="flex px-4 py-6 bg-gray-100 border border-gray-200 h-fit w-1/3 rounded-lg">
                    <div className="w-full">
                        <div className="w-full border-b-2 pb-2">
                            <h3 className="text-2xl font-bold">Resumen de Compra</h3>
                        </div>
                        <div className="flex flex-col py-4">
                            <h4 className="flex justify-between text-2xl font-bold">Total <span>${total}</span></h4>
                        </div>
                        <div className='w-full'>

                            <Link to="/checkout" className='w-full h-full'>
                                <button className='bg-blue-500 text-white hover:bg-blue-600 text-lg font-bold transition-all duration-500 h-10 rounded text-center w-full'>
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
