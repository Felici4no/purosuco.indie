import React from 'react';
import { Button } from '../ui/Button';

export function Contact() {
    return (
        <section id="contato" className="py-20 px-4 bg-black text-white text-center">
            <div className="max-w-2xl mx-auto">
                <h2 className="text-5xl font-black mb-8">FALE COM A GENTE</h2>
                <p className="font-hand text-xl mb-12 text-gray-300">
                    Quer construir algo junto?
                    <br />
                    Achou um bug?
                    <br />
                    Ou só quer falar besteira?
                </p>

                <form className="bg-white p-1 text-black text-left transform rotate-1 max-w-lg mx-auto shadow-[10px_10px_0px_0px_#333]">
                    <div className="border border-black p-6 sm:p-8 space-y-4">
                        <div>
                            <label className="block font-bold text-sm mb-1">SEU NOME</label>
                            <input type="text" className="w-full border-b-2 border-black p-2 focus:outline-none focus:bg-gray-50 font-hand text-lg" placeholder="João da Silva" />
                        </div>

                        <div>
                            <label className="block font-bold text-sm mb-1">SEU EMAIL</label>
                            <input type="email" className="w-full border-b-2 border-black p-2 focus:outline-none focus:bg-gray-50 font-hand text-lg" placeholder="joao@exemplo.com" />
                        </div>

                        <div>
                            <label className="block font-bold text-sm mb-1">MENSAGEM</label>
                            <textarea rows={4} className="w-full border-2 border-black p-2 focus:outline-none focus:bg-gray-50 font-hand text-lg resize-none" placeholder="Escreve aí..."></textarea>
                        </div>

                        <Button className="w-full mt-4 bg-black text-white hover:bg-gray-800">
                            Enviar
                        </Button>
                    </div>
                </form>

                <div className="mt-16 flex justify-center gap-8">
                    <a href="https://www.instagram.com/purosuco.indie/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors font-bold">INSTAGRAM</a>
                    <a href="https://github.com/Purosuco-indie" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors font-bold">GITHUB</a>
                </div>

            </div>
        </section>
    );
}