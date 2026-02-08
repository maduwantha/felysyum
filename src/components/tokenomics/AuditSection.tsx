'use client';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import heroImage from '@public/images/felysyum_hero_v3.jpg';
import NumberAnimation from '../animation/NumberAnimation';
import visionDashboard from '@public/images/vision_dashboard.png';

import { FadeInUp } from '@/components/animation/FadeInUp';
import LinkButton from '@/components/ui/button/LinkButton';
import auditCert from '@public/images/cyberscope_audit.jpg';

const AuditSection = () => {
    return (

        <section className="pt-[120px] pb-[100px]">
            <div className="main-container">
                <div className="bg-background-2 dark:bg-background-6 p-8 md:p-12 rounded-3xl border border-cyan-500/20">
                    <div className="grid grid-cols-12 items-center gap-y-12 lg:gap-x-12 xl:gap-x-28">

                        {/* Text Content - Left Side */}
                        <div className="col-span-12 lg:col-span-6 relative z-20">
                            <div className="space-y-6">
                                <RevealAnimation delay={0.2}>
                                    <span className="badge badge-cyan mb-5">Audited & Trusted</span>
                                </RevealAnimation>

                                <RevealAnimation delay={0.3}>
                                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                                        Audited & Trusted by
                                        <br />
                                        <span className="text-cyan-400">Cyberscope!</span>
                                    </h2>
                                </RevealAnimation>

                                <RevealAnimation delay={0.4}>
                                    <div className="space-y-4 text-lg text-secondary dark:text-gray-300 leading-relaxed">
                                        <p>
                                            The crypto world recognizes Felysyum as a Cyberscope-audited project, ensuring greater transparency, security, and trust. With this audit, you can have even more confidence in our commitment to building a reliable ecosystem.
                                        </p>

                                        <p>At Felysyum, we are constantly enhancing our project to provide the best experience for our growing community. Our team works tirelessly to improve security, utility, and innovation—because you deserve nothing but the best.</p>


                                        <div className="pt-2">
                                            <LinkButton
                                                href="/pdf/audit-rep-9a2b.pdf"
                                                className="btn btn-primary w-full sm:w-auto h-auto min-h-[50px] whitespace-normal py-4 px-6 leading-tight flex items-center justify-center text-center"
                                                target="_blank"
                                            >
                                                View the full audit report on Cyberscope
                                            </LinkButton>
                                        </div>


                                    </div>
                                </RevealAnimation>
                            </div>
                        </div>

                        {/* Visual Content - Right Side */}
                        <div className="col-span-12 lg:col-span-6">
                            <div className="relative w-full  mx-auto lg:ml-auto">
                                <RevealAnimation delay={0.2} direction="right">
                                    <div className="relative z-10 glass-card p-2 rounded-3xl border border-white/10 shadow-2xl backdrop-blur-md bg-white/5 mx-auto max-w-[600px]">
                                        <Image
                                            src={auditCert}
                                            alt="Audit Certificate by Cyberscope"
                                            className="w-full h-auto"
                                            placeholder="blur"
                                        />
                                        {/* Decorative Elements mimicking the reference if needed, but image is strong */}
                                        <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl rotate-12 blur-xl opacity-40 animate-pulse"></div>
                                    </div>
                                </RevealAnimation>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default AuditSection;



