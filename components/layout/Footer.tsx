'use client';
import Link from 'next/link';
import Image from 'next/image';

const FOOTER_LINKS = [
    { label: 'Home', href: '/' },
    { label: 'Sobre', href: '/#sobre' },
    { label: 'Loja', href: '/loja' },
    { label: 'Jogos', href: '/jogos' },
    { label: 'Projetos', href: '/projetos' },
    { label: 'Para Devs', href: '/para-devs' },
    { label: 'Posts', href: '/#posts' },
    { label: 'Contato', href: '/#contato' },
];

export function Footer() {
    return (
        <footer className="bg-black text-white border-t-2 border-white relative">
            <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">

                    {/* Brand Section */}
                    <div className="flex flex-col items-center md:items-start space-y-4">
                        <Link href="/" className="inline-block relative hover:scale-105 transition-transform">
                            <Image
                                src="/logo-hd.png"
                                alt="Puro Suco Indie Logo"
                                width={80}
                                height={80}
                                className="filter invert" // Invert colors for dark background if needed, or use white logo
                            />
                        </Link>
                        <p className="font-hand text-gray-400 text-sm max-w-xs">
                            Estúdio criativo independente focado em games, moda e código. Feito no Brasil.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div className="col-span-1 md:col-span-2">
                        <h4 className="font-bold text-lg mb-6 uppercase tracking-wider border-b border-gray-800 inline-block pb-2">Navegação</h4>
                        <nav className="grid grid-cols-2 gap-4">
                            {FOOTER_LINKS.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className="font-hand text-gray-400 hover:text-white hover:translate-x-1 transition-all"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Socials & Contact */}
                    <div>
                        <h4 className="font-bold text-lg mb-6 uppercase tracking-wider border-b border-gray-800 inline-block pb-2">Social / Contato</h4>
                        <div className="flex flex-col space-y-4 items-center md:items-start">
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="font-hand text-gray-400 hover:text-pink-400 transition-colors flex items-center gap-2">
                                <span>📸</span> Instagram
                            </a>
                            <a href="https://github.com/felici4no" target="_blank" rel="noopener noreferrer" className="font-hand text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                                <span>💻</span> GitHub
                            </a>
                            <a href="mailto:contato@purosuco.indie" className="font-hand text-gray-400 hover:text-yellow-400 transition-colors flex items-center gap-2">
                                <span>✉️</span> Email
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-dashed border-gray-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-gray-600 font-hand">
                    <p>© 2025 Puro Suco Indie. Todos os direitos reservados.</p>
                    <p className="text-center md:text-right">
                        Se precisar explicar, não é puro suco.
                    </p>
                </div>
            </div>
        </footer>
    );
}
