import LinkButton from '@/components/ui/button/LinkButton';
import { FadeInUp } from '../animation/FadeInUp';
import { ArrowIcon } from '@/icons';
import { FaCoins, FaTag, FaChartPie, FaHashtag } from 'react-icons/fa';
import { SiPolygon } from 'react-icons/si';

// Using the same background image as the tempalate reference if available, or a fallback color
// Assuming the user wants the dark card look.
// I'll check if I can import the image or if I should use a gradient fallback.
// The reference imported: import integrationBg from '@public/images/ns-img-24.png';
// I will try to use the same path if it exists, or just use CSS classes for the dark theme.

interface TokenDetail {
    id: string;
    icon: React.ElementType;
    title: string;
    value: string;
    label: string;
}

const tokenDetails: TokenDetail[] = [
    {
        id: 'token-name',
        icon: FaCoins,
        title: 'Token Name',
        value: 'FELYSYUM',
        label: 'Name',
    },
    {
        id: 'symbol',
        icon: FaTag,
        title: 'Symbol',
        value: 'FELY',
        label: 'Ticker',
    },
    {
        id: 'supply',
        icon: FaChartPie,
        title: 'Total Supply',
        value: '500 million',
        label: 'Supply',
    },
    {
        id: 'decimals',
        icon: FaHashtag,
        title: 'Decimals',
        value: '18',
        label: 'Precision',
    },
    {
        id: 'blockchain',
        icon: SiPolygon,
        title: 'Blockchain',
        value: 'Polygon',
        label: 'Network',
    },
];

const TokenSales = () => {
    return (
        <section className="py-20 lg:py-32">
            <div className="container mx-auto px-4">
                <FadeInUp delay={0.1}>
                    <div className="relative z-0 mx-auto w-full max-w-[1200px] overflow-hidden rounded-3xl bg-[#0B0F19] px-6 py-16 md:px-12 md:py-24 border border-white/5 shadow-2xl">
                        {/* Glow effect */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[800px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />

                        <div className="relative z-10 max-w-3xl mx-auto text-center space-y-8 mb-16">
                            <FadeInUp delay={0.2}>
                                <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-4 border border-blue-500/20">
                                    Fely Token Sales
                                </span>
                            </FadeInUp>

                            <FadeInUp delay={0.3}>
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                                    Fely Token Sales
                                </h2>
                            </FadeInUp>

                            <FadeInUp delay={0.4}>
                                <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
                                    Dynamically evisculate revolutionary technologies before authoritatively restore backward-compatible impact enterprise-wide.
                                </p>
                            </FadeInUp>
                        </div>

                        {/* Card Grid */}
                        <div className="mb-10 grid grid-cols-1 gap-8 sm:gap-4 md:mb-14 md:grid-cols-2 md:gap-8 max-w-[900px] mx-auto">
                            {tokenDetails.map((detail, index) => (
                                <FadeInUp key={detail.id} delay={0.1 * index + 0.5}>
                                    <div className="group" key={detail.id}>
                                        <div
                                            className="group-hover:shadow-lg flex justify-between items-center rounded-[20px] bg-white/5 p-4 transition-all duration-500 ease-in-out group-hover:scale-[102%] md:p-6 border border-white/5 hover:border-blue-500/30 cursor-default">
                                            <div className="flex items-center gap-4">
                                                <div className="shrink-0 grow-0 rounded-lg bg-blue-600/20 p-3 transition-transform duration-500 group-hover:scale-[103%] group-hover:rotate-6">
                                                    <detail.icon className="w-6 h-6 text-blue-400 group-hover:text-white transition-colors duration-300" />
                                                </div>
                                                <div className="text-left transform transition-transform duration-500 group-hover:translate-x-1.5">
                                                    <p className="text-gray-400 text-sm uppercase tracking-wider">{detail.title}</p>
                                                    <h5 className="text-white font-bold text-xl">{detail.value}</h5>
                                                </div>
                                            </div>
                                            <div className="bg-blue-600/20 group-hover:bg-blue-600 relative flex size-12 items-center justify-center overflow-hidden rounded-full transition-all duration-[600ms] ease-in-out shadow-lg">
                                                <ArrowIcon className="size-5 stroke-blue-400 group-hover:stroke-white transition-colors duration-300" />
                                            </div>
                                        </div>
                                    </div>
                                </FadeInUp>
                            ))}
                        </div>


                    </div>
                </FadeInUp>
            </div>
        </section>
    );
};

export default TokenSales;
