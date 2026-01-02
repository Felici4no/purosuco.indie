import React from 'react';
import { Experiments } from '@/components/sections/Experiments';

export default function ExperimentosPage() {
    return (
        <main className="pt-20 min-h-screen bg-[url('/paper-texture.png')]">
            <div className="max-w-7xl mx-auto px-4 mb-8 text-center">
                <h1 className="text-4xl md:text-6xl font-black uppercase mb-4">Todos os Experimentos</h1>
                <p className="font-hand text-xl">Ferramentas experimentais e essenciais.</p>
            </div>
            <Experiments />
        </main>
    );
}
