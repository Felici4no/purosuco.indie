import React from 'react';
import { Card } from '../ui/Card';

export function About() {
    return (
        <section id="sobre" className="py-24 px-4 max-w-7xl mx-auto">
            <div className="max-w-4xl mx-auto">
                <div>
                    <h2 className="text-5xl font-black mb-6">QUEM SOMOS</h2>
                    <div className="space-y-6 text-lg leading-relaxed">
                        <p>
                            Puro Suco Indie espreme ideias até restar só o essencial.
                            Ferramentas experimentais. Objetos vestíveis.
                            Sem polimento desnecessário.
                        </p>
                        <p>
                            Bug bonito. Traço imperfeito.
                            Processo visível.
                            Nada aqui nasce pronto.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 bg-white">
                        <div className="p-4 border-l-4 border-black">
                            <h4 className="font-bold mb-1">Ferramentas com alma</h4>
                            <p className="text-sm text-gray-600">Design não é decoração. É decisão.</p>
                        </div>
                        <div className="p-4 border-l-4 border-black">
                            <h4 className="font-bold mb-1">Moda com história</h4>
                            <p className="text-sm text-gray-600">Não é merchandising. É continuidade.</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
