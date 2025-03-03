import Image from "next/image";
import CurvedText from "../components/CurvedText";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f55989] p-4">
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
               <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <path id="circlePath" d="M50,85 A35,35 0 1,1 50.1,85" fill="none" />
                </defs>
                <text className="text-[4px] fill-white">
                  <textPath href="#circlePath" startOffset="5%">
                    DJ BEBIDAS | DISCADA | SNAKS | CITY POP | LILA VINYL
                  </textPath>
                </text>
              </svg>
            </div>
          </div>
        </div>

        {/* Mobile version - vertical layout */}
        <div className="md:hidden bg-pink-500 text-white rounded-lg overflow-hidden">
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
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-xs rotate-[30deg] absolute -right-12 top-10 w-32">
                  DJ | BEBIDAS | DISCADA | SNAKS | CITY POP |  LUIS MIGUEL
                </div>
              </div>
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
  );
}
