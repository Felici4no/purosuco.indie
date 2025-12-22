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

                    <div className="absolute -bottom-6 -right-6 bg-black text-white p-4 font-hand transform rotate-3 shadow-sketch">
                        "Feito por humanos"
                    </div>
                </div>

                <div className="order-1 md:order-2">
                    <h2 className="text-5xl font-black mb-6">QUEM SOMOS</h2>
                    <div className="space-y-6 text-lg">
                        <p>
                            <strong>Puro Suco Indie</strong> é um estúdio-lab que não sabe decidir se faz jogos ou roupas, então fazemos os dois.
                        </p>
                        <p>
                            Acreditamos que a tecnologia ficou limpa demais. Sentimos falta da textura, do erro, do risco de caneta no papel.
                            Por isso, esprememos nossas ideias até sobrar apenas a essência.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 bg-white">
                        <div className="p-4 border-l-4 border-black">
                            <h4 className="font-bold mb-1">Sem polimento falso</h4>
                            <p className="text-sm text-gray-600">Preferimos um bug engraçado a uma feature chata.</p>
                        </div>
                        <div className="p-4 border-l-4 border-black">
                            <h4 className="font-bold mb-1">Brasil Criativo</h4>
                            <p className="text-sm text-gray-600">Nossa cultura é nossa engine principal.</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
