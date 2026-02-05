import RevealAnimation from "../animation/RevealAnimation";

const RoadMapHero = () => {
    return (
        <section className="relative pt-[120px] pb-[60px] lg:pt-[160px] lg:pb-[80px]">
            <div className="absolute top-0 left-0 w-full h-full -z-10 bg-gradient-to-br from-primary/5 to-transparent dark:from-primary/10"></div>
            <div className="main-container text-center">
                <RevealAnimation delay={0.1}>
                    <span className="badge badge-primary bg-primary/10 text-primary border border-primary/20 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wider mb-4 inline-block">
                        Our Journey
                    </span>
                </RevealAnimation>

                <RevealAnimation delay={0.2}>
                    <h1 className="text-4xl md:text-5xl lg:text-heading-2 font-bold mb-6">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                            Felysyum
                        </span> Road Map
                    </h1>
                </RevealAnimation>

                <RevealAnimation delay={0.3}>
                    <p className="max-w-[700px] mx-auto text-lg text-secondary dark:text-gray-300">
                        Trace our path from inception to a future of digital innovation. See how we're building the digital elysium, step by step.
                    </p>
                </RevealAnimation>
            </div>
        </section>
    );
};

export default RoadMapHero;
