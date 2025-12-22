import React from 'react';

const PROJECTS = [
    { date: '21 DEZ', title: 'Experimento de engine em JS', type: 'DEVLOG' },
    { date: '15 DEZ', title: 'Identidade de traço definida', type: 'ART' },
    { date: '01 DEZ', title: 'Coleção cápsula do jogo X', type: 'MODA' },
    { date: '20 NOV', title: 'Drop 01 - Esgotado', type: 'MODA' },
    { date: '10 NOV', title: 'Início do projeto', type: 'MILESTONE' },
];

export function Projects() {
    return (
        <section className="py-20 px-4 max-w-4xl mx-auto">
            <h2 className="text-4xl font-black mb-12 text-center text-decoration-underline decoration-wavy">BASTIDORES / LAB</h2>

            <div className="relative pl-8 border-l-2 border-black border-dashed space-y-12">
                {PROJECTS.map((project, index) => (
                    <div key={index} className="relative group cursor-pointer">
                        {/* Timeline dot */}
                        <div className="absolute -left-[39px] top-1 w-5 h-5 bg-white border-2 border-black rounded-full group-hover:bg-black transition-colors"></div>

                        <div className="flex flex-col sm:flex-row sm:items-baseline gap-2">
                            <span className="font-hand text-lg font-bold min-w-[80px] text-gray-500">{project.date}</span>
                            <div>
                                <h3 className="text-2xl font-bold group-hover:underline decoration-2 underline-offset-2">{project.title}</h3>
                                <span className="text-xs bg-black text-white px-2 py-0.5 rounded-sm inline-block mt-1 transform rotate-1">{project.type}</span>
                            </div>
                        </div>

                        {/* Hand drawn arrow for random items */}
                        {index % 2 === 0 && (
                            <div className="hidden sm:block absolute right-0 top-0 opacity-20 transform rotate-12 font-hand">
                                ← check this
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
