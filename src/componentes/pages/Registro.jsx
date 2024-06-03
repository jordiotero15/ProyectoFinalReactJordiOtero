import React from 'react'
import { Link } from 'react-router-dom'
import { FcGoogle } from "react-icons/fc";

export default function Registro({ onHideCarousel}) {


    return (
        <>
            {/* Inicio de sesion */}
            <div className='text-center'>
                <h1 className='text-white font-bold uppercase italic text-2xl mb-10 sm:text-3xl md:text-4xl xl:text-5xl'>Suplementos Uruguay</h1>
                <div className='flex flex-col items-center  text-white '>
                    <Link className='w-full border-2 rounded border-white flex items-center justify-center p-2 mb-1 ' to={"https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Faccounts.google.com%2Fgsi%2Fselect%3Fclient_id%3D575783686381-0tl98vq12r95o4rcr39foo2qtb9qdgfp.apps.googleusercontent.com%26ux_mode%3Dpopup%26ui_mode%3Dcard%26as%3DUx605J9Fal5UgDwy7x3dUA%26channel_id%3Dd544a0b3b38e9550eff20280c6fc4b4ce2d6314a7eed47c3ad99598d71956403%26origin%3Dhttps%3A%2F%2Ftiendamia.com&faa=1&ifkv=AYZoVhcUEpzfhlSRX2Rj8_m7A38KyBnAqYr5Cd_HHLo5p63-sFr193kiSOS79JnR7GP8RuTFiMnp&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S-385565411%3A1697001458043094&theme=glif"} target='_blank' ><FcGoogle className=' mr-4 text-2xl' />Ingresar con Google</Link>
                    <div className='flex items-center w-full my-5'>
                        <div className='border-b max-h-0 w-full'></div>
                        <div className='font-semibold w-20'>O</div>
                        <div className='border-b max-h-0 w-full'></div>
                    </div>
                    <div id="user__login" className='w-full'>
                        <form action="{search}" className='flex flex-col w-full'>
                            <label htmlFor="email" className=' text-start mb-2'>Correo electrónico</label><input id='email' className='p-2 ps-4 mb-4 rounded bg-zinc-700 text-white focus:outline-none focus:ring focus:ring-violet-500' type="email" placeholder="Ingresa tu correo electrónico" title="E-mail" />
                            <label htmlFor="password" className='text-start mb-2'>Contraseña</label><input id='password' className='p-2 ps-4 bg-zinc-700 rounded focus:outline-none focus:ring focus:ring-violet-500' type="password" placeholder="Ingresa tu contraseña" title="Contraseña" />
                            <p className='mb-4 mt-1 max-w-fit text-start text-indigo-600 font-semibold cursor-pointer '>Olvidé mi contraseña</p>
                            <button id='btn__login' type='submit' class="text-white p-2 my-5 rounded-md transition bg-indigo-700 hover:bg-indigo-600 duration-300">
                                Iniciar sesión
                            </button>
                            <div className='flex items-center w-full my-2'>
                                <div className='border-b max-h-0 w-full'></div>
                                <div className='font-semibold w-20'>O</div>
                                <div className='border-b max-h-0 w-full'></div>
                            </div>
                            <button onClick={onHideCarousel} class="text-white p-2 my-5 rounded-md transition bg-zinc-800 hover:bg-zinc-700 duration-300">
                                Iniciar como invitado
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
