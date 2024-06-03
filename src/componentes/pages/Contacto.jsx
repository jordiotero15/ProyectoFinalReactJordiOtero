import React from 'react'
import { TfiMapAlt } from "react-icons/tfi";

function Contacto() {
  return (
    <main>
      <h1 className="text-5xl font-mono font-bold text-center">Contacto</h1>
      {/* SECTION - Sobre Nostrosos */}
      <section className="relative mt-5 border-t-2 border-t-black md:px-10">
        <div className="relative w-full md:w-full p-8 bg-gradient-to-r from-gray-600 bg-cover bg-center " style={{ backgroundImage: "url('./img/quienesSomos.jpg')" }}>
          <h2 className="text-3xl uppercase font-semibold text-center bg-white bg-opacity-85 rounded-t">Sobre Nosotros</h2>
          <p className="text-justify pt-5 px-3 font-medium bg-white bg-opacity-85 p-4 rounded-b">
            Somos una empresa familiar que nació del sueño compartido de dos hermanos, quienes desde pequeños anhelaban tener su propio negocio. Al alcanzar la adultez, estos hermanos lograron materializar ese sueño, fundando una tienda de suplementos que se distingue por la calidad superior de sus productos. Nuestra propuesta fundamental radica en ofrecer suplementos importados del exterior, seleccionados cuidadosamente para garantizar los más altos estándares de calidad.
            <br /><br />
            Valoramos profundamente a nuestros colaboradores, quienes son el activo principal de nuestra empresa y desempeñan un papel crucial en la selección, importación y comercialización de nuestros productos. Nos esforzamos por crear un ambiente acogedor para nuestra comunidad, donde cada cliente sea bienvenido y pueda encontrar el suplemento ideal para sus necesidades. En nuestra tienda, no solo encontrarán productos de calidad, sino también un espacio donde recibirán asesoramiento personalizado y profesional.
            <br /><br />
            ¡Los invitamos a descubrir y disfrutar de la excelencia de nuestros suplementos!
          </p>
        </div>
      </section>


      {/* SECTION - Formulario At. al cliente */}
      <section className="flex md:px-10">
        <div className="order-last absolute w-full h-screen p-8 bg-white bg-opacity-40 elementoPos border-t-2 border-black md:w-1/2 md:h-auto md:bg-gradient-to-r md:from-gray-500">
          <h2 className="text-3xl uppercase font-semibold text-center">Atención al Cliente</h2>
          <p className="text-justify pt-5 px-3 font-medium mb-5"> Si tienes alguna consulta o sugerencia, puedes hacer el contacto directo a través de nuestro formulario.</p>
          <form action="form" className='px-3 text-center flex flex-col items-center '>
            <div className='w-2/3 mb-1'>
              <label htmlFor="name"><input className='w-full p-1 rounded border border-black ' type="text" placeholder=' Nombre *' /></label>
            </div>
            <div className='flex w-2/3 justify-between mb-1'>
              <label htmlFor="email"><input className='w-full p-1 rounded border border-black' type="text" placeholder=' Email *' /></label>
              <label htmlFor="phone"><input className='w-full p-1 rounded border border-black' type="tel" placeholder=' Teléfono *' /></label>
            </div>
            <div className='w-2/3 mb-1'>
              <label htmlFor="asunto"><input className='w-full p-1 rounded border border-black' type="text" placeholder='Asunto *' /></label>
            </div>
            <div className='w-2/3 mb-2'>
              <label htmlFor="mensaje"><textarea className='w-full p-1 rounded border border-black resize-none' name="mensaje" id="mensaje" placeholder=' Mensaje *'></textarea></label>
            </div>
            <button type='button' className='bg-slate-800 hover:bg-slate-700 transition text-white w-2/3 h-10'>Enviar</button>
          </form>
        </div>
        <div className="flex justify-end h-screen md:w-1/2 md:h-auto">
          <img className="h-screen w-full border-2 md:h-full border-black" src="./img/comentarios.webp" alt="" />
        </div>
      </section>
      {/* SECTION - Ubicacion */}
      <section className='mt-10'>
        <div className='flex justify-center'>
          <h2 className='text-3xl uppercase font-semibold text-center mr-4'>Ubicación</h2>
          <TfiMapAlt className='text-5xl' />
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d5506.956121543739!2d-56.249412097615455!3d-34.8447753377233!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2suy!4v1696320298078!5m2!1ses-419!2suy"
            width="100%" height="350px" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </section>


    </main>
  )
}

export default Contacto