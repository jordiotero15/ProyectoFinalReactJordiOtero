import React, { useEffect, useState } from 'react'
import { Button } from 'antd';
import { useParams } from 'react-router-dom';




function ItemDetailContainer() {

  const { id } = useParams();

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
          <div className='grid grid-cols-3'>
            <div className='flex justify-center'>
              <img src={producto.img} alt={producto.alt} className='w-2/3 h-fit' />
            </div>
            <div className=''>
              <h3 className='p-5 font-bold text-3xl'>{producto.name}</h3>
              <h4 className='p-5 font-semibold text-3xl'>$ {producto.precio}</h4>
              <p className='p-5 text-justify'>{producto.description}</p>
            </div>
            <div className='border p-5'>
              <div className='flex flex-col gap-1'>
                <h5 className='font-semibold'>Stock disponible</h5>
                <p>Cantidad:</p>
                <button className='bg-blue-500 text-white hover:bg-blue-600 text-lg font-bold transition-all duration-500 h-10 rounded'>Comprar ahora</button>
                <Button className='text-blue-500 text-lg font-bold h-10'>Agregar al carrito</Button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default ItemDetailContainer;