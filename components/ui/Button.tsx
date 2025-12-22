import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'outline' | 'ghost';
    children: React.ReactNode;
}

export function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
    const baseStyles = "font-hand px-6 py-2 transition-all duration-300 text-lg sm:text-xl active:scale-95";

    const variants = {
        primary: "bg-black text-white border-sketch-sm hover:bg-neutral-800",
        outline: "bg-transparent text-black border-sketch-sm hover:bg-neutral-100",
        ghost: "bg-transparent text-black hover-wiggle underline decoration-2 decoration-wavy",
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
