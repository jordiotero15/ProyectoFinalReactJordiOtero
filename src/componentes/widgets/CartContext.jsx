import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = (props) => {
    const [carrito, setCarrito] = useState(JSON.parse(sessionStorage.getItem('carrito')) || []);

    useEffect(() => {
        sessionStorage.setItem('carrito', JSON.stringify(carrito));
    }, [carrito]);

    const aumentarCantidad = (id) => {
        setCarrito(carrito.map(producto =>
            producto.id === id ? { ...producto, cantidad: producto.cantidad + 1, precio: (producto.precio / producto.cantidad) * (producto.cantidad + 1) } : producto
        ));
    };

    const restarCantidad = (id) => {
        const producto = carrito.find(producto => producto.id === id);
        if (producto.cantidad === 1) {
            setCarrito(carrito.filter(producto => producto.id !== id));
        } else {
            setCarrito(carrito.map(producto =>
                producto.id === id ? { ...producto, cantidad: producto.cantidad - 1, precio: (producto.precio / producto.cantidad) * (producto.cantidad - 1) } : producto
            ));
        }
    };

    const comprarProducto = (producto) => {
        const productoCarrito = carrito.find(p => p.id === producto.id);
        if (productoCarrito) {
            setCarrito(carrito.map(p =>
                p.id === producto.id ? { ...p, cantidad: p.cantidad + 1, precio: p.precio + producto.precio } : p
            ));
        } else {
            setCarrito([...carrito, { ...producto, cantidad: 1 }]);
        }
    };

    const valores = {
        carrito,
        aumentarCantidad,
        restarCantidad,
        comprarProducto
    };

    return (
        <CartContext.Provider value={valores}>
            {props.children}
        </CartContext.Provider>
    );
};