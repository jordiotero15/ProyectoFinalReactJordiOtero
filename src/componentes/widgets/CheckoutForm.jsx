import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function CheckoutForm() {
    const [formData, setFormData] = useState({
        nombre: '',
        numeroTarjeta: '',
        codigoSeguridad: '',
        fechaVencimiento: null // Cambia a null para que DatePicker muestre un input
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };
    const handleDateChange = (date) => {
        setFormData(prevData => ({
            ...prevData,
            fechaVencimiento: date
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes manejar la lógica para enviar los datos del formulario
        console.log(formData);
        // Luego puedes reiniciar el estado del formulario si lo deseas
        setFormData({
            nombre: '',
            numeroTarjeta: '',
            codigoSeguridad: '',
            fechaVencimiento: null

        });
    };

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-sm">
            <div className="mb-4">
                <label htmlFor="nombre" className="block text-gray-700">Nombre y Apellido</label>
                <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} className="w-full px-3 py-2 border rounded" />
            </div>
            <div className="mb-4">
                <label htmlFor="numeroTarjeta" className="block text-gray-700">Número de Tarjeta</label>
                <input type="text" id="numeroTarjeta" name="numeroTarjeta" value={formData.numeroTarjeta} onChange={handleChange} className="w-full px-3 py-2 border rounded" />
            </div>
            <div className="mb-4">
                <label htmlFor="codigoSeguridad" className="block text-gray-700">Código de Seguridad</label>
                <input type="text" id="codigoSeguridad" name="codigoSeguridad" value={formData.codigoSeguridad} onChange={handleChange} className="w-full px-3 py-2 border rounded" />
            </div>
            <div className="mb-4">
                <label htmlFor="fechaVencimiento" className="block text-gray-700">Fecha de Vencimiento</label>
                <DatePicker
                    selected={formData.fechaVencimiento}
                    onChange={handleDateChange}
                    className="w-full px-3 py-2 border rounded"
                    dateFormat="MM/yyyy"
                    showMonthYearPicker
                />            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Confirmar Compra</button>
        </form>
    );
}

export default CheckoutForm;
