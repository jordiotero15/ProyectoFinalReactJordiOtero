import React, { useEffect, useState } from 'react';
import Inicio from "./Inicio.jsx"



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
      </div>
      <div className='absolute inset-0 flex justify-center items-center w-full'>
        <Inicio onHideCarousel={onHideCarousel} />
      </div>
    </>
  );
}

export default Carousel;
