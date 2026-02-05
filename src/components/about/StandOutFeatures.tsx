
import RevealAnimation from '../animation/RevealAnimation';

// Inline SVGs for the icons to match the requested UI style (outlined mobile-style icons)
const PolygonIcon = () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-cyan-400">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

// Using a generic finance/mobile icon for the others as specific representations
const GasIcon = () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-500">
        <rect x="5" y="2" width="14" height="20" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M12 18H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M12 6V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M15 10L12 14L9 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const SupplyIcon = () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-purple-500">
        <rect x="5" y="2" width="14" height="20" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M12 18H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <rect x="9" y="6" width="6" height="4" rx="1" stroke="currentColor" strokeWidth="2" />
        <path d="M12 10V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
);

const HubIcon = () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-yellow-500">
        <rect x="5" y="2" width="14" height="20" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M12 18H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M10 6H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M10 9H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M10 12H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
);


const features = [
    {
        id: 1,
        title: 'BUILT ON POLYGON:',
        description: 'Explore the advantages of projects on the Polygon network, offering rapid transactions and revolutionizing the crypto realm.',
        icon: <PolygonIcon />,
        borderColor: 'border-cyan-400',
        hoverBg: 'hover:bg-cyan-900/20',
        lineColor: 'bg-cyan-400'
    },
    {
        id: 2,
        title: 'LOWER GAS FEE:',
        description: 'Discover techniques to cut down on cryptocurrency transaction expenses, from optimizing timing to leveraging layer 2 solutions.',
        icon: <GasIcon />,
        borderColor: 'border-blue-500',
        hoverBg: 'hover:bg-blue-900/20',
        lineColor: 'bg-blue-500'
    },
    {
        id: 3,
        title: 'LIMITED SUPPLY:',
        description: 'With a maximum supply of 500 million units, FELY boasts a distinctive feature: no additional coin minting.',
        icon: <SupplyIcon />,
        borderColor: 'border-purple-500',
        hoverBg: 'hover:bg-purple-900/20',
        lineColor: 'bg-purple-500'
    },
    {
        id: 4,
        title: 'INNOVATION HUB & MARKETPLACE:',
        description: 'Immerse yourself in a vibrant marketplace where visionaries present creations, pursue funding, and exchange anything within our crypto marketplace.',
        icon: <HubIcon />,
        borderColor: 'border-yellow-500',
        hoverBg: 'hover:bg-yellow-900/20',
        lineColor: 'bg-yellow-500'
    },
];

const StandOutFeatures = () => {
    return (
        <section className="pt-20 pb-20 bg-[#0A0F1C]"> {/* Dark background as per image */}
            <div className="main-container space-y-12">
                <RevealAnimation delay={0.2}>
                    <h2 className="text-white text-4xl font-bold">Why Felysyum Stands Out</h2>
                </RevealAnimation>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <RevealAnimation delay={0.3 + index * 0.1} key={feature.id}>
                            <div
                                className={`
                    group relative h-full rounded-lg bg-[#111827] p-8 transition-all duration-300 hover:-translate-y-2
                    ${feature.hoverBg} border-t-4 ${feature.borderColor}
                `}
                            >
                                <div className="mb-6">
                                    <div className="mb-4 inline-block p-2 rounded-lg bg-white/5 border border-white/10">
                                        {feature.icon}
                                    </div>
                                    <div className={`h-0.5 w-12 ${feature.lineColor} rounded-full`}></div>
                                </div>

                                <h3 className="mb-4 text-xl font-bold uppercase text-white tracking-wider">
                                    {feature.title}
                                </h3>

                                <p className="text-gray-400 leading-relaxed text-sm">
                                    {feature.description}
                                </p>
                            </div>
                        </RevealAnimation>
                    ))}
                </div>
            </div>
        </section>
    );
};

StandOutFeatures.displayName = 'StandOutFeatures';
export default StandOutFeatures;
