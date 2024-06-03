import React, { useState } from 'react'


function ItemQuantitySelector() {

    const [numero, setNumero] = useState(0)

    const incrementar = () => {
        setNumero(numero + 1)
    }

    const decrementar = () => {
        setNumero(numero - 1)
    }

    return (

        <>
            <div className='flex gap-5 border border-gray-300 px-2 rounded'>
                <button onClick={decrementar} className='text-xl'>-</button>
                <p className='text-xl'>{numero}</p>
                <button onClick={incrementar} className='text-2xl text-blue-600'>+</button>
            </div>
        </>

    )
}

export default ItemQuantitySelector