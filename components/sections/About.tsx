import React from 'react';
import { Card } from '../ui/Card';

export function About() {
    return (
        <section id="sobre" className="py-24 px-4 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                <div className="order-2 md:order-1 relative">
                    {/* Sketchy photo placeholder */}
                    <div className="aspect-[4/5] bg-neutral-100 border-sketch relative flex items-center justify-center overflow-hidden">
                        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-black to-transparent"></div>
                        <span className="font-hand text-2xl text-gray-400 transform -rotate-12">Foto da Equipe</span>
                    </div>

                    <div className="absolute -bottom-4 right-0 md:-bottom-6 md:-right-6 bg-black text-white p-3 md:p-4 font-hand transform rotate-3 shadow-sketch max-w-[90%] text-center border-2 border-white">
                        "Feito por gente de verdade"
                    </div>
                </div>

                <div className="order-1 md:order-2">
                    <h2 className="text-5xl font-black mb-6">QUEM SOMOS</h2>
                    <div className="space-y-6 text-lg leading-relaxed">
                        <p>
                            <strong>Puro Suco Indie</strong> é um estúdio brasileiro que espreme ideias até virarem duas coisas: <em>jogos jogáveis</em> e <em>roupas usáveis</em>.
                        </p>
                        <p>
                            Somos contra o excesso de polimento. Acreditamos no risco, no traço, no bug bonito. Fazemos jogos com cheiro de canetinha,
                            textura de caderno e gosto de Brasil.
                        </p>
                        <p>
                            Cada jogo nasce como ideia, vira gameplay, e tudo com o mesmo DNA. Não é merchandising. É continuidade.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 bg-white">
                        <div className="p-4 border-l-4 border-black">
                            <h4 className="font-bold mb-1">Gameplay com alma</h4>
                            <p className="text-sm text-gray-600">Toda escolha de design nasce de algo que a gente acredita. Não fazemos feature sem motivo.</p>
                        </div>
                        <div className="p-4 border-l-4 border-black">
                            <h4 className="font-bold mb-1">Moda com história</h4>
                            <p className="text-sm text-gray-600">Cada roupa carrega um pedaço do jogo. Um símbolo. Um universo costurado.</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
