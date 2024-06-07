import React from 'react'


function ItemQuantitySelector({ cantidad, aumentarCantidad, restarCantidad }) {

    return (

        <>
            <div className='flex gap-5 border border-gray-300 px-2 rounded'>
                <button onClick={restarCantidad} className='text-xl'>-</button>
                <p className='text-xl'>{cantidad}</p>
                <button onClick={aumentarCantidad} className='text-2xl text-blue-600'>+</button>
            </div>
        </>

    )
}

export default ItemQuantitySelector