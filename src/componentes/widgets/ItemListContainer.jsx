import React, { useContext, useEffect, useState } from 'react';
import ItemList from './ItemList';
import { ProductsContext } from './ProductsContext';
import { useParams } from 'react-router-dom';

function ItemListContainer() {
    const { category } = useParams();
    const { productos } = useContext(ProductsContext);
    const [filtrarProductos, setFiltrarProductos] = useState([]);

    useEffect(() => {
        if (category) {
            const productosFiltrados = productos.filter(producto => producto.category === category);
            setFiltrarProductos(productosFiltrados);
        } else {
            setFiltrarProductos(productos);
        }
    }, [category, productos]);

    return (
        <>
            <section className='grid grid-cols-1 gap-4 my-5 px-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-col-4 mt-32'>
                {filtrarProductos.map((producto) => (
                    <ItemList key={producto.id} producto={producto} />
                ))}
            </section>
        </>
    );
}

export default ItemListContainer;
