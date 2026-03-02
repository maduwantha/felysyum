'use client';

import { FadeInUp } from '@/components/animation/FadeInUp';

const TokenomicsBreakdown = () => {
    return (
        <section className="py-20 bg-[#0B0F19] border-t border-white/5">
            <div className="container mx-auto px-4 max-w-5xl">
                <FadeInUp delay={0.1}>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
                        Tokenomics Breakdown
                    </h2>
                </FadeInUp>

                <div className="space-y-12">
                    <FadeInUp delay={0.2}>
                        <div className="space-y-3">
                            <h3 className="text-2xl font-bold text-white">42% for Participants:</h3>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                We're putting the community first with 42% of tokens reserved exclusively for our valued participants. This allocation is designed to empower those who actively engage with our ecosystem, ensuring they reap the rewards of their involvement.
                            </p>
                        </div>
                    </FadeInUp>

                    <FadeInUp delay={0.3}>
                        <div className="space-y-3">
                            <h3 className="text-2xl font-bold text-white">20% for Public Sale:</h3>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                To ensure fair access and widespread distribution, 20% of the total supply is allocated for the public sale. This allows a broader audience to participate in the Felysyum ecosystem from the start, fostering a decentralized and inclusive community.
                            </p>
                        </div>
                    </FadeInUp>

                    <FadeInUp delay={0.4}>
                        <div className="space-y-3">
                            <h3 className="text-2xl font-bold text-white">10% for Stakers and Promotions Bonus:</h3>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                A combined 10% of tokens is dedicated to stakers and promotional bonuses. This allocation incentivizes early supporters and promotes active participation within our network, creating a thriving and dynamic ecosystem.
                            </p>
                        </div>
                    </FadeInUp>

                    <FadeInUp delay={0.5}>
                        <div className="space-y-3">
                            <h3 className="text-2xl font-bold text-white">10% for Charity:</h3>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                We believe in giving back. That's why 10% of our tokens are committed to charitable causes, making a positive impact on the world and supporting communities in need.
                            </p>
                        </div>
                    </FadeInUp>

                    <FadeInUp delay={0.6}>
                        <div className="space-y-3">
                            <h3 className="text-2xl font-bold text-white">7% for Promotions and Advertising:</h3>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                To spread the word and expand our reach, 7% of tokens are allocated for promotions and advertising. This ensures we build a strong and engaged community that aligns with our mission.
                            </p>
                        </div>
                    </FadeInUp>

                    <FadeInUp delay={0.7}>
                        <div className="space-y-3">
                            <h3 className="text-2xl font-bold text-white">6% for the Development Team:</h3>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                A solid 6% is set aside for the development team, recognizing their invaluable contributions and ensuring they remain motivated and committed to the project's ongoing success.
                            </p>
                        </div>
                    </FadeInUp>

                    <FadeInUp delay={0.8}>
                        <div className="space-y-3">
                            <h3 className="text-2xl font-bold text-white">5% for Liquidity:</h3>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                Finally, 5% of tokens are reserved to provide liquidity, fostering a stable and vibrant market where tokens can be traded freely and efficiently.
                            </p>
                        </div>
                    </FadeInUp>

                    <FadeInUp delay={0.9}>
                        <p className="text-gray-500 pt-6 italic border-t border-white/5">
                            This tokenomics model is crafted to balance growth, stability, and community engagement, ensuring a thriving ecosystem for all participants.
                        </p>
                    </FadeInUp>
                </div>
            </div>
        </section>
    );
};

export default TokenomicsBreakdown;
