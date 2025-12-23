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
