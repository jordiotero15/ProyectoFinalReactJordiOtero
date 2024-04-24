import React, { useEffect, useState } from 'react'
import CardProducto from './CardProducto';
import { Button } from 'antd';
import { useParams } from 'react-router-dom';


function ItemDetailContainer() {

  const { id } = useParams();

  //Lo inicializamos null en la espera de que se guarde un valor
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    fetch(`/data.json?id=${id}`)
      .then((res) => {
        return res.json();
      })
      .then((producto) => {
        const productoSolicitado = producto.find((producto) => producto.id === parseInt(id));
        setProducto(productoSolicitado);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [id]);

  return (

    <div className='flex items-center flex-col '>
      {producto && (
        <>
          <CardProducto producto={producto} />
          <div>
            <Button className='bg-blue-500 text-white text-lg font-bold transition-all duration-500 h-full'>Comprar ahora</Button>
            <Button className='text-blue-500 text-lg font-bold h-full'>Agregar al Carrito</Button>
          </div>
        </>
      )}
    </div>
  )
}

export default ItemDetailContainer;