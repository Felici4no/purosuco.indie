import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Mock content database
const DOCS_CONTENT = {
    'manifesto-no-color': {
        title: 'Manifesto No-Color',
        subtitle: 'Por que abandonamos o RGB e abraçamos o #000000',
        content: (
            <>
                <p>O mundo dos jogos é saturado. Cores vibrantes, HDR, Bloom excessivo. Nós escolhemos o caminho inverso. Acreditamos que a restrição criativa é a mãe da invenção.</p>
                <h3>1. A Honestidade da Forma</h3>
                <p>Quando você remove a cor, não pode esconder uma modelagem ruim ou uma animação travada. O preto e branco exige perfeição na silhueta. Se funciona em 1-bit, funciona em qualquer lugar.</p>
                <h3>2. Foco no Gameplay</h3>
                <p>Sem distrações cromáticas, o jogador foca no que importa: a mecânica, o flow e a resposta dos controles. Nossos jogos são "legíveis" instantaneamente.</p>
                <h3>3. Identidade</h3>
                <p>Não somos apenas "mais um jogo indie pixel art". Somos aquele jogo que parece um zine punk xerocado.</p>
            </>
        )
    },
    'code-style-guide': {
        title: 'Code Style Guide',
        subtitle: 'Nossas regras para escrever C# que parece poesia (ou quase)',
        content: (
            <>
                <p>Código é lido muito mais vezes do que é escrito. Por isso, tratamos nosso codebase como literatura.</p>
                <h3>Regra de Ouro: Clareza sobre Inteligência</h3>
                <p>Se você precisa explicar o que uma linha faz, ela provavelmente está complexa demais. Prefira 5 linhas legíveis a 1 linha "esperta" de LINQ.</p>
                <h3>Nomenclatura</h3>
                <p>Variáveis devem dizer O QUE são, não COMO são usadas.</p>
                <div className="bg-blue-900 text-white p-4 font-mono text-sm my-4 border-l-4 border-blue-400">
                    // Ruim <br />
                    int d; // dias<br /><br />
                    // Bom<br />
                    int daysSinceLastCrash;
                </div>
                <h3>Comentários</h3>
                <p>Comente o PORQUÊ, não o O QUE. O código já diz o que está acontecendo.</p>
            </>
        )
    },
    'pipeline-de-asset': {
        title: 'Pipeline de Asset',
        subtitle: 'Do papel para a engine: nosso fluxo de trabalho documentado',
        content: (
            <>
                <p>Nosso estilo visual único vem de um processo híbrido analógico-digital.</p>
                <h3>Fase 1: O Papel</h3>
                <p>Tudo começa no caderno. Usamos canetas nanquim 0.1, 0.3 e 0.5. O erro faz parte. Se borrou, integra ao design.</p>
                <h3>Fase 2: Digitalização</h3>
                <p>Scanneamos em 600dpi. Alto contraste. Nada de escala de cinza suave. É preto ou branco (Threshold).</p>
                <h3>Fase 3: Limpeza e Rigging</h3>
                <p>No Photoshop, removemos sujeiras indesejadas (mantendo as desejadas). Recortamos as partes móveis. No Unity, usamos nosso script de rigging 2D para dar vida aos recortes.</p>
            </>
        )
    }
};

type Props = {
    params: Promise<{ slug: string }>
}

export default async function DocPage({ params }: Props) {
    const { slug } = await params;
    const doc = DOCS_CONTENT[slug as keyof typeof DOCS_CONTENT];

    if (!doc) {
        notFound();
    }

    return (
        <main className="min-h-screen py-24 px-4 bg-[#f0f0f0] font-mono text-sm relative overflow-hidden">
            {/* Blueprint Grid Background */}
            <div className="absolute inset-0 pointer-events-none opacity-20" style={{
                backgroundImage: 'linear-gradient(#00f 1px, transparent 1px), linear-gradient(90deg, #00f 1px, transparent 1px)',
                backgroundSize: '20px 20px'
            }}></div>

            <article className="max-w-3xl mx-auto bg-white border-2 border-blue-900 shadow-[8px_8px_0px_0px_#1e3a8a] relative z-10 p-8 md:p-16">
                <header className="mb-12 border-b-2 border-blue-900 pb-8">
                    <div className="mb-4">
                        <Link href="/para-devs" className="text-blue-600 hover:underline uppercase font-bold">← Voltar para Área do Desenvolvedor</Link>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black text-blue-950 mb-4">{doc.title}</h1>
                    <p className="text-xl text-blue-800 font-bold opacity-80">{doc.subtitle}</p>
                </header>

                <div className="prose prose-blue max-w-none font-mono">
                    {doc.content}
                </div>

                <footer className="mt-16 pt-8 border-t-2 border-dashed border-gray-300 text-gray-400 text-xs flex justify-between">
                    <span>ID: {slug.toUpperCase()}</span>
                    <span>LAST_UPDATE: {new Date().toLocaleDateString()}</span>
                </footer>
            </article>
        </main>
    );
}
