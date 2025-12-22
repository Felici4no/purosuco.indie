'use client';

import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';

const POSTS = [
    { id: 1, title: 'Por que escolhemos não usar cores?', date: '21/12/2025', tags: ['#manifesto', '#design'], content: 'Acreditamos que a ausência de cor obriga a forma a ser honesta. Quando você tira o ruído visual, sobra apenas a estrutura, a ideia e a execução. É um convite para o usuário colorir o mundo com a própria imaginação.' },
    { id: 2, title: 'O processo de rigging 2D', date: '18/12/2025', tags: ['#devlog'], content: 'Criar vida em desenhos estáticos é um desafio de engenharia e arte. Nosso processo envolve quebrar cada personagem em camadas de "papel" e usar deformação de malha para manter a textura do traço mesmo em movimento extremo.' },
    { id: 3, title: 'Moda física x Moda digital', date: '05/12/2025', tags: ['#moda'], content: 'Por que limitar a skin ao jogo? Nossas roupas são pensadas como DLCs para a vida real. O mesmo asset que você usa no jogo é o corte da camiseta que você veste. A barreira entre o pixel e o algodão é puramente imaginária.' },
    { id: 4, title: 'Nosso setup de desenvolvimento', date: '28/11/2025', tags: ['#setup'], content: 'Nada de monitores curvos 8K. Trabalhamos com cadernos, canetas nanquim e scanners antigos. A tecnologia entra apenas para digitalizar o caos criativo. O analógico é nossa engine primária.' },
    { id: 5, title: 'Olá, mundo (de novo)', date: '01/11/2025', tags: ['#geral'], content: 'Hoje reiniciamos o contador. Novo site, nova identidade, velha obsessão por fazer coisas que tenham alma. Bem-vindos ao Puro Suco Indie.' },
];

export function Posts() {
    const [selectedPost, setSelectedPost] = useState<typeof POSTS[0] | null>(null);

    return (
        <section id="posts" className="py-20 px-4 bg-neutral-50 relative overflow-hidden">
            {/* Notebook background pattern matches */}
            <div className="absolute inset-0 pointer-events-none opacity-10" style={{
                backgroundImage: 'repeating-linear-gradient(transparent, transparent 29px, #000 30px)',
                backgroundSize: '100% 30px'
            }}></div>

            <div className="max-w-3xl mx-auto bg-white border-2 border-black p-8 sm:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rotate-1">
                <h2 className="text-4xl font-black mb-8 border-b-4 border-black inline-block pb-2">Caderno de Notas</h2>

                <div className="space-y-6">
                    {POSTS.map((post) => (
                        <article
                            key={post.id}
                            onClick={() => setSelectedPost(post)}
                            className="border-b border-gray-200 pb-4 last:border-0 hover:bg-gray-50 transition-colors p-2 -mx-2 rounded cursor-pointer group"
                        >
                            <div className="flex justify-between items-start">
                                <h3 className="text-xl font-bold font-hand group-hover:text-blue-600 transition-colors decoration-wavy group-hover:underline decoration-2">{post.title}</h3>
                                <span className="text-sm font-hand text-gray-400 whitespace-nowrap ml-4">{post.date}</span>
                            </div>
                            <p className="text-gray-600 mt-2 text-sm line-clamp-2">
                                {post.content}
                            </p>
                            <div className="mt-2 text-xs font-bold text-gray-400 space-x-2">
                                {post.tags.map(tag => <span key={tag}>{tag}</span>)}
                            </div>
                        </article>
                    ))}
                </div>

            </div>

            {/* Modal */}
            {/* Modal */}
            <AnimatePresence>
                {selectedPost && typeof document !== 'undefined' && createPortal(
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedPost(null)}
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, rotate: -2 }}
                            animate={{ scale: 1, opacity: 1, rotate: 0 }}
                            exit={{ scale: 0.9, opacity: 0, rotate: 2 }}
                            className="relative bg-white w-full max-w-2xl border-2 border-black shadow-[12px_12px_0px_0px_#000] p-8 md:p-12 max-h-[90vh] overflow-y-auto z-10"
                        >
                            <button
                                onClick={() => setSelectedPost(null)}
                                className="absolute top-4 right-4 text-2xl font-black hover:scale-110 transition-transform"
                            >
                                X
                            </button>

                            <div className="font-hand text-sm text-gray-500 mb-2">{selectedPost.date}</div>
                            <h2 className="text-3xl md:text-4xl font-black mb-6 leading-tight">{selectedPost.title}</h2>

                            <div className="prose font-hand text-lg leading-relaxed text-gray-800 border-l-4 border-gray-200 pl-4">
                                {selectedPost.content}
                                <p className="mt-4">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                </p>
                            </div>

                            <div className="mt-8 pt-6 border-t border-dashed border-gray-300 flex flex-wrap gap-2">
                                {selectedPost.tags.map(tag => (
                                    <span key={tag} className="bg-black text-white px-3 py-1 text-sm font-bold skew-x-[-10deg]">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>,
                    document.body
                )}
            </AnimatePresence>
        </section>
    );
}
