import { FaCcMastercard } from "react-icons/fa"
import { LiaCcVisa } from "react-icons/lia"
import { SiMercadopago } from "react-icons/si"

function Ayuda() {
    return (
        <main className="mt-28">
            <h1 className="text-5xl font-mono font-bold text-center">Centro de ayuda</h1>
            {/* SECTION - COMO COMPRAR */}
            <section className="flex mt-5 border-t-2 border-t-black md:px-10">
                <div className="absolute w-full h-screen font p-8 bg-gradient-to-r from-gray-500 elementoPos md:w-1/2 md:h-auto">
                    <h2 className="text-3xl uppercase font-semibold text-center">¿Cómo comprar?</h2>
                    <p className="text-justify pt-5 px-3 font-medium">Para comprar en nuestra tienda online solo tienes que navegar por la misma, escoger tus productos y agregarlos al carrito, una vez que ya lo tengas todo, en tu carrito podrás continuar a lo que llamamos "check-out" (la caja del supermercado de siempre). <br /><br /> En el check-out, agregas tus datos personales, datos de envío y forma de pago preferida, y para finalizar tu pedido le das click a confirmar. <br /> <br />Te invitamos a formar parte de la familia Suplementos Uruguay, uniendote con tu usuario y tus datos personales, para juntar puntos y obtener mejores beneficios.</p>
                </div>
                <div className="h-screen md:w-1/2 md:h-auto">
                    <img className="h-screen w-full border-2 md:h-full border-black " src="./img/comoComprar.jpg" alt="" />
                </div>
            </section>
            {/* SECTION - METODOS DE PAGO */}
            <section className="flex md:px-10">
                <div className="order-last absolute w-full h-screen p-8 bg-gradient-to-l from-gray-500 elementoPos md:w-1/2 md:h-auto">
                    <h2 className="text-3xl uppercase font-semibold text-center">Métodos de pago</h2>
                    <p className="text-justify pt-5 px-3 font-medium">Trabajamos con tarjetas de crédito y débito (VISA/MASTERCARD). <br /><br />
                        Con Mercado Pago podes pagar con las principales opciones de pago del mercado, de forma segura y con la garantía de Mercado Pago.</p>
                    <div className="flex mt-5"><FaCcMastercard className="text-4xl mx-2" /><LiaCcVisa className="text-4xl mx-2" /><SiMercadopago className="text-4xl mx-2" /></div>
                </div>
                <div className="flex justify-end h-screen md:w-1/2 md:h-auto">
                    <img className="h-screen w-full border-2 md:h-full border-black" src="./img/pagoTarjeta.jpg" alt="" /></div>
            </section>
            {/* SECTION - METODOS DE ENVIO */}
            <section className="flex md:px-10">
                <div className=" absolute w-full h-screen p-8 bg-gradient-to-r from-gray-500 elementoPos md:w-1/2 md:h-auto">
                    <h2 className="text-3xl uppercase font-semibold text-center pt-2">Métodos de envío</h2>
                    <p className="text-justify pt-5 px-3 font-medium">Para nuestros pedidos online realizamos envíos a todo Montevideo. <br /> <br />Algo muy importante para nosotros es que la entrega de nuestros pedidos online, se hace a través de nuestro propio sistema de distribución, de esta forma aseguramos la calidad, frescura y cuidado que nuestros productos requieren, garantizando al máximo la calidad de los mismos.</p>
                </div>
                <div className="h-screen md:w-1/2 md:h-auto">
                    <img className="h-screen w-full border-2 md:h-full border-black" src="./img/envios.jpg" alt="" /></div>
            </section>
            {/* SECTION - DEVOLUCIONES */}
            <section className="flex md:px-10">
                <div className="order-last absolute w-full h-screen p-8 bg-gradient-to-l from-gray-500 elementoPos md:w-1/2 md:h-auto">
                    <h2 className="text-3xl uppercase font-semibold text-center pt-2">Devoluciones</h2>
                    <p className="text-justify pt-5 px-3 font-medium">Contamos con una política de devoluciones flexible. <br /><br />Si detectas que alguno de nuestros productos no llega en su estado de conservación perfecto o simplemente no esta apto para el consumo, no dudes en ponerte en contacto con nosotros a través de las siguientes vías de comunicación: <br /><br />Teléfono de contacto: +598 9900 0000</p>
                </div>
                <div className="h-screen md:w-1/2 md:h-auto">
                    <img className="h-screen w-full border-2 md:h-full border-black" src="./img/devoluciones.jpg" alt="" /></div>
            </section>

        </main>
    )
}

export default Ayuda