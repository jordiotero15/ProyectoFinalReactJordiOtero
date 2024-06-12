import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { RiVisaLine, RiCalendarEventLine } from "react-icons/ri";
import { CiCreditCard2 } from "react-icons/ci";

function CheckoutForm({ formData, setFormData, onFormSubmit }) {
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
        onFormSubmit(formData);
    };

    return (
        <>
            <h1 className='font-bold mt-32 mb-2'>Tarjeta de débito/credito</h1>
            <form onSubmit={handleSubmit} className="w-full max-w-sm mb-16">
                <div>
                    <div className="mb-4 relative">
                        <label htmlFor="numeroTarjeta" className="block text-gray-700"></label>
                        <RiVisaLine className="absolute right-4 top-10 text-blue-500 md:text-4xl md:top-1" />
                        <input placeholder='Número de la tarjeta' type="text" id="numeroTarjeta" name="numeroTarjeta" value={formData.numeroTarjeta} onChange={handleChange} className="w-full px-3 py-2 border border-gray-400 placeholder:text-gray-500 placeholder:font-semibold rounded" />
                    </div>
                </div>
                <div className='flex gap-2'>
                    <div className="mb-4 relative w-full">
                        <label htmlFor="fechaVencimiento" className="block text-gray-700"></label>
                        <RiCalendarEventLine className="absolute z-10 right-4 top-10 text-gray-500 md:text-3xl md:top-2" />
                        <DatePicker
                            selected={formData.fechaVencimiento}
                            onChange={handleDateChange}
                            className="w-full px-3 py-2 border border-gray-400 placeholder:text-gray-500 placeholder:font-semibold rounded"
                            dateFormat="MM/yyyy"
                            showMonthYearPicker
                            placeholderText='MM/ AA'
                        />
                    </div>
                    <div className="mb-4 relative w-full">
                        <label htmlFor="codigoSeguridad" className="block text-gray-700"></label>
                        <CiCreditCard2 className="absolute right-4 top-10 text-gray-700 md:text-3xl md:top-2" />
                        <input placeholder='CVV' type="text" id="codigoSeguridad" name="codigoSeguridad" value={formData.codigoSeguridad} onChange={handleChange} className="w-full px-3 py-2 border border-gray-400 placeholder:text-gray-500 placeholder:font-semibold rounded" />
                    </div>
                </div>
                <div>
                    <div className="mb-4 relative">
                        <label htmlFor="nombre" className="block text-gray-700"></label>
                        <input placeholder='Nombre' type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} className="w-full px-3 py-2 border border-gray-400 placeholder:text-gray-500 placeholder:font-semibold rounded" />
                    </div>
                    <div className="mb-4 relative">
                        <label htmlFor="apellido" className="block text-gray-700"></label>
                        <input placeholder='Apellido' type="text" id="apellido" name="apellido" value={formData.apellido} onChange={handleChange} className="w-full px-3 py-2 border border-gray-400 placeholder:text-gray-500 placeholder:font-semibold rounded" />
                    </div>
                    <div className="mb-4 relative">
                        <label htmlFor="email" className="block text-gray-700"></label>
                        <input placeholder='Email' type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-3 py-2 border border-gray-400 placeholder:text-gray-500 placeholder:font-semibold rounded" />
                    </div>
                    <div className="mb-4 relative">
                        <label htmlFor="ciudad" className="block text-gray-700"></label>
                        <input placeholder='Ciudad' type="text" id="ciudad" name="ciudad" value={formData.ciudad} onChange={handleChange} className="w-full px-3 py-2 border border-gray-400 placeholder:text-gray-500 placeholder:font-semibold rounded" />
                    </div>
                    <div className="mb-4 relative">
                        <label htmlFor="direccion" className="block text-gray-700"></label>
                        <input placeholder='Dirección' type="text" id="direccion" name="direccion" value={formData.direccion} onChange={handleChange} className="w-full px-3 py-2 border border-gray-400 placeholder:text-gray-500 placeholder:font-semibold rounded" />
                    </div>
                </div>
                <button type="submit" className="w-full mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Confirmar compra</button>
            </form>
        </>
    );
}

export default CheckoutForm;



