import React from 'react';
import { Link } from 'react-router-dom';

function Brief({ purchaseData }) {

    const imprimirTicket = () => {
        window.print();
    };
    const { cliente, carrito } = purchaseData;

    const totalCompra = carrito.reduce((total, producto) => total + (producto.precio * producto.cantidad), 0);


    const ocultarNumeros = (numeroTarjeta,) => {
        const longitudTarjeta = numeroTarjeta.length;
        const numerosOcultos = '*'.repeat(longitudTarjeta - 4);
        const ultimosCuatro = numeroTarjeta.slice(-4);
        return numerosOcultos + ultimosCuatro;
    };

    const ocultarFechaVencimiento = (fechaVencimiento) => {
        if (typeof fechaVencimiento === 'string') {
            const [mes, año] = fechaVencimiento.split('/');
            return '**/**';
        } else {
            return '**/**';
        }
    };

    const generarNumeroAleatorio = () => {
        const numero = Math.floor(1000000000 + Math.random() * 9000000000);
        return numero.toString().substring(0, 10);
    };

    const obtenerFechaYHoraActual = () => {
        const fecha = new Date();
        const optionsFecha = { year: 'numeric', month: '2-digit', day: '2-digit' };
        const optionsHora = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
        const fechaFormateada = fecha.toLocaleDateString('es-ES', optionsFecha);
        const horaFormateada = fecha.toLocaleTimeString('es-ES', optionsHora);
        return { fecha: fechaFormateada, hora: horaFormateada };
    };

    const { fecha, hora } = obtenerFechaYHoraActual();
    return (
        <div className=''>
            <div className='flex flex-col p-6 mt-28 bg-gray-100 border border-gray-200 rounded-lg'>
                <div className='flex items-center mb-4'>
                    <img className='max-w-12 max-h-12' src="./img/prot1.png" alt="Suplementos Uruguay" />
                    <h1 className='text-2xl uppercase font-bold h-fit'>Suplementos Uruguay</h1>
                </div>
                <h2 className='font-bold text-xl mb-2'>Resumen de compra</h2>
                <div className='mb-2'>
                    <p>Factura...: {generarNumeroAleatorio()}</p>
                    <p>Fecha...: {fecha}</p>
                    <p>Hora: {hora}</p>
                </div>
                <h2 className='font-semibold'>Productos:</h2>
                {carrito.length > 0 ? (
                    carrito.map(producto => (
                        <div className='' key={producto.id}>
                            <h3 className=''>-{producto.name}</h3>
                            <p>Cantidad: {producto.cantidad}</p>
                            <p>Precio:  $ {producto.precio * producto.cantidad}</p>
                        </div>
                    ))
                ) : (
                    <p>No hay productos en el carrito.</p>
                )}
                <div className='my-2'>
                    <h4>Importe total: $ {totalCompra}</h4>
                </div>
                <h2 className='font-semibold'>Datos del cliente</h2>
                <p>Nombre: {cliente.nombre}</p>
                <p>Apellido: {cliente.apellido}</p>
                <p>Email: {cliente.email}</p>
                <p>Ciudad: {cliente.ciudad}</p>
                <p>Dirección: {cliente.direccion}</p>
                <div className='flex gap-5'>
                    <p>Tarjeta: {ocultarNumeros(cliente.numeroTarjeta)}</p>
                    <p>Vto: {ocultarFechaVencimiento(cliente.fechaVencimiento)}</p>
                </div>
                <p className='uppercase'>VISA debito/credito</p>
            </div>
            <div className='flex justify-between mt-4 mb-12'>
                <button onClick={imprimirTicket} className='bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600' >Imprimir Ticket</button>
                <Link className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600' to="/inicio" >Volver al Inicio</Link>
            </div>
        </div>
    );
}

export default Brief;
