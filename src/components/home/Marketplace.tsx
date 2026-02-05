import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';
import arrowUpRight from '@public/images/icons/arrow-up-right.svg';
import Image from 'next/image';
import gradient43 from '@public/images/ns-img-531.png';
import LinkButton from '../ui/button/LinkButton';

// Logo Imports
import felyLogo from '@public/images/marketplace/fely.png';
import coinGeckoLogo from '@public/images/marketplace/coingecko.png';
import geckoTerminalLogo from '@public/images/marketplace/geckoterminal.jpg';
import dexToolsLogo from '@public/images/marketplace/dextools.jpg';

// Placeholder data
const marketplaceData = [
    { name: 'Buy FELY', url: '#', iconClass: 'ns-filter', image: felyLogo },
    { name: 'CoinGecko', url: '#', iconClass: 'ns-monitor', image: coinGeckoLogo },
    { name: 'Gecko Terminal', url: '#', iconClass: 'ns-code', image: geckoTerminalLogo },
    { name: 'Live Coin Watch', url: '#', iconClass: 'ns-clock' }, // No image provided yet
    { name: 'DEXTools', url: '#', iconClass: 'ns-layout', image: dexToolsLogo },
    { name: 'Coin Paprika', url: '#', iconClass: 'ns-fire' },
    { name: 'Coinranking', url: '#', iconClass: 'ns-chart' },
    { name: 'Coming Soon', url: '#', iconClass: 'ns-plus' },
];

const Marketplace = () => {
    return (
        <section className="py-16 md:py-20 lg:py-[90px] xl:py-[100px]">
            <div className="main-container space-y-10 md:space-y-[70px]">
                {/* Header CTA Style */}
                <RevealAnimation delay={0.1}>
                    <div className="bg-secondary dark:bg-background-8 relative space-y-6 overflow-hidden rounded-4xl py-[60px] md:py-[76px] px-6 md:px-10 text-center">
                        {/* bg img */}
                        <RevealAnimation delay={0.3} direction="left">
                            <figure className="pointer-events-none absolute -top-[88%] -left-[65%] size-[500px] opacity-80 select-none max-[376px]:-top-[80%] md:-top-[78%] md:-left-[35%] lg:-top-[71%] lg:-left-[28%] xl:-top-[84%] xl:-left-[27%] xl:size-[700px] 2xl:-left-[26%]">
                                <Image src={gradient43} className="h-full w-full object-cover" alt="Gradient Background" />
                            </figure>
                        </RevealAnimation>

                        {/* Content */}
                        <div className="relative z-10 mx-auto max-w-[700px]">
                            <RevealAnimation delay={0.2}>
                                <span className="badge badge-blur mb-5">
                                    Marketplace
                                </span>
                            </RevealAnimation>
                            <RevealAnimation delay={0.3}>
                                <h2 className="mx-auto mb-4 text-3xl md:text-4xl font-bold text-white leading-tight">
                                    Buy now & get live coin data instantly!
                                </h2>
                            </RevealAnimation>
                            <RevealAnimation delay={0.4}>
                                <p className="text-accent/80 text-base md:text-lg mb-8">
                                    Instant access to live cryptocurrency data for your workflow.
                                </p>
                            </RevealAnimation>
                            <RevealAnimation delay={0.5}>
                                <div className="text-center">
                                    <LinkButton
                                        href="#"
                                        className="btn btn-primary btn-md hover:btn-white dark:hover:btn-accent w-full sm:w-auto border-0"
                                        aria-label="Get started">
                                        Get Started
                                    </LinkButton>
                                </div>
                            </RevealAnimation>
                        </div>
                        {/* Grid */}
                        <div className="grid grid-cols-12 gap-y-4 sm:gap-5 md:gap-8 mt-10 text-left">
                            {marketplaceData.map((item, index) => (
                                <RevealAnimation delay={0.4 + index * 0.1} key={item.name}>
                                    <div className="col-span-12 sm:col-span-6 lg:col-span-3">
                                        <Link href={item.url} className="group block h-full">
                                            <div className="group relative h-full flex flex-col justify-between overflow-hidden rounded-[20px] bg-[#13171E] px-5 py-6 md:px-6 md:py-8 border border-[#2a333e] hover:border-primary-500/50 transition-all duration-300">

                                                {/* Primary Glow Effect */}
                                                <div className="absolute top-[-50px] right-[-50px] w-[150px] h-[150px] bg-primary-500/20 blur-[60px] rounded-full pointer-events-none group-hover:bg-primary-500/40 transition-all duration-300"></div>

                                                {/* Icons Area */}
                                                <div className="mb-5 flex items-center">
                                                    {/* Main Icon (Brand) */}
                                                    <div className="relative z-10 size-[80px] rounded-full bg-white flex items-center justify-center overflow-hidden">
                                                        {item.image ? (
                                                            <Image
                                                                src={item.image}
                                                                alt={item.name}
                                                                className="w-full h-full object-contain"
                                                            />
                                                        ) : (
                                                            <span className={`${item.iconClass} text-4xl text-black`}></span>
                                                        )}
                                                    </div>
                                                </div>

                                                {/* Text Area */}
                                                <div className="relative z-10">
                                                    <h3 className="text-xl leading-[1.3] font-medium text-primary-500 mb-1 group-hover:text-white transition-colors">
                                                        {item.name}
                                                    </h3>
                                                    <p className="text-sm text-gray-400 font-normal">
                                                        Live Data Integration
                                                    </p>
                                                </div>

                                            </div>
                                        </Link>
                                    </div>
                                </RevealAnimation>
                            ))}
                        </div>
                    </div>
                </RevealAnimation>
            </div>
        </section>
    );
};

export default Marketplace;
