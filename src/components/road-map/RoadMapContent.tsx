'use client';
import { useGSAP } from '@gsap/react';
import React, { useRef } from 'react';
import RevealAnimation from '../animation/RevealAnimation';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaCheckCircle, FaFlag } from 'react-icons/fa';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const milestones = [
    {
        status: 'future',
        title: 'Exchange Expansion',
        desc: 'Engage with major centralized exchanges to list FELY.',
    },
    {
        status: 'future',
        title: 'Decentralized Reach',
        desc: "Extend FELY's presence to decentralized exchanges.",
    },
    {
        status: 'future',
        title: 'Staking Stars',
        desc: 'Launch the FELY staking option for rewarding opportunities.',
    },
    {
        status: 'future',
        title: 'Felyzone Debut',
        desc: 'Kickstart product sales in the innovative Felyzone.',
    },
    {
        status: 'future',
        title: 'Fuel for Innovators',
        desc: 'Channel funds into Felynova to empower new innovators.',
    },
    {
        status: 'future',
        title: 'Olympus Gathering',
        desc: 'Strengthen the community ties within Olympus Community.',
    },
    {
        status: 'future',
        title: 'Zephyr Unleashed',
        desc: 'Roll out the Fely Wallet, the secure crypto wallet.',
    },
    {
        status: 'future',
        title: 'Polygon Dispatch',
        desc: 'Provide essential information to the Polygon network.',
    },
    {
        status: 'future',
        title: 'Major Listings',
        desc: 'Ensure FELY is featured on prominent listing sites.',
    },
    {
        status: 'active',
        type: 'rolling_out',
        title: 'Rolling out soon',
        desc: ''
    },
    {
        status: 'active',
        type: 'in_motion',
        title: "We're in motion, making things happen",
        desc: ''
    },
    {
        status: 'completed',
        title: 'March 2025',
        desc: "Felysyum passed Cyberscope's audit with an 83% score and no critical issues, with KYC completed to strengthen community trust.",
    },
    {
        status: 'completed',
        title: 'January 2025',
        desc: 'Introduce the project to investors, spark engagement, and boost liquidity in the Uniswap pool — followed by locking the liquidity to ensure long-term trust within the community.',
    },
    {
        status: 'completed',
        title: 'January 01, 2025',
        desc: 'Unveil the Felysyum Whitepaper.',
    },
    {
        status: 'completed',
        title: 'December 01, 2024',
        desc: 'The Felysyum presale began, marking the start of an exciting chapter for the project, inviting the community to be part of this transformative journey.',
    },
    {
        status: 'completed',
        title: 'November 30, 2024',
        desc: 'Uniswap Liquidity Pool Creation.',
    },
    {
        status: 'completed',
        title: 'November 29, 2024',
        desc: 'Felysyum Launch: Official launch of Felysyum on the Polygon network with a capped supply of 500 million tokens.',
    },
    {
        status: 'completed',
        title: 'June 2024',
        desc: 'A partnership was forged with a renowned U.S. promotion team, tasked with building a global community and spreading the Felysyum vision worldwide.',
    },
    {
        status: 'completed',
        title: 'March 20, 2024',
        desc: 'The Feliciamatrix Educational Token (FET) was launched, opening the door to a new era of crypto-focused learning. Community members could now access a wide range of courses on SkillfulHub.com using FET.',
    },
    {
        status: 'completed',
        title: 'January 2024',
        desc: 'The project plan was finalized with ambitious goals: Felyzone Marketplace, SkillFullHub, Felynova Innovation Hub, Felywallet, and Aidora Charity.',
    },
    {
        status: 'completed',
        title: 'December 2023',
        desc: 'The development team created and tested several prototype tokens, including SNJ, HUSH, and Lumina, all built on the Polygon blockchain.',
    },
    {
        status: 'completed',
        title: 'October 2023',
        desc: 'After extensive discussions and planning, the team conceptualized the Felysyum crypto token, designed to meet the evolving needs of the digital economy.',
    },
    {
        status: 'completed',
        title: 'September 2023',
        desc: 'A talented team of expert Forex traders, software developers, and crypto and digital asset specialists from Portugal, the USA, Japan, and the UK came together with a bold vision.',
    },
];

