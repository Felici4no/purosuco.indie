'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center bg-[url('/paper-texture.png')]">
            <div className="mb-8 hover-wiggle">
                <Image
                    src="/logo-hd.png"
                    alt="Puro Suco Indie Logo"
                    width={150}
                    height={150}
                    className="w-32 md:w-40 h-auto"
                    priority
                />
            </div>

            <h1 className="text-6xl md:text-8xl font-black mb-2 tracking-tighter">404</h1>

            <div className="relative inline-block mb-8 transform -rotate-2">
                <span className="bg-black text-white px-4 py-2 font-hand text-xl md:text-2xl shadow-sketch">
                    Esse suco ainda não existe 🧃
                </span>
            </div>

            <p className="font-hand text-lg md:text-xl text-gray-600 mb-10 max-w-md">
                Parece que você espremeu demais e acabou caindo no vazio.
            </p>

            <Link href="/">
                <Button variant="primary">
                    Voltar para o início
                </Button>
            </Link>
        </div>
    );
}
