'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export function LoadingScreen() {
    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Prevent scrolling while loading
        document.body.style.overflow = 'hidden';

        // Simulate loading progress
        const interval = setInterval(() => {
            setProgress((prev) => {
                const next = prev + Math.random() * 10;
                if (next >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return next;
            });
        }, 200);

        // Finish loading after a set time or when progress hits 100
        const timeout = setTimeout(() => {
            setProgress(100);
            setTimeout(() => {
                setIsLoading(false);
                document.body.style.overflow = 'unset';
            }, 500); // Wait a bit at 100% before fading out
        }, 2500); // Total loading time approx 2.5s

        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
            document.body.style.overflow = 'unset';
        };
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                    <div className="flex flex-col items-center space-y-6">
                        {/* Logo */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="relative w-32 h-32 sm:w-48 sm:h-48"
                        >
                            <Image
                                src="/logo-hd.png"
                                alt="Puro Suco Indie Logo"
                                fill
                                style={{ objectFit: 'contain' }}
                                priority
                            />
                        </motion.div>

                        {/* Text */}
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            className="font-hand text-xl sm:text-2xl text-gray-600"
                        >
                            by Puro Suco Indie
                        </motion.p>

                        {/* Loading Bar */}
                        <div className="w-64 h-2 border-2 border-black rounded-full overflow-hidden mt-8 p-[2px]">
                            <motion.div
                                className="h-full bg-black rounded-full"
                                initial={{ width: "0%" }}
                                animate={{ width: `${progress}%` }}
                                transition={{ ease: "linear" }}
                            />
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
