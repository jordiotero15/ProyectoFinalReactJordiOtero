import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CheckoutForm from './CheckoutForm';

export default function CheckoutLoadingToastify() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        toast.dismiss();

        const loadingToastId = toast.loading("Cargando...", {
            position: "top-center",
            autoClose: false,
            hideProgressBar: true,
            closeOnClick: false,
            draggable: true
        });

        // Simulate data loading
        const timer = setTimeout(() => {
            setLoading(false);
            toast.update(loadingToastId, {
                type: "success",
                isLoading: false,
                autoClose: 1000
            });
        }, 3000);

        // Clear the timeout if the component unmounts
        return () => {
            clearTimeout(timer);
            toast.dismiss(loadingToastId);
        };
    }, []);

    if (loading) {
        return null;
    }

    return (
        <>
            <CheckoutForm />
        </>
    );
}




