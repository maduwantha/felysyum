import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';
import { FaTelegram } from "react-icons/fa6";
import teamVisual from '@public/images/felysyum_team_visual.jpg';

const GlobalTeam = () => {
    return (
        <section className="bg-background-3 dark:bg-background-7 py-[60px] lg:py-[100px]">
            <div className="main-container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Text Content - Left Side */}
                    <div className="space-y-8">
                        <div className="space-y-6 text-lg text-secondary dark:text-gray-300 leading-relaxed">
                            <RevealAnimation delay={0.1}>
                                <p>
                                    We are a dedicated team of experts from around the world, united by one mission—to establish this project as a globally recognized brand. Our team consists of researchers, advisors, financial experts, software engineers, and developers from <strong className="text-cyan-400">Japan, Portugal, the UK, and the USA</strong>.
                                </p>
                            </RevealAnimation>

                            <RevealAnimation delay={0.2}>
                                <p>
                                    But we don&apos;t stop there! We also collaborate with seasoned professionals and industry veterans worldwide, ensuring we bring you the best in innovation, security, and development.
                                </p>
                            </RevealAnimation>

                            <RevealAnimation delay={0.3}>
                                <p>
                                    Our doors are always open! If you&apos;re passionate about shaping the future of this industry and want to join us or contribute, feel free to reach out via our Telegram. We warmly welcome like-minded individuals who want to make not just our project, but the entire industry, a better place.
                                </p>
                            </RevealAnimation>

                            <RevealAnimation delay={0.4}>
                                <p>
                                    And no need to worry—we are fully audited by the globally recognized <strong className="text-ns-green">CyberScope</strong>. Trust and transparency are at the core of what we do, and we are committed to seeing this project through to its final success.
                                </p>
                            </RevealAnimation>

                            <RevealAnimation delay={0.5}>
                                <p className="font-bold text-xl text-white italic">
                                    Together, let&apos;s build something extraordinary.
                                </p>
                            </RevealAnimation>
                        </div>

                        <RevealAnimation delay={0.6}>
                            <div className="pt-4">
                                <Link
                                    href="https://t.me/Felysyum_Customer_Service"
                                    target="_blank"
                                    className="inline-flex items-center gap-3 rounded-full bg-cyan-500 px-8 py-4 text-base font-bold text-white transition-all hover:scale-105 hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]"
                                >
                                    <FaTelegram className="text-2xl" />
                                    JOIN US ON TELEGRAM
                                </Link>
                            </div>
                        </RevealAnimation>
                    </div>

                    {/* Visual Content - Right Side */}
                    <div className="relative h-full">
                        <RevealAnimation delay={0.2} direction="left">
                            <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
                                <Image
                                    src={teamVisual}
                                    alt="Felysyum Global Team Vision"
                                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                                    placeholder="blur"
                                />
                                {/* Overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-background-7/80 to-transparent opacity-60"></div>
                            </div>
                        </RevealAnimation>
                    </div>

                </div>
            </div>
        </section>
    );
};

GlobalTeam.displayName = 'GlobalTeam';
export default GlobalTeam;
