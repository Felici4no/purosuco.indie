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
        <section id="loja" className="py-12 md:py-20 px-4 bg-black text-white relative">
            <div className="absolute top-0 left-0 w-full h-4 bg-white" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 0)' }}></div>

            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-10 md:mb-16">
                    <h2 className="text-4xl md:text-6xl font-black mb-4">A LOJA</h2>
                    <p className="font-hand text-xl md:text-2xl">Vista a camisa (literalmente).</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 items-center">
                    <div className="relative group">
                        <div className="absolute inset-0 bg-white rotate-1 rounded-sm opacity-10 group-hover:rotate-2 transition-transform"></div>
                        <div className="relative bg-neutral-900 border-2 border-white p-8 aspect-square flex items-center justify-center">
                            <img
                                src="/products/bone-001.png"
                                alt="Boné 001"
                                className="w-full h-full object-contain filter drop-shadow-xl transform group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute top-4 right-4 bg-white text-black px-3 py-1 font-bold text-sm rotate-3">
                                #001
                            </div>
                        </div>
                    </div>

                    <div className="text-left space-y-6">
                        <div className="inline-block border-b-2 border-white pb-1">
                            <span className="font-hand text-xl text-neutral-400">Limited Edition</span>
                        </div>
                        <h3 className="text-5xl md:text-7xl font-black tracking-tighter">
                            BONÉ<br />ORIGINS<br />001
                        </h3>
                        <p className="font-hand text-xl text-neutral-300 max-w-md">
                            O primeiro item físico da Puro Suco. Minimalista, essencial e com nosso clássico logo bordado.
                        </p>
                        <div className="flex items-center gap-6 pt-4">
                            <span className="text-3xl font-bold">R$ 89,90</span>
                            <Button variant="primary" className="bg-white text-black border-white hover:bg-neutral-200 px-8 py-4 text-lg">
                                GARANTIR O MEU
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-dashed border-neutral-700 my-16"></div>

                <div className="text-center mb-10">
                    <h3 className="font-hand text-2xl text-neutral-400">Em Breve</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 opacity-60 pointer-events-none grayscale">
                    {PRODUCTS.filter(p => p.id !== 3).map((product) => (
                        <div key={product.id} className="group relative">
                            {/* Card border specifically for dark mode section - inverted colors */}
                            <div className="border-2 border-white p-6 rounded-none relative transition-transform hover:-translate-y-2 bg-black">
                                <div className="aspect-square bg-neutral-900 mb-4 flex items-center justify-center border border-dashed border-neutral-700">
                                    <span className="font-hand text-neutral-500">Foto do Produto</span>
                                </div>

                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-lg md:text-xl font-bold">{product.name}</h3>
                                    <span className="font-hand text-lg">{product.price}</span>
                                </div>

                                {/* Mobile: Always show button, Desktop: Hover */}
                                <div className="md:opacity-0 md:group-hover:opacity-100 transition-opacity md:absolute md:inset-x-6 md:bottom-6 mt-4 md:mt-0">
                                    <Button variant="primary" className="w-full bg-white text-black border-white hover:bg-gray-200">
                                        Adicionar
                                    </Button>
                                </div>

                                {/* Default visible info when not hovering (Desktop only) */}
                                <div className="hidden md:block group-hover:opacity-0 transition-opacity text-sm text-gray-400">
                                    {product.type}
                                </div>
                                <div className="md:hidden text-sm text-gray-400 mt-2 text-center">
                                    {product.type}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 md:mt-16 text-center">
                    <p className="font-hand text-gray-400">Envio para todo o Brasil • Feito com ❤️</p>
                </div>
            </div>

            {/* Rough bottom edge */}
            <div className="absolute bottom-0 left-0 w-full h-6 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0% 100%)' }}></div>
        </section>
    );
}
