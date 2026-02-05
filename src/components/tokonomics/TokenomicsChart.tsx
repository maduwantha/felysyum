'use client';

import { FadeInUp } from '@/components/animation/FadeInUp';
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
    { name: 'Allocate tokens for participants', value: 42, color: '#A855F7' }, // Purple
    { name: 'Allocate tokens for the public sale', value: 20, color: '#2DD4BF' }, // Teal/Green
    { name: 'Developing Team', value: 6, color: '#F97316' }, // Orange
    { name: 'Charity', value: 10, color: '#0EA5E9' }, // Blue
    { name: 'Promotions and advertising', value: 7, color: '#EAB308' }, // Yellow
    { name: 'Liquidity', value: 5, color: '#EF4444' }, // Red
    { name: 'Stakers bonus and promotional bonus', value: 10, color: '#1E293B' }, // Dark Slate (simulating the black segment)
];

const TokenomicsChart = () => {
    return (
        <section className="py-20 lg:py-32 bg-background-3 dark:bg-background-5">
            <div className="container mx-auto px-4">
                <FadeInUp delay={0.1}>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 text-center">
                        Felysyum (FELY) Tokenomics
                    </h2>
                </FadeInUp>

                <div className="bg-[#0B0F19] border border-white/5 rounded-3xl p-8 md:p-12 shadow-2xl max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Chart Area */}
                        <FadeInUp delay={0.2}>
                            <div className="h-[400px] w-full relative">
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Pie
                                            data={data}
                                            cx="50%"
                                            cy="50%"
                                            innerRadius={100}
                                            outerRadius={180}
                                            paddingAngle={2}
                                            dataKey="value"
                                            stroke="none"
                                        >
                                            {data.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={entry.color} />
                                            ))}
                                        </Pie>
                                        <Tooltip
                                            contentStyle={{
                                                backgroundColor: '#1E293B',
                                                borderColor: 'rgba(255,255,255,0.1)',
                                                borderRadius: '8px',
                                                color: '#fff',
                                            }}
                                            itemStyle={{ color: '#fff' }}
                                        />
                                    </PieChart>
                                </ResponsiveContainer>
                                {/* Center Labels overlay if needed, or just let donut be donut */}
                            </div>
                        </FadeInUp>

                        {/* Legend Area */}
                        <div className="space-y-6">
                            {data.map((item, index) => (
                                <FadeInUp key={index} delay={0.3 + index * 0.05}>
                                    <div className="flex items-center gap-4 group">
                                        <div
                                            className="w-4 h-4 rounded-full shrink-0"
                                            style={{ backgroundColor: item.color }}
                                        />
                                        <div className="flex-1 flex justify-between items-center border-b border-white/5 pb-2 group-hover:border-white/10 transition-colors">
                                            <span className="text-gray-300 text-sm md:text-base font-medium">
                                                {item.name}
                                            </span>
                                            <span className="text-white font-bold text-lg">
                                                {item.value}%
                                            </span>
                                        </div>
                                    </div>
                                </FadeInUp>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TokenomicsChart;
