import React from 'react';
import { FadeInUp } from '@/components/animation/FadeInUp';

const CoinsIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <circle cx="8" cy="8" r="6" />
        <path d="M18.09 10.37A6 6 0 1 1 10.34 18" />
        <path d="M7 6h1v4" />
        <path d="m16.71 13.88.7.71-2.82 2.82" />
    </svg>
);

const TagIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l5 5a2 2 0 0 0 2.828 0l7.172-7.172a2 2 0 0 0 0-2.828l-5-5z" />
        <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
    </svg>
);

const PieChartIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
        <path d="M22 12A10 10 0 0 0 12 2v10z" />
    </svg>
);

const HashIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <line x1="4" y1="9" x2="20" y2="9" />
        <line x1="4" y1="15" x2="20" y2="15" />
        <line x1="10" y1="3" x2="8" y2="21" />
        <line x1="16" y1="3" x2="14" y2="21" />
    </svg>
);

const ArrowRightIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
    </svg>
);

const TokenHighlights = () => {
    const highlights = [

        {
            label: "TOTAL SUPPLY",
            value: "500 million",
            icon: <PieChartIcon className="w-6 h-6 text-blue-400" />
        },
        {
            label: "Distribution Start Date",
            value: "December 1, 2024",
            icon: <HashIcon className="w-6 h-6 text-blue-400" />
        }
    ];

    return (
        <section className="py-8">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {highlights.map((item, index) => (
                            <FadeInUp key={index} delay={index * 0.1}>
                                <div className="bg-[#131B31] border border-white/10 rounded-2xl p-6 flex items-center justify-between group hover:border-cyan-500/30 transition-all duration-300">
                                    <div className="flex items-center gap-5">
                                        <div className="w-14 h-14 rounded-xl bg-blue-900/30 flex items-center justify-center border border-blue-500/20 group-hover:bg-blue-900/50 transition-colors">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <p className="text-gray-400 text-xs font-semibold tracking-wider mb-1 uppercase">{item.label}</p>
                                            <h4 className="text-white text-2xl font-bold">{item.value}</h4>
                                        </div>
                                    </div>

                                    <div className="w-10 h-10 rounded-full bg-blue-900/30 border border-blue-500/20 flex items-center justify-center group-hover:bg-cyan-500 group-hover:border-cyan-500 transition-all duration-300">
                                        <ArrowRightIcon className="w-5 h-5 text-blue-400 group-hover:text-white transition-colors" />
                                    </div>
                                </div>
                            </FadeInUp>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TokenHighlights;
