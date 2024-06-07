import React, { createContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const ProductsContext = createContext();

function ProductsProvider( props ) {
    const { category } = useParams();
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        let pedido;

        if (category) {
            pedido = fetch('/db/data.json')
                .then(res => res.json())
                .then(data => {
                    const productosFiltrados = data.filter(producto => producto.category === category);
                    setProductos(productosFiltrados);
                })
                .catch(err => {
                    console.log(err);
                });
        } else {
            pedido = fetch('/db/data.json')
                .then(res => res.json())
                .then(data => {
                    setProductos(data);
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }, [category]);

    return (
        <ProductsContext.Provider value={{ productos }}>
            {props.children}
        </ProductsContext.Provider>
    );
}

export default ProductsProvider;

