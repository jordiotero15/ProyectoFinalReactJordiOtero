import React, { useEffect, useState } from 'react'
import CardProducto from './CardProducto';
import { useParams } from 'react-router-dom';

function ItemListContainer() {

    const [productos, setProductos] = useState([]);

    const params = useParams();
    console.log(params.category);

    useEffect(() => {
        let pedido;

        if (params.category) {
            pedido = fetch(`/data.json?category=${params.category}`);
            console.log(pedido);
        } else {
            pedido = fetch("/data.json");
        }

        pedido.then((res) => {
            return res.json()
        })
            .then((res) => {
                setProductos(res)
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [params.category])


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