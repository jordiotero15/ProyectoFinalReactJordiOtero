import React from 'react'


function ItemListContainer(greeting) {
    return (
        <main className="grow mi-main">
            <h2 className="mb-4 text-3xl font-bold px-20">{greeting.title}</h2>
            {greeting.children}
        </main>
    )
}

export default ItemListContainer