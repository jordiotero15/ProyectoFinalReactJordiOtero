import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

function ItemDetailContainer() {

  const { id } = useParams();

  const [producto, setProducto] = useState(null);

  useEffect(() => {
    fetch(`/db/data.json?id=${id}`)
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

    <div className='flex items-center flex-col my-20 '>
      {producto && (
        <ItemDetail producto={producto} />
      )}
    </div>
  )
}

export default ItemDetailContainer;