import Image from "next/image"

export function Location() {
    return (
        <div className="py-12">
            <h2 className="text-4xl font-bold text-white text-center mb-8">UBICACIÓN</h2>
            <div className="max-w-4xl mx-auto px-4">
                <div className="md:flex md:items-center md:gap-8">
                    {/* Texto e información */}
                    <div className="text-center md:text-left md:flex-1">
                        <p className="text-white mb-4">La fiesta será en</p>
                        <div className="text-2xl font-bold text-white mb-2">PUNTO ESTELAR CAFÉ</div>
                        <div className="p-6 rounded-xl inline-block mb-4">
                            <Image
                                src="/logocafe.jpg"
                                alt="Punto Estelar Café"
                                width={100}
                                height={60}
                                className="w-auto h-auto"
                            />
                        </div>
                        <p className="text-white mb-2">Por si no lo sabías, es nuestro café.</p>
                        <p className="text-white text-sm">
                            Por el evento, la barra y la cocina no estarán abiertas, pero habrá comida y bebidas incluidas en el cover.
                        </p>
                    </div>

                    {/* Contenedor del mapa */}
                    <div className="mt-6 md:mt-0 md:flex-1 flex justify-center items-center h-full">
                        <div className="w-full max-w-3xl rounded-xl overflow-hidden flex justify-center items-center min-h-[300px] md:min-h-[400px]">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.968045703114!2d-106.07597262577711!3d28.63071978416532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86ea433f6b1fd4ad%3A0x410c53c713f4bb31!2sPunto%20Estelar%20Caf%C3%A9!5e0!3m2!1ses-419!2smx!4v1741032700787!5m2!1ses-419!2smx"
                                className="w-full h-96"
                                style={{ border: 0, display: "block" }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
