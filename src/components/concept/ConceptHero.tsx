import RevealAnimation from '../animation/RevealAnimation';

const ConceptHero = () => {
    return (
        <section className="pt-[100px] pb-16 lg:pt-[140px] lg:pb-20 xl:pt-[170px] xl:pb-28">
            <div className="main-container">
                <div className="space-y-6 text-center">
                    <RevealAnimation delay={0.1}>
                        <span className="badge badge-cyan">Concept</span>
                    </RevealAnimation>
                    <div className="space-y-4">
                        <RevealAnimation delay={0.2}>
                            <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl">
                                Elysium&apos;s Digital Gold
                            </h1>
                        </RevealAnimation>
                        <RevealAnimation delay={0.3}>
                            <p className="max-w-[700px] mx-auto text-lg text-secondary/70 dark:text-white/70">
                                Discover your digital Elysium at The Oasis of Legends, a vibrant ecosystem fueled by Felysyum (FELY) cryptocurrency.
                            </p>
                        </RevealAnimation>
                    </div>
                </div>
            </div>
        </section>
    );
};

ConceptHero.displayName = 'ConceptHero';
export default ConceptHero;
