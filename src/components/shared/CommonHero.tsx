import RevealAnimation from '@/components/animation/RevealAnimation';

interface CommonHeroProps {
    badge?: string;
    title: string;
    description?: string;
}

const CommonHero = ({ badge, title, description }: CommonHeroProps) => {
    return (
        <section className="text-center mb-16">
            <div className="container mx-auto px-4">
                {badge && (
                    <RevealAnimation delay={0.2}>
                        <div className="inline-block mb-5">
                            <span className="badge badge-cyan">{badge}</span>
                        </div>
                    </RevealAnimation>
                )}
                <RevealAnimation delay={0.3}>
                    <h1 className="text-4xl md:text-5xl lg:text-heading-1 font-bold text-white mb-6">
                        {title}
                    </h1>
                </RevealAnimation>
                {description && (
                    <RevealAnimation delay={0.4}>
                        <p className="text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed">
                            {description}
                        </p>
                    </RevealAnimation>
                )}
            </div>
        </section>
    );
};

export default CommonHero;
