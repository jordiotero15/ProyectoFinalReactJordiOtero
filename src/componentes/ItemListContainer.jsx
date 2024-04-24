import React, { useEffect, useState } from 'react'
import CardProducto from './CardProducto';
import { useParams } from 'react-router-dom';

function ItemListContainer() {
    const { category } = useParams();
    const [productos, setProductos] = useState([]);
    
    useEffect(() => {
        let pedido;
    
        if (category) {
            pedido = fetch(`/data.json`)
                .then((res) => res.json())
                .then((data) => {
                    const productosFiltrados = data.filter((producto) => producto.category === category);
                    setProductos(productosFiltrados);
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {
            pedido = fetch("/data.json")
                .then((res) => res.json())
                .then((data) => {
                    setProductos(data);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
       
    }, [category]);

    return (
        <>
            <section className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-col-4'>
                {productos.map((producto) => {
                    return (
                        <CardProducto key={producto.id} producto={producto}/>
                    )
                })
                }
            </section>
        </>
    )
}

export default ItemListContainer