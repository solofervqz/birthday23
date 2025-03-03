import Image from "next/image"
import { WishlistCard } from "../components/wishlist-card"
import { Countdown } from "../components/countdown";

const wishlistItems = [
  {
    title: "Cartitas",
    description: "Me encanta recibir mensajes escritos, son pequeños recuerdos especiales",
    imageUrl: "/placeholder.svg?height=100&width=100",
  },
  {
    title: "Ligas para cabello",
    description: "Se me pierden a cada rato, actualmente solo tengo una",
    imageUrl: "/placeholder.svg?height=100&width=100",
  },
  {
    title: "Gomitas de sandía",
    description: "Un antojito dulce que nunca está de más. Con chile mejor",
    imageUrl: "/placeholder.svg?height=100&width=100",
  },
  {
    title: "Velas aromáticas",
    description: "Olores suaves como lavanda, pastel, rosa, etc.",
    imageUrl: "/placeholder.svg?height=100&width=100",
  },
  {
    title: "Pines",
    description: "Para mi delantal de barista. Temas: café, programación",
    imageUrl: "/placeholder.svg?height=100&width=100",
  },
  {
    title: "Tarjeta de regalo",
    description: "De H&M, Lefties o Stradivarius, para elegir lo que más me guste",
    imageUrl: "/placeholder.svg?height=100&width=100",
  },
  {
    title: "Liga para estirar",
    description: "Para mejorar mi flexibilidad y relajar los músculos",
    imageUrl: "/placeholder.svg?height=100&width=100",
  },
  {
    title: "Organizador de cables",
    description: "Me ayudaría a mantener mis cables en orden y sin enredos",
    imageUrl: "/placeholder.svg?height=100&width=100",
  },
  {
    title: "Conjunto para ejercicio (talla S)",
    description: "Para entrenar con más estilo y comodidad",
    imageUrl: "/placeholder.svg?height=100&width=100",
  },
  {
    title: "Cartucho para Instax",
    description: "Para seguir capturando momentos sin preocuparme por quedarme sin papel",
    imageUrl: "/placeholder.svg?height=100&width=100",
  },

  {
    title: "Fotos de nosotros impresas",
    description: "Porque los recuerdos en físico tienen un valor especial",
    imageUrl: "/placeholder.svg?height=100&width=100",
  },
  {
    title: "Calcetines para ejercicio",
    description: "Nunca sobran, y siempre termino perdiendo algunos",
    imageUrl: "/placeholder.svg?height=100&width=100",
  },
  {
    title: "Cobijas",
    description: "Nunca hay demasiadas cobijas, especialmente en días fríos",
    imageUrl: "/placeholder.svg?height=100&width=100",
  },
  {
    title: "Cuadernos",
    description: "Siempre útiles para organizar ideas, anotar pendientes o simplemente escribir",
    imageUrl: "/placeholder.svg?height=100&width=100",
  },
];

const notWantedItems = [
  {
    title: "Peluches",
    description: "No me gustan mucho, prefiero otro tipo de regalos",
    imageUrl: "/placeholder.svg?height=100&width=100",
  },
  {
    title: "Perfumes",
    description: "No quiero perfumes, ya tengo varios y me duran mucho",
    imageUrl: "/placeholder.svg?height=100&width=100",
  },
  {
    title: "Maquillaje",
    description: "No lo uso tanto, así que prefiero otra cosa",
    imageUrl: "/placeholder.svg?height=100&width=100",
  },
];


