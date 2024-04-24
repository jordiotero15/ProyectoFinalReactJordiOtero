import React from 'react'
import { Link } from 'react-router-dom';

function CardProducto({ producto }) {
    const { id, name, category, precio, img, alt } = producto;
    return (
        <div className=" bg-white  border shadow-xl py-10 px-3 text-center font-semibold w-80 group ">
            <div className="overflow-hidden aspect-video">
                <img className=" w-32 h-32 shadow-xl mt-2 mx-auto rounded-md transition-all grouphover:grayscale-0 group-hover:scale-125  duration-700 " src={img} alt={alt} />
            </div>
            <h4 className='text-xl text-gray-800 mb-2'>{name}</h4>
            <h5 className='text-lg text-red-900 '>${precio}</h5>
            <h6 className='text-lg text-gray-700 mb-4 capitalize'>{category}</h6>
            <Link to={`/producto/${id}`} className=' bg-red-500 px-8 py-2 text-gray-100 hover:bg-gray-600 transition-all duration-500 uppercase
            '>Ver Producto</Link>
        </div>
    )
}

export default CardProducto