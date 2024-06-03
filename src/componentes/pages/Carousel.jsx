import React, { useEffect, useState } from 'react';
import Registro from "./Registro.jsx"



function Carousel({ onHideCarousel, children: slides, autoSlide = false, autoSlideInterval = 4000 }) {

  const [curr, setCurr] = useState(0);

  const prev = () => setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))

  const next = () => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))

  useEffect(() => {
    if (!autoSlide) return
    const slideInterval = setInterval(next, autoSlideInterval)
    return () => clearInterval(slideInterval)
  }, [])

  return (
    <>
      <div className='overflow-hidden relative rounded'>
        <div className=' transition-transform ease-out duration-500 relative bg-black opacity-10 hidden sm:flex' style={{ transform: `translateX(-${curr * 100}%)` }}>
          {slides}
        </div>
        {/* <div className='absolute inset-0 flex items-end justify-center'>
          <button onClick={onHideCarousel} class="text-white w-1/5 h-8 rounded-md transition ease-in-out delay-150 bg-indigo-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-700 duration-300">
            Ingresar
          </button>
        </div> */}
      </div>
      <div className='absolute inset-0 flex justify-center items-center w-full'>
        <Registro onHideCarousel={onHideCarousel} />
      </div>
    </>
  );
}

export default Carousel;
