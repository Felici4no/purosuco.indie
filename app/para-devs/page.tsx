import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

const TOOLS = [
    { id: 1, name: 'Rigging 2D Script', desc: 'Script Python para Blender que automatiza o rigging de sprites 2D.', version: 'v1.0.2', size: '12KB' },
    { id: 2, name: 'Puro Shader Pack', desc: 'Nossos shaders de ruído e pontilhismo para Unity URP.', version: 'v2.1', size: '4MB' },
    { id: 3, name: 'Texture Brushes', desc: 'Pincéis de Photoshop/Procreate para simular caneta nanquim falhando.', version: 'v1.0', size: '25MB' },
    { id: 4, name: 'Audio Middleware', desc: 'Wrapper simples para FMOD que usamos em todos os projetos.', version: 'v0.9b', size: '150KB' },
];

const DOCS = [
    { id: 1, title: 'Manifesto No-Color', desc: 'Por que abandonamos o RGB e abraçamos o #000000.', slug: 'manifesto-no-color' },
    { id: 2, title: 'Code Style Guide', desc: 'Nossas regras para escrever C# que parece poesia (ou quase).', slug: 'code-style-guide' },
    { id: 3, title: 'Pipeline de Asset', desc: 'Do papel para a engine: nosso fluxo de trabalho documentado.', slug: 'pipeline-de-asset' },
];

export default function ParaDevsPage() {
    return (
        <main className="min-h-screen py-24 px-4 bg-[#f0f0f0] relative overflow-hidden font-mono text-sm">
            {/* Blueprint Grid Background */}
            <div className="absolute inset-0 pointer-events-none opacity-20" style={{
                backgroundImage: 'linear-gradient(#00f 1px, transparent 1px), linear-gradient(90deg, #00f 1px, transparent 1px)',
                backgroundSize: '20px 20px'
            }}></div>

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="mb-12 border-b-4 border-blue-800 pb-4">
                    <h1 className="text-5xl font-black text-blue-900 uppercase tracking-tighter">PARA DEVS</h1>
                    <p className="text-blue-800 mt-2 font-bold opacity-70">Código que usamos. Código que quebramos.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Tools Section */}
                    <div>
                        <h2 className="text-2xl font-black bg-blue-900 text-white inline-block px-4 py-1 mb-6 rotate-1">FERRAMENTAS</h2>
                        <div className="grid gap-6">
                            {TOOLS.map((tool) => (
                                <div key={tool.id} className="bg-white border-2 border-blue-900 p-6 shadow-[4px_4px_0px_0px_#1e3a8a] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="font-bold text-lg text-blue-950">{tool.name}</h3>
                                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded">{tool.version}</span>
                                    </div>
                                    <p className="text-gray-600 mb-4 h-12">{tool.desc}</p>
                                    <div className="flex justify-between items-center text-xs text-gray-400 font-bold">
                                        <span>{tool.size}</span>
                                        <button className="text-blue-600 hover:underline uppercase">↓ Download</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Documentation Section */}
                    <div>
                        <h2 className="text-2xl font-black bg-blue-900 text-white inline-block px-4 py-1 mb-6 -rotate-1">DOCUMENTAÇÃO</h2>
                        <div className="space-y-4">
                            {DOCS.map((doc) => (
                                <Link key={doc.id} href={`/para-devs/${doc.slug}`} className="block group">
                                    <div className="border-l-4 border-gray-300 pl-4 py-2 hover:border-blue-600 transition-colors">
                                        <h3 className="font-bold text-lg group-hover:text-blue-700 transition-colors">📄 {doc.title}</h3>
                                        <p className="text-gray-500">{doc.desc}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        <div className="mt-12 bg-blue-50 border border-blue-200 p-6 text-center">
                            <p className="text-blue-800 mb-4 font-bold">
                                Se usar, cite.
                                <br />
                                Se melhorar, devolva.
                            </p>
                            <Link href="https://github.com/Purosuco-indie" target="_blank">
                                <Button variant="outline" className="border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white">
                                    Acesse o GitHub
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