export default function VinylInvitation() {
  return (
    <div className="min-h-screen bg-[#f55989] pb-12">
      {/* Mantener el código existente del vinilo aquí */}
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="max-w-4xl w-full">
          {/* Desktop version - horizontal layout */}
          <div className="hidden md:flex bg-[#f55989] text-white rounded-lg overflow-hidden relative">
            <div className="flex-1 p-8">
              <div className="space-y-4">
                <p className="text-md uppercase tracking-wider">Estas cordialmente invitado a la</p>
                <h1 className="text-7xl font-bold leading-tight">
                  FER&apos;S VINYL
                  <br />
                  EVENING
                </h1>
                <div className="mt-8">
                  <h2 className="text-2xl font-bold">9 DE MARZO 2025</h2>
                  <p className="mt-1">EN PUNTO ESTELAR CAFÉ</p>
                  <p className="mt-1">4:00 P.M. A 9:00 P.M.</p>
                </div>
                <div className="mt-6">
                  <span className="bg-white text-pink-500 px-4 py-1 rounded-full text-sm font-medium">
                    COVER: $100 PESOS POR PERSONA
                  </span>
                </div>
              </div>
            </div>
            <div className="relative flex-1 flex items-center justify-center">
              <div className="relative w-96 h-96">
                <Image
                  src="/Vinil.png"
                  alt="Vinyl Record"
                  fill
                  className="object-contain vinyl-spin"
                  priority
                />
                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <path id="circlePath" d="M50,85 A35,35 0 1,1 50.1,85" fill="none" />
                  </defs>
                  <text className="text-[4px] fill-white">
                    <textPath href="#circlePath" startOffset="5%">
                      DJ | BEBIDAS | DISCADA | SNAKS | CITY POP |  LUIS MIGUEL
                    </textPath>
                  </text>
                </svg>
              </div>
            </div>
          </div>

          {/* Mobile version - vertical layout */}
          <div className="md:hidden bg-[#f55989] text-white rounded-lg overflow-hidden">
            <div className="p-6 text-center">
              <p className="text-sm uppercase tracking-wider">Estas cordialmente invitado a la</p>
              <h1 className="text-4xl font-bold mt-2 leading-tight">
                FER&apos;S VINYL
                <br />
                EVENING
              </h1>
            </div>

            <div className="relative w-full flex justify-center py-4">
              <div className="relative w-56 h-56">
                <Image
                  src="/Vinil.png"
                  alt="Vinyl Record"
                  fill
                  className="object-contain vinyl-spin"
                  priority
                />
                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <path id="circlePathMobile" d="M50,85 A35,35 0 1,1 50.1,85" fill="none" />
                  </defs>
                  <text className="text-[4px] fill-white">
                    <textPath href="#circlePathMobile" startOffset="5%">
                      DJ | BEBIDAS | DISCADA | SNAKS | CITY POP |  LUIS MIGUEL
                    </textPath>
                  </text>
                </svg>
              </div>
            </div>

            <div className="p-6 text-center">
              <h2 className="text-2xl font-bold">9 DE MARZO 2025</h2>
              <p className="mt-1">EN PUNTO ESTELAR CAFÉ</p>
              <p className="mt-1">4:00 P.M. A 9:00 P.M.</p>
              <div className="mt-6">
                <span className="bg-white text-pink-500 px-4 py-1 rounded-full text-sm font-medium">
                  COVER: $100 PESOS POR PERSONA
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Countdown Section */}
      <div className="px-4 my-6 ">
        <div className="max-w-4xl mx-auto">
          <Countdown />
        </div>
      </div>

      {/* Wishlist Section */}
      <div className="px-4 mt-2">
        <div className="max-w-4xl mx-auto">
          <div className="text-center text-white mb-8 space-y-2">
            <p className="text-sm px-8">
              Tu presencia es el mejor regalo, pero si quieres traer un detalle, aquí te dejo algunas ideas.
            </p>
            <h2 className="text-4xl font-bold">WISHLIST</h2>
          </div>

          {/* Mobile Wishlist */}
          <div className="md:hidden space-y-4">
            {wishlistItems.map((item, index) => (
              <WishlistCard key={index} {...item} />
            ))}
          </div>
          {/* Tablet Wishlist (2 columnas) */}
          <div className="hidden md:grid lg:hidden grid-cols-2 gap-4">
            {wishlistItems.map((item, index) => (
              <WishlistCard key={index} {...item} />
            ))}
          </div>

          {/* Desktop Wishlist */}
          <div className="hidden md:grid grid-cols-3 gap-4">
            {wishlistItems.map((item, index) => (
              <WishlistCard key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

