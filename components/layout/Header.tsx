'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { label: 'Home', href: '/' },
        { label: 'Sobre', href: '/#sobre' },
        { label: 'Projetos', href: '/projetos' },
        { label: 'Para Devs', href: '/para-devs' },
        { label: 'Loja', href: '/loja' },
        { label: 'Jogos', href: '/jogos' },
        { label: 'Posts', href: '/#posts' },
        { label: 'Contato', href: '/#contato' },
    ];

    return (
        <header className="sticky top-0 z-50 bg-white border-b-2 border-dashed border-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 sm:h-20">

                    {/* Logo */}
                    <Link
                        href="/"
                        className="hover-wiggle inline-block relative z-50"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                        <Image
                            src="/logo-hd.png"
                            alt="Puro Suco Indie Logo"
                            width={64}
                            height={64}
                            className="w-12 h-auto sm:w-20"
                            priority
                        />
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex space-x-6 items-center">
                        {navItems.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className="font-hand text-lg hover:underline decoration-wavy decoration-2 underline-offset-4"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 z-50 relative"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <div className={`w-6 h-0.5 bg-black mb-1.5 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
                        <div className={`w-6 h-0.5 bg-black mb-1.5 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
                        <div className={`w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
                    </button>
                </div>
            </div>

            {/* Mobile Nav Drawer */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="md:hidden overflow-hidden bg-white border-b-2 border-black absolute top-full left-0 w-full shadow-xl"
                    >
                        <div className="flex flex-col p-4 space-y-2">
                            {navItems.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className="font-hand text-2xl block py-3 border-b border-gray-100 last:border-none hover:pl-2 transition-all active:scale-95"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
