"use client"

import { useState, useEffect } from "react"

export function Countdown() {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    })

    useEffect(() => {
        const targetDate = new Date("2025-03-09T16:00:00")

        const calculateTimeLeft = () => {
            const now = new Date()
            const difference = targetDate - now

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24))
                const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
                const minutes = Math.floor((difference / 1000 / 60) % 60)
                const seconds = Math.floor((difference / 1000) % 60)

                setTimeLeft({ days, hours, minutes, seconds })
            }
        }

        calculateTimeLeft()
        const timer = setInterval(calculateTimeLeft, 1000)

        return () => clearInterval(timer)
    }, [])

    return (
        <div className="text-center mb-4 py-12 bg-white/10 rounded-xl backdrop-blur-sm">
            <h2 className="text-3xl font-bold text-white mb-6">FALTAN</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto px-4">
                <div className="bg-white/90 p-4 rounded-xl">
                    <div className="text-4xl font-bold text-pink-500">{timeLeft.days}</div>
                    <div className="text-sm text-gray-600">Días</div>
                </div>
                <div className="bg-white/90 p-4 rounded-xl">
                    <div className="text-4xl font-bold text-pink-500">{timeLeft.hours}</div>
                    <div className="text-sm text-gray-600">Horas</div>
                </div>
                <div className="bg-white/90 p-4 rounded-xl">
                    <div className="text-4xl font-bold text-pink-500">{timeLeft.minutes}</div>
                    <div className="text-sm text-gray-600">Minutos</div>
                </div>
                <div className="bg-white/90 p-4 rounded-xl">
                    <div className="text-4xl font-bold text-pink-500">{timeLeft.seconds}</div>
                    <div className="text-sm text-gray-600">Segundos</div>
                </div>
            </div>

            {/* Botón Confirmar Asistencia */}
            <div className="mt-8">
                <a
                    href="https://forms.gle/CEWYaEq98DeNq2LC7" // Reemplaza con el enlace real
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-lg text-lg transition-all duration-200"
                >
                    Confirmar Asistencia
                </a>
            </div>
        </div>
    )
}
