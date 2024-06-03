// import { BrowserRouter } from "react-router-dom"
// import Footer from "./componentes/Footer.jsx"
// import Main from "./componentes/Main.jsx"
// import NavBar from "./componentes/NavBar.jsx"
// import Ayuda from "./componentes/pages/Ayuda.jsx"
// import Carousel from "./componentes/pages/Carousel.jsx"

// function App() {
//   return (
//     <BrowserRouter>
//       <Carousel />
//       <>
//         <NavBar />
//         <Main />
//         <Footer />
//         <Ayuda />
//       </>

//     </BrowserRouter>
//   )
// }

// export default App


import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Footer from './componentes/Footer.jsx';
import Main from './componentes/Main.jsx';
import NavBar from './componentes/NavBar.jsx';
import Carousel from './componentes/pages/Carousel.jsx';


const slides = [
  "./img/img1.jpeg",
  "./img/img2.jpg",
  "./img/img3.avif",
]


function App() {
  // Estado para controlar la visibilidad del Carousel
  const [showCarousel, setShowCarousel] = useState(true);

  // Función para ocultar el Carousel
  const handleHideCarousel = () => {
    setShowCarousel(false);
  };

  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
