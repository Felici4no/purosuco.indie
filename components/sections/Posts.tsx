import React from 'react';

const POSTS = [
    { id: 1, title: 'Por que escolhemos não usar cores?', date: '21/12/2025', tags: ['#manifesto', '#design'] },
    { id: 2, title: 'O processo de rigging 2D', date: '18/12/2025', tags: ['#devlog'] },
    { id: 3, title: 'Moda física x Moda digital', date: '05/12/2025', tags: ['#moda'] },
    { id: 4, title: 'Nosso setup de desenvolvimento', date: '28/11/2025', tags: ['#setup'] },
    { id: 5, title: 'Olá, mundo (de novo)', date: '01/11/2025', tags: ['#geral'] },
];

export function Posts() {
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
                        <article key={post.id} className="border-b border-gray-200 pb-4 last:border-0 hover:bg-gray-50 transition-colors p-2 -mx-2 rounded">
                            <div className="flex justify-between items-start">
                                <h3 className="text-xl font-bold font-hand hover:text-blue-600 transition-colors cursor-pointer">{post.title}</h3>
                                <span className="text-sm font-hand text-gray-400 whitespace-nowrap ml-4">{post.date}</span>
                            </div>
                            <p className="text-gray-600 mt-2 text-sm line-clamp-2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <div className="mt-2 text-xs font-bold text-gray-400 space-x-2">
                                {post.tags.map(tag => <span key={tag}>{tag}</span>)}
                            </div>
                        </article>
                    ))}
                </div>

                <div className="mt-8 text-center">
                    <button className="font-hand font-bold text-lg hover:underline">Ler mais páginas...</button>
                </div>
            </div>
        </section>
    );
}
