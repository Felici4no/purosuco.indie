import React from 'react';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

export function Card({ children, className = '', hoverEffect = false }: CardProps) {
    return (
        <div
            className={`
        bg-white p-6 border-sketch relative
        ${hoverEffect ? 'hover:-translate-y-1 hover:shadow-sketch transition-all duration-300 active:translate-y-0 active:shadow-none' : ''}
        ${className}
      `}
        >
            {/* Optional: Add little corner decorative marks */}
            <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-black opacity-50" />
            <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-black opacity-50" />

            {children}
        </div>
    );
}
