'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const PROJECTS = [
    { id: 1, title: 'Puro Suco Site', category: 'Web Design', year: '2025', desc: 'O site que você está vendo agora. Feito com amor e Next.js.', status: 'completed' },
    { id: 2, title: 'Game Jam: "Lost Signal"', category: 'Game Dev', year: '2024', desc: 'Um jogo de terror em 48h. Ficou horrível (no bom sentido).', status: 'completed' },
    { id: 3, title: 'Identidade Visual: "Cafébug"', category: 'Branding', year: '2024', desc: 'Logo e identidade para uma cafeteria temática de tecnologia.', status: 'in-progress' },
    { id: 4, title: 'App: "Dolarizando"', category: 'Mobile', year: '2023', desc: 'Conversor de moedas para nômades digitais.', status: 'completed' },
    { id: 5, title: 'Loja Física: Conceito', category: 'Arquitetura', year: '2025', desc: 'Rascunhos para nossa futura sede.', status: 'planning' },
];

type FilterType = 'all' | 'completed' | 'construction';

export default function ProjetosPage() {
    const [filter, setFilter] = useState<FilterType>('all');

    const filteredProjects = PROJECTS.filter(project => {
        if (filter === 'all') return true;
        if (filter === 'completed') return project.status === 'completed';
        if (filter === 'construction') return project.status === 'in-progress' || project.status === 'planning';
        return true;
    });

    return (
        <main className="min-h-screen py-24 px-4 bg-neutral-50 relative overflow-hidden">
            {/* Notebook background pattern */}
            <div className="absolute inset-0 pointer-events-none opacity-10" style={{
                backgroundImage: 'repeating-linear-gradient(transparent, transparent 29px, #000 30px)',
                backgroundSize: '100% 30px'
            }}></div>

            <div className="max-w-4xl mx-auto bg-white border-2 border-black p-8 sm:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] -rotate-1">
                <div className="flex flex-col md:flex-row justify-between items-end mb-8 border-b-4 border-black pb-4 gap-4">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-black">Lista de Projetos</h1>
                        <span className="font-hand text-xl hidden sm:block">Coisas que fizemos (ou faremos)</span>
                    </div>

                    {/* Filter Controls */}
                    <div className="flex gap-2 font-hand text-sm flex-wrap justify-end">
                        <button
                            onClick={() => setFilter('all')}
                            className={`px-3 py-1 border-2 border-black transition-all ${filter === 'all'
                                    ? 'bg-black text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,0.5)]'
                                    : 'bg-white hover:bg-gray-100 hover:-translate-y-0.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
                                }`}
                        >
                            Todos
                        </button>
                        <button
                            onClick={() => setFilter('completed')}
                            className={`px-3 py-1 border-2 border-black transition-all ${filter === 'completed'
                                    ? 'bg-green-500 text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,0.5)]'
                                    : 'bg-white hover:bg-green-50 hover:-translate-y-0.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
                                }`}
                        >
                            Concluídos
                        </button>
                        <button
                            onClick={() => setFilter('construction')}
                            className={`px-3 py-1 border-2 border-black transition-all ${filter === 'construction'
                                    ? 'bg-yellow-400 text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.5)]'
                                    : 'bg-white hover:bg-yellow-50 hover:-translate-y-0.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
                                }`}
                        >
                            Em Construção
                        </button>
                    </div>
                </div>

                <div className="space-y-0 min-h-[300px]">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <motion.article
                                key={project.id}
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.2 }}
                                className="group border-b border-gray-300 py-6 transition-colors px-4 -mx-4 relative overflow-hidden"
                            >
                                <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
                                    <h3 className="text-2xl font-bold font-hand decoration-wavy decoration-2 flex items-center gap-2">
                                        {project.title}
                                        {project.status === 'completed' && (
                                            <span className="inline-block transform -rotate-12 bg-green-500 text-white text-xs px-2 py-0.5 shadow-sm border border-black font-sans font-bold uppercase tracking-wider ml-2">
                                                Concluído
                                            </span>
                                        )}
                                        {(project.status === 'in-progress' || project.status === 'planning') && (
                                            <span className="inline-block transform -rotate-12 bg-yellow-400 text-black text-xs px-2 py-0.5 shadow-sm border border-black font-sans font-bold uppercase tracking-wider ml-2">
                                                Em Construção
                                            </span>
                                        )}
                                    </h3>
                                    <div className="font-hand text-gray-500 text-sm space-x-2 mt-1 md:mt-0">
                                        <span className="bg-black text-white px-2 py-0.5 text-xs rounded-sm">{project.category}</span>
                                        <span>{project.year}</span>
                                    </div>
                                </div>
                                <p className="text-gray-700 font-hand text-lg">{project.desc}</p>
                            </motion.article>
                        ))}
                    </AnimatePresence>

                    {filteredProjects.length === 0 && (
                        <div className="py-12 text-center font-hand text-gray-400 text-xl">
                            Nenhum projeto encontrado nesta categoria...
                        </div>
                    )}
                </div>

                <div className="mt-12 text-center">
                    <Link href="/">
                        <button className="font-hand font-bold text-xl hover:underline decoration-2 underline-offset-4">
                            ← Voltar para a mesa de trabalho
                        </button>
                    </Link>
                </div>
            </div>
        </main>
    );
}
