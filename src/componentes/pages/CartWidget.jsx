import ItemQuantitySelector from "../widgets/ItemQuantitySelector"
import { CartContext } from '../widgets/CartContext';

function CartWidget() {
    const { cart, removeFromCart } = useContext(CartContext);

    return (
        <>
            <div className="flex justify-center gap-10 w-full h-full px-20 py-16">
                <div className="flex px-4 py-6 bg-gray-100 border border-gray-200 h-fit rounded-lg w-2/3">
                    <div className="w-full">
                        <div className="w-full border-b-2 pb-2">
                            <h2 className="text-2xl font-bold uppercase">Suplementos Uruguay</h2>
                        </div>
                        <div className="flex justify-between w-full py-4">
                            <div className="flex gap-5">
                                <div>
                                    <img className="max-w-20" src="../img/prot1.png" alt="" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-2">Nombre del Producto</h3>
                                    <div className="flex gap-3 text-sm">
                                        <p className="text-blue-500 cursor-pointer font-semibold">Eliminar</p>
                                        <p className="text-blue-500 cursor-pointer font-semibold">Guardar</p>
                                        <p className="text-blue-500 cursor-pointer font-semibold">Comprar ahora</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <ItemQuantitySelector onConfirm={onConfirm} />
                            </div>
                            <div>
                                <h4 className="text-2xl">$</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex px-4 py-6 bg-gray-100 border border-gray-200 h-fit w-1/3 rounded-lg">
                    <div className="w-full">
                        <div className="w-full border-b-2 pb-2">
                            <h3 className="text-2xl font-bold">Resumen de Compra</h3>
                        </div>
                        <div className="flex flex-col py-4">
                            <h4 className="flex justify-between">Producto <span>$</span></h4>
                            <h4 className="flex justify-between text-2xl font-bold">Total <span>$</span></h4>
                        </div>
                        <div>
                            <button className='bg-blue-500 text-white hover:bg-blue-600 text-lg font-bold transition-all duration-500 h-10 rounded text-center w-full'>Comprar ahora</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartWidget