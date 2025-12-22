import React from 'react';
import { Games } from '@/components/sections/Games';

export default function JogosPage() {
    return (
        <main className="pt-20 min-h-screen bg-[url('/paper-texture.png')]">
            <div className="max-w-7xl mx-auto px-4 mb-8 text-center">
                <h1 className="text-4xl md:text-6xl font-black uppercase mb-4">Todos os Jogos</h1>
                <p className="font-hand text-xl">Experimente nossos protótipos e demos.</p>
            </div>
            <Games />
        </main>
    );
}
