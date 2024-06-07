import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const CartMain = () => {
  const { carrito, aumentarCantidad, restarCantidad } = useContext(CartContext);

  return (
    <table>
      <thead>
        <tr>
          <th>Imagen</th>
          <th>Nombre</th>
          <th>Cantidad</th>
          <th>Precio Unitario</th>
          <th>Precio Total</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {carrito.map(producto => (
          <tr key={producto.id}>
            <td><img src={producto.img} alt={producto.nombre} /></td>
            <td>{producto.nombre}</td>
            <td>{producto.cantidad}</td>
            <td>${producto.precio / producto.cantidad}</td>
            <td>${producto.precio}</td>
            <td>
              <button onClick={() => aumentarCantidad(producto.id)}>+</button>
              <button onClick={() => restarCantidad(producto.id)}>-</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CartMain;

