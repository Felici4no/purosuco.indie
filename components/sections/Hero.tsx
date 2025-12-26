import React from 'react';
import { Button } from '../ui/Button';
import Link from 'next/link';

export function Hero() {
    return (
        <section className="min-h-[85vh] flex flex-col justify-center items-center text-center p-6 relative overflow-hidden bg-[url('/paper-texture.png')]">
            {/* Decorative background scribbles - simulated with CSS */}
            <div className="absolute top-20 right-[10%] w-32 h-32 border-2 border-black rounded-full opacity-20 animate-pulse hidden md:block" style={{ borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' }}></div>
            <div className="absolute bottom-20 left-[10%] w-48 h-48 border-2 border-dashed border-black rounded-full opacity-20 hidden md:block" style={{ borderRadius: '40% 60% 70% 30% / 30% 60% 40% 70%' }}></div>

            <div className="max-w-4xl z-10 px-4">
                <div className="mb-4 inline-block transform -rotate-2">
                    <span className="bg-black text-white px-3 py-1 font-hand text-lg shadow-sketch">games + essência = 🧃</span>
                </div>

                <h1 className="text-5xl sm:text-6xl md:text-8xl font-black mb-6 tracking-tighter leading-[0.9]">
                    ESPREMENDO ATÉ <br />
                    <span className="relative inline-block">
                        O PURO SUCO
                        <svg className="absolute -bottom-2 w-full h-3 text-black" viewBox="0 0 100 10" preserveAspectRatio="none">
                            <path d="M0,5 Q50,10 100,5" stroke="currentColor" strokeWidth="3" fill="none" />
                        </svg>
                    </span>
                </h1>

                <p className="text-lg sm:text-xl md:text-2xl font-hand mb-10 max-w-2xl mx-auto px-2">
                    Menos polpa. Mais essência.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center w-full sm:w-auto">
                    <Link href="/jogos" className="w-full sm:w-auto">
                        <Button variant="primary" className="w-full">
                            Jogar
                        </Button>
                    </Link>
                    <Link href="/loja" className="w-full sm:w-auto">
                        <Button variant="outline" className="w-full">
                            Ver artefatos
                        </Button>
                    </Link>
                </div>
            </div>

            {/* "Wireframe" map element suggestion */}
            <div className="absolute bottom-0 w-full h-24 border-t-2 border-black" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 20%, 80% 0%, 60% 20%, 40% 0%, 20% 20%, 0 0%)' }}></div>
        </section>
    );
}
