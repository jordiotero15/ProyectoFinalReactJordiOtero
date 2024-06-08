import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Footer from './Footer.jsx';
import Main from './Main.jsx';
import NavBar from './NavBar.jsx';
import Carousel from '../widgets/Carousel.jsx';
import { CartProvider } from '../widgets/CartContext.jsx';
import ProductsProvider from '../widgets/ProductsContext.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const slides = [
  "./img/img1.jpeg",
  "./img/img2.jpg",
  "./img/img3.avif",
]


function App() {
  const [showCarousel, setShowCarousel] = useState(true);
  const handleHideCarousel = () => {
    setShowCarousel(false);
  };

  return (
    <BrowserRouter>
      <ProductsProvider>
        <CartProvider>
          {showCarousel ? (
            <div className='flex justify-center items-center h-screen bg-black overflow-hidden'>
              <div className='mx-20'>
                <Carousel autoSlide={true} onHideCarousel={handleHideCarousel} >
                  {slides.map((i) => (
                    <img src={i} alt="Carousel" />
                  ))}
                </Carousel>
              </div>
            </div>
          ) : (
            <>

              <NavBar />
              <Main />
              <Footer />
            </>
          )}
          <ToastContainer />
        </CartProvider>
      </ProductsProvider>
    </BrowserRouter>
  );
}

export default App;