const RoadMapContent = () => {
    const scopeRef = useRef<HTMLDivElement | null>(null);
    const lineRefs = useRef<(SVGPathElement | null)[]>([]);

    useGSAP(() => {
        const lines = lineRefs.current.filter(Boolean);
        if (!lines.length) return;

        lines.forEach((line, index) => {
            // Reset initial state
            const length = line?.getTotalLength() || 0;
            gsap.set(line, { strokeDasharray: length, strokeDashoffset: length });

            gsap.to(line, {
                strokeDashoffset: 0,
                duration: 1.5,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: line?.parentElement,
                    start: 'top 80%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none reverse',
                }
            });
        });
    }, { scope: scopeRef });


    return (
        <section ref={scopeRef} className="pb-[100px] lg:pb-[150px]">
            {/* Background Glow for Active Section */}
            <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[500px] bg-[#E08E27]/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>

            <div className="main-container">
                <div className="relative max-w-[900px] mx-auto">
                    {/* Central Line - Continuous */}
                    <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-1 bg-gray-200 dark:bg-white/10 -translate-x-1/2 rounded-full hidden md:block"></div>

                    <div className="space-y-12">
                        {milestones.map((item, index) => {
                            const isEven = index % 2 === 0;
                            // @ts-ignore
                            const isRollingOut = item.type === 'rolling_out';
                            // @ts-ignore
                            const isInMotion = item.type === 'in_motion';

                            return (
                                <div key={index} className="relative md:flex items-center justify-between group">

                                    {/* Connector Circle - Desktop */}
                                    <div className={`absolute left-1/2 top-0 -translate-x-1/2 hidden md:flex items-center justify-center size-12 rounded-full border-4 z-10 shadow-lg transition-all duration-300 ${isRollingOut || isInMotion ? 'bg-background-1 dark:bg-background-5 border-[#E08E27] shadow-[#E08E27]/20' : 'bg-background-1 dark:bg-background-5 border-background-3 dark:border-background-7'}`}>
                                        {isRollingOut || isInMotion ? (
                                            <div className="size-3 bg-[#E08E27] rounded-full animate-pulse" />
                                        ) : item.status === 'completed' ? (
                                            <FaCheckCircle className="text-green-500 text-xl" />
                                        ) : (
                                            <FaFlag className="text-cyan-400 text-lg" />
                                        )}
                                    </div>

                                    {/* Connector Circle - Mobile */}
                                    <div className={`absolute left-0 top-0 md:hidden flex items-center justify-center size-10 rounded-full border-2 z-10 ${isRollingOut || isInMotion ? 'bg-background-1 dark:bg-background-5 border-[#E08E27]' : 'bg-background-1 dark:bg-background-5 border-cyan-500'}`}>
                                        {isRollingOut || isInMotion ? (
                                            <div className="size-2 bg-[#E08E27] rounded-full animate-pulse" />
                                        ) : item.status === 'completed' ? (
                                            <FaCheckCircle className="text-green-500 text-sm" />
                                        ) : (
                                            <FaFlag className="text-cyan-400 text-sm" />
                                        )}
                                    </div>


                                    {/* Content Side Left */}
                                    <div className={`w-full md:w-[45%] pl-12 md:pl-0 ${isEven ? 'md:order-1 md:text-right' : 'md:order-2 md:text-left'}`}>
                                        <RevealAnimation delay={index * 0.1} direction={isEven ? 'right' : 'left'}>

                                            {isRollingOut ? (
                                                <div className={`flex flex-col gap-4 ${isEven ? 'items-end' : 'items-start'}`}>
                                                    {/* Standard title for one side */}
                                                    {isEven ? (
                                                        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#E08E27] to-amber-200">{item.title}</h3>
                                                    ) : (
                                                        <div className="space-y-4 w-full">
                                                            <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-[#E08E27]/20 hover:border-[#E08E27]/50 transition-all flex items-center gap-4 group/card">
                                                                <span className="text-gray-200 font-medium text-sm md:text-base">Developing SkillfulHub to educate community members</span>
                                                            </div>
                                                            <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-[#E08E27]/20 hover:border-[#E08E27]/50 transition-all flex items-center gap-4 group/card">
                                                                <span className="text-gray-200 font-medium text-sm md:text-base">Listing the Felysyum token on major crypto platforms</span>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            ) : isInMotion ? (
                                                <div className={`inline-block p-4 rounded-2xl bg-gradient-to-r from-[#E08E27]/10 to-amber-500/10 border border-[#E08E27]/20 backdrop-blur-sm text-[#E08E27] font-semibold shadow-lg shadow-[#E08E27]/5 ${isEven ? 'mr-auto' : 'ml-auto'}`}>
                                                    {item.title}
                                                </div>
                                            ) : (
                                                <div className={`relative p-6 rounded-2xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 shadow-xl transition-all hover:shadow-2xl hover:border-cyan-500/30 ${isEven ? 'mr-auto' : 'ml-auto'}`}>
                                                    {/* Mobile Line Connector */}
                                                    <div className="absolute left-[-29px] top-[20px] w-[29px] h-[2px] bg-cyan-500 md:hidden"></div>

                                                    <div className="space-y-2">
                                                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-2 ${item.status === 'completed' ? 'bg-green-500/10 text-green-500' : 'bg-cyan-500/10 text-cyan-400'}`}>
                                                            {item.status === 'completed' ? 'Completed' : 'Upcoming'}
                                                        </span>
                                                        <h3 className="text-xl font-bold text-primary dark:text-white">
                                                            {item.title}
                                                        </h3>
                                                        <p className="text-secondary dark:text-gray-400 text-sm leading-relaxed">
                                                            {item.desc}
                                                        </p>
                                                    </div>
                                                </div>
                                            )}

                                        </RevealAnimation>
                                    </div>

                                    {/* Spacer / Other Side */}
                                    <div className={`hidden md:block w-[45%] ${isEven ? 'md:order-2 md:text-left' : 'md:order-1 md:text-right'}`}>
                                        {isRollingOut && (
                                            <RevealAnimation delay={index * 0.1} direction={isEven ? 'right' : 'left'}>
                                                {isEven ? (
                                                    <div className="space-y-4 w-full">
                                                        <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-[#E08E27]/20 hover:border-[#E08E27]/50 transition-all flex items-center gap-4 group/card">
                                                            <span className="text-gray-200 font-medium text-sm md:text-base">Developing SkillfulHub to educate community members</span>
                                                        </div>
                                                        <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-[#E08E27]/20 hover:border-[#E08E27]/50 transition-all flex items-center gap-4 group/card">
                                                            <span className="text-gray-200 font-medium text-sm md:text-base">Listing the Felysyum token on major crypto platforms</span>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#E08E27] to-amber-200">{item.title}</h3>
                                                )}
                                            </RevealAnimation>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RoadMapContent;
