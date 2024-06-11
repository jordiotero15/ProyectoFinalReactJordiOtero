import  {  useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function CheckoutLoadingToastify({ onLoadComplete }) {
    useEffect(() => {
        toast.dismiss();

        const loadingToastId = toast.loading("Cargando...", {
            position: "top-center",
            autoClose: false,
            hideProgressBar: true,
            closeOnClick: false,
            draggable: true
        });

        
        const timer = setTimeout(() => {
            toast.update(loadingToastId, {
                type: "success",
                isLoading: false,
                autoClose: 1000
            });
            onLoadComplete();
        }, 3000);

      
        return () => {
            clearTimeout(timer);
            toast.dismiss(loadingToastId);
        };
    }, [onLoadComplete]);

    return null; 
}




