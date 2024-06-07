import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { CartContext } from './CartContext';

const CartFooter = () => {
    const { carrito } = useContext(CartContext);

    const generarTotales = () => {
        const costoTotal = carrito.reduce((total, { precio }) => total + precio, 0);
        const cantidadTotal = carrito.reduce((total, { cantidad }) => total + cantidad, 0);
        return { costoTotal, cantidadTotal };
    };

    const { costoTotal, cantidadTotal } = generarTotales();

    const finalizarCompra = () => {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `Se realizó con éxito la compra, con un monto total de: $${costoTotal}.`,
            text: 'Gracias por elegirnos.',
            showConfirmButton: false,
            timer: 3000
        });
    };

    return (
        <div>
            {carrito.length > 0 ? (
                <table>
                    <tbody>
                        <tr>
                            <th>Resumen Final:</th>
                            <td></td>
                            <td>Productos Totales: {cantidadTotal}</td>
                            <td></td>
                            <td>Total a pagar: ${costoTotal}</td>
                            <td>
                                <button onClick={finalizarCompra}>Finalizar compra</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            ) : (
                <h3>No hay productos en el carrito</h3>
            )}
        </div>
    );
};

export default CartFooter;
