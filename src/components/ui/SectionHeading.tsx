
import React from 'react';

interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    light?: boolean;
}

const SectionHeading = ({ title, subtitle, light = false }: SectionHeadingProps) => (
    <div className="mb-16 text-center">
        <h2 className={`text-h1 font-serif mb-4 ${light ? 'text-white' : 'text-primary'}`}>
            {title}
        </h2>
        {subtitle && (
            <div className="flex flex-col items-center">
                <p className={`text-body-lg ${light ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
                    {subtitle}
                </p>
                <div className="w-12 h-1 bg-accent mt-6"></div>
            </div>
        )}
    </div>
);

export default SectionHeading;
