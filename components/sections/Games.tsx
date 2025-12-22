import React from 'react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

const GAMES = [
    {
        id: 1,
        title: "Project: Limbo",
        tag: "PROTÓTIPO",
        desc: "Um platformer melancólico sobre perder o ônibus.",
        playable: true
    },
    {
        id: 2,
        title: "Suco Tycoon",
        tag: "DEMO",
        desc: "Gerencie uma barraca de suco num futuro distópico.",
        playable: true
    },
    {
        id: 3,
        title: "Vapor Trail",
        tag: "EM PRODUÇÃO",
        desc: "Corrida infinita em cadernos escolares.",
        playable: false
    },
    {
        id: 4,
        title: "Glitch Garden",
        tag: "CONCEPT",
        desc: "Cuide de plantas que só existem no código.",
        playable: false
    }
];

export function Games() {
    return (
        <section id="jogos" className="py-20 px-4 max-w-7xl mx-auto">
            <div className="flex items-end gap-4 mb-12">
                <h2 className="text-5xl font-black uppercase">Jogos</h2>
                <span className="font-hand text-xl pb-2 transform -rotate-6">→ Nossas ideias jogáveis</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {GAMES.map((game) => (
                    <Card key={game.id} hoverEffect className="flex flex-col justify-between h-full bg-neutral-50">
                        <div>
                            <div className="flex justify-between items-start mb-4">
                                <div className="bg-black text-white text-xs px-2 py-1 font-bold">{game.tag}</div>
                                <div className="font-hand text-2xl">🎮</div>
                            </div>
                            <h3 className="text-2xl font-bold mb-2 leading-tight">{game.title}</h3>
                            <p className="font-hand text-lg text-gray-800 mb-6">{game.desc}</p>
                        </div>

                        <div className="space-y-3 mt-auto">
                            <Button
                                variant={game.playable ? "primary" : "ghost"}
                                className="w-full text-sm py-1"
                                disabled={!game.playable}
                            >
                                {game.playable ? "Jogar Agora" : "Em Breve"}
                            </Button>
                            <button className="w-full text-sm underline hover:bg-gray-100 py-1 font-bold">
                                Ver detalhes
                            </button>
                        </div>
                    </Card>
                ))}
            </div>
        </section>
    );
}
