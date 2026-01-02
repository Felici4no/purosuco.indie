import React from 'react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

const EXPERIMENTS = [
    {
        id: 1,
        title: "Ruído Branco",
        tag: "ATIVO",
        desc: "Gerador de ruído visual para concentração.",
        playable: true
    },
    {
        id: 2,
        title: "Pomodoro Analógico",
        tag: "ATIVO",
        desc: "Timer visual minimalista para produtividade.",
        playable: true
    },
    {
        id: 3,
        title: "Gerador de Paletas",
        tag: "EM PRODUÇÃO",
        desc: "Extrai cores de imagens automaticamente.",
        playable: false
    },
    {
        id: 4,
        title: "Caderno de Rascunhos",
        tag: "CONCEPT",
        desc: "Editor de texto efêmero que não salva nada.",
        playable: false
    }
];

export function Experiments() {
    return (
        <section id="experimentos" className="py-12 md:py-20 px-4 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center md:items-end gap-2 md:gap-4 mb-10 md:mb-12 text-center md:text-left">
                <h2 className="text-4xl md:text-5xl font-black uppercase">EXPERIMENTOS</h2>
                <span className="font-hand text-lg md:text-xl pb-2 transform -rotate-6">→ Ferramentas experimentais</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                {EXPERIMENTS.map((experiment) => (
                    <Card key={experiment.id} hoverEffect className="flex flex-col justify-between h-full bg-neutral-50 active:scale-95 transition-transform md:active:scale-100">
                        <div>
                            <div className="flex justify-between items-start mb-4">
                                <div className="bg-black text-white text-xs px-2 py-1 font-bold">{experiment.tag}</div>
                                <div className="font-hand text-2xl">🔧</div>
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold mb-2 leading-tight">{experiment.title}</h3>
                            <p className="font-hand text-base md:text-lg text-gray-800 mb-6">{experiment.desc}</p>
                        </div>

                        <div className="space-y-3 mt-auto">
                            <Button
                                variant={experiment.playable ? "primary" : "ghost"}
                                className="w-full text-sm py-2 sm:py-1 touch-manipulation"
                                disabled={!experiment.playable}
                            >
                                {experiment.playable ? "Experimentar" : "Em Breve"}
                            </Button>
                            <button className="w-full text-sm underline hover:bg-gray-100 py-2 sm:py-1 font-bold touch-manipulation">
                                Ver detalhes
                            </button>
                        </div>
                    </Card>
                ))}
            </div>
        </section>
    );
}
