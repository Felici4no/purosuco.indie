import React from 'react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

const PRODUCTS = [
    { id: 1, name: 'T-Shirt "Traço Vivo"', price: 'R$ 89,90', type: 'Camiseta' },
    { id: 2, name: 'Moletom "Puro Suco"', price: 'R$ 189,90', type: 'Casaco' },
    { id: 3, name: 'Boné "Indie"', price: 'R$ 59,90', type: 'Acessório' },
    { id: 4, name: 'Ecobag "Feira"', price: 'R$ 35,00', type: 'Acessório' },
    { id: 5, name: 'Sticker Pack #1', price: 'R$ 15,00', type: 'Adesivos' },
    { id: 6, name: 'Caneca "Café & Code"', price: 'R$ 45,00', type: 'Casa' },
];

export function Shop() {
    return (
        <section id="loja" className="py-20 px-4 bg-black text-white relative">
            <div className="absolute top-0 left-0 w-full h-4 bg-white" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 0)' }}></div>

            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-6xl font-black mb-4">A LOJA</h2>
                    <p className="font-hand text-2xl">Vista a camisa (literalmente).</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {PRODUCTS.map((product) => (
                        <div key={product.id} className="group relative">
                            {/* Card border specifically for dark mode section - inverted colors */}
                            <div className="border-2 border-white p-6 rounded-none relative transition-transform group-hover:-translate-y-2 bg-black">
                                <div className="aspect-square bg-neutral-900 mb-4 flex items-center justify-center border border-dashed border-neutral-700">
                                    <span className="font-hand text-neutral-500">Foto do Produto</span>
                                </div>

                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-xl font-bold">{product.name}</h3>
                                    <span className="font-hand text-lg">{product.price}</span>
                                </div>

                                <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute inset-x-6 bottom-6">
                                    <Button variant="primary" className="w-full bg-white text-black border-white hover:bg-gray-200">
                                        Adicionar
                                    </Button>
                                </div>

                                {/* Default visible info when not hovering */}
                                <div className="group-hover:opacity-0 transition-opacity text-sm text-gray-400">
                                    {product.type}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="font-hand text-gray-400">Envio para todo o Brasil • Feito com ❤️</p>
                </div>
            </div>

            {/* Rough bottom edge */}
            <div className="absolute bottom-0 left-0 w-full h-6 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0% 100%)' }}></div>
        </section>
    );
}
