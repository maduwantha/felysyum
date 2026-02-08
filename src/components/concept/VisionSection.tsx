import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';
import visionDashboard from '@public/images/vision_dashboard.png';
import { CheckIcon } from '@/icons';

const VisionSection = () => {
    const features = [
        "On demand support",
        "Information Sharing",
        "Cloud Technology"
    ];

    return (
        <section className="bg-background-3 dark:bg-background-7 py-[60px] lg:py-[100px] overflow-hidden">
            <div className="main-container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Visual Side - Glassmorphism Card */}
                    <div className="relative">
                        {/* Glow Effect Background */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-[80px] rounded-full pointer-events-none"></div>

                        <RevealAnimation delay={0.2} direction="right">
                            <div className="relative z-10 glass-card p-2 rounded-3xl border border-white/10 shadow-2xl backdrop-blur-md bg-white/5 mx-auto max-w-[600px]">
                                <Image
                                    src={visionDashboard}
                                    alt="Felysyum Vision Dashboard"
                                    className="w-full h-auto rounded-2xl"
                                    placeholder="blur"
                                />
                                {/* Decorative Elements mimicking the reference if needed, but image is strong */}
                                <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl rotate-12 blur-xl opacity-40 animate-pulse"></div>
                            </div>
                        </RevealAnimation>
                    </div>

                    {/* Text Side */}
                    <div className="space-y-8 relative z-20">
                        <RevealAnimation delay={0.1}>
                            <span className="badge badge-primary bg-primary/10 text-primary border border-primary/20 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wider">
                                Our Mission
                            </span>
                        </RevealAnimation>

                        <div className="space-y-6">
                            <RevealAnimation delay={0.2}>
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                                        FELYSYUM:
                                    </span>
                                    <br />
                                    <span className="text-white">
                                        Building a New  Generation of Digital Heroes
                                    </span>
                                </h2>
                            </RevealAnimation>

                            <div className="space-y-4 text-base md:text-lg text-secondary/80 dark:text-gray-300 leading-relaxed font-light">
                                <RevealAnimation delay={0.3}>
                                    <p>
                                        FELY is more than just a digital currency; it is the lifeblood of our digital utopia, a key that unlocks a world of possibilities within the FELYSYUM ecosystem. Within this digital paradise, transactions are conducted exclusively through FELY, reinforcing its value and utility. We have also launched FelyZone, an innovative online shopping mall where transactions are powered solely by cryptocurrencies. In this unique marketplace, paying with FELY provides exclusive benefits, discounts, and rewards, making it a highly sought-after currency among our community members. This feature ensures that only FELY holders can fully capitalize on the shopping experiences and benefits available in FelyZone.
                                    </p>
                                </RevealAnimation>
                                <RevealAnimation delay={0.4}>
                                    <p>
                                        But we envision a future that goes beyond mere transactions. FELYSYUM is on a mission to build an Innovation Hub where our knowledgeable community members can bring their groundbreaking ideas to life. This hub will provide funding through FELY tokens, enabling innovators to develop their projects and contribute to the community’s growth. In doing so, we aim to create a thriving ecosystem of creativity, where the brightest minds can flourish and become the wealthiest innovators in the digital world.
                                    </p>
                                </RevealAnimation>
                            </div>
                        </div>

                        <RevealAnimation delay={0.5}>
                            <ul className="flex flex-wrap gap-x-8 gap-y-4">
                                <li className="flex items-center gap-2">
                                    <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-cyan-500/20">
                                        <CheckIcon className="h-2.5 w-2.5 fill-cyan-400" />
                                    </span>
                                    <span className="text-gray-300 font-medium">Expert Community</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-cyan-500/20">
                                        <CheckIcon className="h-2.5 w-2.5 fill-cyan-400" />
                                    </span>
                                    <span className="text-gray-300 font-medium">SkillfulHub Learning</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-cyan-500/20">
                                        <CheckIcon className="h-2.5 w-2.5 fill-cyan-400" />
                                    </span>
                                    <span className="text-gray-300 font-medium">FELY Token Rewards</span>
                                </li>
                            </ul>
                        </RevealAnimation>



                    </div>
                </div>

            </div>
        </section >
    );
};

VisionSection.displayName = 'VisionSection';
export default VisionSection;
