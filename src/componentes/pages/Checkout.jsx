import React, { useState, useContext } from 'react';
import CheckoutForm from '../widgets/CheckoutForm';
import CheckoutLoadingToastify from '../widgets/CheckoutLoadingToastify';
import Brief from './Brief';
import { CartContext } from '../widgets/CartContext';

function Checkout() {
  const { carrito, vaciarCarrito } = useContext(CartContext);
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    numeroTarjeta: '',
    codigoSeguridad: '',
    fechaVencimiento: null,
    email: '',
    ciudad: '',
    direccion: ''
  });
  const [purchaseData, setPurchaseData] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleFormSubmit = (data) => {
    setPurchaseData({
      cliente: data,
      carrito: carrito
    });
    setLoading(true); 
    vaciarCarrito(); 
  };

  const handleLoadComplete = () => {
    setLoading(false);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      {loading ? (
        <CheckoutLoadingToastify onLoadComplete={handleLoadComplete} />
      ) : (
        <div>
          {!purchaseData ? (
            <CheckoutForm formData={formData} setFormData={setFormData} onFormSubmit={handleFormSubmit} />
          ) : (
            <Brief purchaseData={purchaseData} />
          )}
        </div>
      )}
    </div>
  );
}

export default Checkout;



