'use client';
import Link from 'next/link';
import { useState } from 'react';

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { label: 'Sobre', href: '#sobre' },
        { label: 'Loja', href: '#loja' },
        { label: 'Jogos', href: '#jogos' },
        { label: 'Posts', href: '#posts' },
        { label: 'Contato', href: '#contato' },
    ];

    return (
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b-2 border-dashed border-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 sm:h-20">

                    {/* Logo */}
                    <Link href="/" className="font-hand text-2xl sm:text-3xl font-bold tracking-tight hover-wiggle">
                        <span className="bg-black text-white px-2 py-1 transform -rotate-2 inline-block">PURO</span>
                        <span className="ml-1 text-black">SUCO</span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex space-x-6 items-center">
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="font-hand text-lg hover:underline decoration-wavy decoration-2 underline-offset-4"
                            >
                                {item.label}
                            </a>
                        ))}
                        <button className="ml-4 font-hand text-xl hover-wiggle" aria-label="Carrinho">
                            🛍️
                        </button>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <div className="w-6 h-0.5 bg-black mb-1.5 transform rotate-1"></div>
                        <div className="w-6 h-0.5 bg-black mb-1.5 transform -rotate-1"></div>
                        <div className="w-6 h-0.5 bg-black transform rotate-1"></div>
                    </button>
                </div>
            </div>

            {/* Mobile Nav Drawer */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white border-b-2 border-black p-4 shadow-xl flex flex-col space-y-4">
                    {navItems.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className="font-hand text-xl block py-2 border-b border-gray-100"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
            )}
        </header>
    );
}
