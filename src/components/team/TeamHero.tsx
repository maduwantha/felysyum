import RevealAnimation from '../animation/RevealAnimation';

const TeamHero = () => {
    return (
        <section className="pt-[100px] lg:pt-[140px] xl:pt-[170px]">
            <div className="main-container">
                <div className="space-y-6 text-center">
                    <RevealAnimation delay={0.1}>
                        <span className="badge badge-cyan">Team</span>
                    </RevealAnimation>
                    <div className="space-y-4">
                        <RevealAnimation delay={0.2}>
                            <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl">
                                Meet Our Global Team
                            </h1>
                        </RevealAnimation>
                        <RevealAnimation delay={0.3}>
                            <p className="max-w-[700px] mx-auto text-lg text-secondary/70 dark:text-white/70">
                                A dedicated team of experts from around the world, united by one mission—to establish Felysyum as a globally recognized brand.
                            </p>
                        </RevealAnimation>
                    </div>
                </div>
            </div>
        </section>
    );
};

TeamHero.displayName = 'TeamHero';
export default TeamHero;
