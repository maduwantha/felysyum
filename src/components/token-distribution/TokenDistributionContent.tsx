import RevealAnimation from '@/components/animation/RevealAnimation';
import { FadeInUp } from '@/components/animation/FadeInUp';

const TokenDistributionContent = () => {
    const participants = [
        {
            id: '01',
            title: 'Participants Allocation',
            percentage: '42%',
            details: [
                { label: 'Total Tokens', value: '210 million' },
                { label: 'Release Schedule', value: '3.5 million tokens per month' },
                { label: 'Duration', value: '5 years (60 months)' },
                { label: 'Release Start Date', value: 'January 01 2025' }
            ]
        },
        {
            id: '02',
            title: 'Public Sale',
            percentage: '17%',
            details: [
                { label: 'Total Tokens', value: '85 million' },
                { label: 'Freeze Period', value: '6 months (until June 1, 2025)' },
                { label: 'Release Schedule', value: '1.41 million tokens per month' },
                { label: 'Duration', value: '5 years (60 months)' },
                { label: 'Release Start Date', value: 'June 01 2025' }
            ]
        },
        {
            id: '03',
            title: 'Stakers Bonus and Promotional Bonus',
            percentage: '10%',
            details: [
                { label: 'Total Tokens', value: '50 million' },
                { label: 'Freeze Period', value: '6 months (until June 1, 2025)' },
                { label: 'Release Schedule', value: '0.83 million tokens per month' },
                { label: 'Duration', value: '5 years (60 months)' },
                { label: 'Release Start Date', value: 'June 01 2025' }
            ]
        },
        {
            id: '04',
            title: 'Charity Allocation',
            percentage: '10%',
            details: [
                { label: 'Total Tokens', value: '50 million' },
                { label: 'Freeze Period', value: '4 years (until January 1, 2029)' },
                { label: 'Release Schedule', value: '2.08 million tokens per month' },
                { label: 'Duration', value: '2 years (24 months)' },
                { label: 'Release Start Date', value: 'January 01 2029' }
            ]
        },
        {
            id: '05',
            title: 'Promotions and Advertising',
            percentage: '7%',
            details: [
                { label: 'Total Tokens', value: '35 million' },
                { label: 'Freeze Period', value: '1 months (until January 1, 2025)' },
                { label: 'Release Schedule', value: '0.58 million tokens per month' },
                { label: 'Duration', value: '5 years (60 months)' },
                { label: 'Release Start Date', value: 'January 01 2025' }
            ]
        },
        {
            id: '06',
            title: 'Developing Team',
            percentage: '6%',
            details: [
                { label: 'Total Tokens', value: '30 million' },
                { label: 'Freeze Period', value: '4 years (until January 1, 2028)' },
                { label: 'Release Schedule', value: '0.83 million tokens per month' },
                { label: 'Duration', value: '3 years (36 months)' },
                { label: 'Release Start Date', value: 'January 01 2028' }
            ]
        },
        {
            id: '07',
            title: 'Liquidity',
            percentage: '5%',
            details: [
                { label: 'Total Tokens', value: '25 million' },
                { label: 'Release Schedule', value: '0.41 million tokens per month' },
                { label: 'Duration', value: '5 years (60 months)' },
                { label: 'Release Start Date', value: 'January 01 2025' }
            ]
        },
        {
            id: '08',
            title: 'Private Sale',
            percentage: '3%',
            details: [
                { label: 'Total Tokens', value: '15 million' },
                { label: 'Release Start Date', value: 'December 01 2024' }
            ]
        }
    ];

    return (
        <section className="py-12">
            <div className="container mx-auto px-4">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <FadeInUp delay={0.1}>
                        <span className="badge badge-cyan mb-5">Distribution Plan</span>
                    </FadeInUp>
                    <FadeInUp delay={0.2}>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                            Token Distribution Plan for FELYSYUM (FELY)
                        </h2>
                    </FadeInUp>
                    <FadeInUp delay={0.3}>
                        <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
                            The FELYSYUM (FELY) token distribution plan is designed with several strengths to build trust and confidence among potential investors, community members, and stakeholders. Here's an explanation of its strengths:
                        </p>
                    </FadeInUp>
                </div>

                {/* Distribution Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {participants.map((item, index) => (
                        <FadeInUp key={item.id} delay={index * 0.1}>
                            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors h-full">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="flex items-center gap-4">
                                        <span className="text-4xl font-bold text-white/10">{item.id}</span>
                                        <h3 className="text-xl font-bold text-white">{item.title}</h3>
                                    </div>
                                    <span className="px-4 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-sm font-semibold border border-cyan-500/20">
                                        {item.percentage}
                                    </span>
                                </div>

                                <div className="space-y-4">
                                    {item.details.map((detail, idx) => (
                                        <div key={idx} className="flex justify-between items-center border-b border-white/5 pb-3 last:border-0 last:pb-0">
                                            <span className="text-gray-400 text-sm">{detail.label}</span>
                                            <span className="text-white font-medium text-sm text-right">{detail.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </FadeInUp>
                    ))}
                </div>




                <div className="mt-20 max-w-4xl mx-auto space-y-12">
                    <RevealAnimation>
                        <div>

                            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed text-center mb-12">
                                The FELYSYUM (FELY) token distribution plan is designed with several strengths to build trust and confidence among potential investors, community members, and stakeholders. Here’s an explanation of its strengths:
                            </p>

                            <div className="space-y-8">
                                <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                                    <h3 className="text-xl font-bold text-cyan-400 mb-4">Gradual Release of Tokens:</h3>
                                    <p className="text-gray-300 leading-relaxed">
                                        By gradually releasing tokens over several years, the distribution plan prevents large dumps of tokens into the market, which can cause price volatility and diminish trust in the project. A slow release schedule ensures that the token supply grows steadily, allowing for a more stable market and better long-term price appreciation. This approach demonstrates a commitment to the project's sustainability rather than short-term gains.
                                    </p>
                                </div>

                                <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                                    <h3 className="text-xl font-bold text-cyan-400 mb-4">10% for Stakers and Promotions Bonus</h3>

                                </div>

                                <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                                    <h3 className="text-xl font-bold text-cyan-400 mb-4">Transparency and Predictability</h3>
                                    <p className="text-gray-300 leading-relaxed">
                                        The clear and detailed distribution plan outlines the percentage of tokens allocated to each category, the freeze periods, and the monthly release schedules. This transparency allows outsiders to understand exactly how and when tokens will enter circulation, reducing uncertainty and fostering trust in the project's management. Knowing the precise token release timeline helps investors and community members make informed decisions.
                                    </p>
                                </div>

                                <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                                    <h3 className="text-xl font-bold text-cyan-400 mb-4">Long-Term Commitment to Development and Growth</h3>
                                    <p className="text-gray-300 leading-relaxed">
                                        The allocation for key areas such as the developing team, charity, promotions, and advertising indicates a long-term commitment to building and growing the ecosystem. By freezing significant portions of the token supply for extended periods (up to 4 years), FELYSYUM shows that it is focused on sustained development and not just short-term profit. This long-term vision appeals to serious investors who are looking for stable, reliable projects with growth potential.
                                    </p>
                                </div>

                                <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                                    <h3 className="text-xl font-bold text-cyan-400 mb-4">Incentives for Active Participation</h3>
                                    <p className="text-gray-300 leading-relaxed">
                                        The allocation of 42% of tokens for participants and bonuses for staking and promotions demonstrates a focus on rewarding active community engagement. By incentivizing participation, staking, and promotional efforts, FELYSYUM encourages a loyal and active community base. This strategy helps build a strong, committed community that supports the project’s growth and promotes a positive feedback loop of engagement and token use.
                                    </p>
                                </div>

                                <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                                    <h3 className="text-xl font-bold text-cyan-400 mb-4">Encouraging Liquidity and Ecosystem Use</h3>
                                    <p className="text-gray-300 leading-relaxed">
                                        The 5% allocation for liquidity ensures that there are always enough tokens available for trading, enhancing market confidence. A consistent monthly addition to liquidity helps maintain a healthy trading environment and reduces price manipulation risks, which is crucial for building trust among new and potential investors.
                                    </p>
                                </div>

                                <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                                    <h3 className="text-xl font-bold text-cyan-400 mb-4">Social Responsibility and Community Impact</h3>
                                    <p className="text-gray-300 leading-relaxed">
                                        Allocating 10% of tokens to charity, with a structured release over several years, reflects a commitment to social impact and corporate responsibility. This aspect of the distribution plan can build goodwill and attract investors who value ethical considerations and social responsibility. It also aligns the project with broader societal goals, enhancing its reputation and trustworthiness.
                                    </p>
                                </div>

                                <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                                    <h3 className="text-xl font-bold text-cyan-400 mb-4">Fair and Inclusive Public Sale</h3>
                                    <p className="text-gray-300 leading-relaxed">
                                        Freezing 17% of tokens for the public sale for 5 months before a gradual release ensures that early investors do not immediately flood the market with tokens, which can harm the token's value. Instead, this strategy balances immediate fundraising needs with the long-term health of the token ecosystem. Outsiders can see that FELYSYUM is designed to be fair and inclusive, making it more attractive to potential investors looking for equitable opportunities.
                                    </p>
                                </div>

                                <div className="p-8 border border-cyan-500/20 rounded-2xl bg-cyan-500/5">
                                    <h3 className="text-xl font-bold text-white mb-4">Conclusion</h3>
                                    <p className="text-gray-300 leading-relaxed">
                                        Overall, the FELYSYUM token distribution plan is designed to build a foundation of trust and stability. By demonstrating transparency, ensuring long-term growth, incentivizing active participation, maintaining liquidity, committing to social responsibility, and creating a fair public sale process, the plan appeals to a broad range of stakeholders. It positions FELYSYUM as a thoughtful, responsible, and sustainable project in the cryptocurrency space.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </RevealAnimation>
                </div>
            </div>
        </section>



    );
};

export default TokenDistributionContent;
