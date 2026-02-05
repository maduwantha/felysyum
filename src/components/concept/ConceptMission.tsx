import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import heroImage from '@public/images/felysyum_hero_v3.jpg';
import NumberAnimation from '../animation/NumberAnimation';
import visionDashboard from '@public/images/vision_dashboard.png';

const ConceptMission = () => {
    return (
        <section className="pt-[120px] pb-[100px]">
            <div className="main-container">
                <div className="bg-background-2 dark:bg-background-6 p-8 md:p-12 rounded-3xl border border-cyan-500/20">
                    <div className="grid grid-cols-12 items-center gap-y-12 lg:gap-x-12 xl:gap-x-28">

                        {/* Text Content - Left Side */}
                        <div className="col-span-12 lg:col-span-6 relative z-20">
                            <div className="space-y-6">
                                <RevealAnimation delay={0.2}>
                                    <span className="badge badge-cyan mb-5">Digital Heroes</span>
                                </RevealAnimation>

                                <RevealAnimation delay={0.3}>
                                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                                        The Future of
                                        <br />
                                        <span className="text-cyan-400">FELYSYUM</span>
                                    </h2>
                                </RevealAnimation>

                                <RevealAnimation delay={0.4}>
                                    <div className="space-y-4 text-lg text-secondary dark:text-gray-300 leading-relaxed">
                                        <p>
                                            Through these diverse opportunities—knowledge sharing, exclusive access to resources, and a supportive innovation environment—FELYSYUM is more than just a community. It is a movement toward knowledge, wealth, and prosperity in the digital age. Our ultimate goal is to forge a new generation of digital heroes who are well-equipped to thrive in the future world. This is the FELYSYUM vision: to build heroes who will lead the way in the new digital era, armed with knowledge, guided by wisdom, and driven by a spirit of innovation and excellence.
                                        </p>

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
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

ConceptMission.displayName = 'ConceptMission';
export default ConceptMission;
