import heroImage from '@public/images/felysyum_hero_v3.jpg';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import { LuTelescope, LuRocket } from 'react-icons/lu';




interface FeatureItem {
    id: string;
    title: string;
    description: string;
    icon: React.ReactNode;
}

const featureItems: FeatureItem[] = [
    {
        id: 'vision',
        title: 'Vision Empower',
        description: 'Launch your dream product, attract investment, shop seamlessly with digital currencies in our secure marketplace, and join our groundbreaking community to leave your mark on the digital frontier.',
        icon: <LuTelescope className="size-8" />,
    },
    {
        id: 'future',
        title: 'Own the Future',
        description: "This is more than just a crypto project, it's a revolution. We're creating a space where creativity flourishes, fueled by the power of blockchain technology. Join us and become a legend in the making.",
        icon: <LuRocket className="size-8" />,
    },
];

const AboutFeatures = () => {
    return (
        <section className="pt-16 pb-16 md:pt-20 md:pb-[100px] lg:py-[100px] lg:pb-[200px]">
            <div className="main-container">
                <div className="grid grid-cols-12 items-start gap-y-16 lg:gap-20 xl:gap-[100px]">
                    <div className="col-span-12 lg:col-span-6">
                        <RevealAnimation delay={0.2}>
                            <figure className="mx-auto w-full max-w-[500px] lg:mx-0 lg:max-w-[669px] overflow-hidden rounded-3xl sticky top-8">
                                <Image
                                    src={heroImage}
                                    alt="Felysyum ecosystem visual"
                                    className="size-full object-cover"
                                />
                            </figure>
                        </RevealAnimation>
                    </div>
                    <div className="col-span-12 lg:col-span-6">
                        <div className="mx-auto max-w-[500px] space-y-8 lg:mx-0 lg:max-w-full">
                            <div className="space-y-4">


                                <RevealAnimation delay={0.1}>
                                    <span className="badge badge-green">ENTER THE OASIS</span>
                                </RevealAnimation>
                                <RevealAnimation delay={0.2}>
                                    <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                                        Discover Your Digital Elysium
                                    </h2>
                                </RevealAnimation>
                                <RevealAnimation delay={0.3}>
                                    <p className="text-secondary dark:text-gray-300 leading-relaxed text-base">
                                        Welcome to The Oasis of Legends, where we forge a vibrant ecosystem fueled by cryptocurrency. Here, myths are blueprints for a future where creators and entrepreneurs thrive. Felysyum (FELY), inspired by the Greek paradise of heroes, is more than a cryptocurrency – it&apos;s your gateway to endless opportunities.
                                    </p>
                                </RevealAnimation>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {featureItems.map((item, index) => (
                                    <RevealAnimation key={item.id} delay={0.4 + index * 0.1}>
                                        <div className="space-y-4">
                                            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-ns-green/10 text-ns-green">
                                                {item.icon}
                                            </div>
                                            <h3 className="text-xl font-bold text-white">{item.title}</h3>
                                            <p className="text-sm text-secondary dark:text-gray-400 leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    </RevealAnimation>
                                ))}
                            </div>

                            <RevealAnimation delay={0.6}>
                                <a href="https://t.me/felysyum" target="_blank" className="inline-block rounded-full bg-cyan-500 px-8 py-4 text-sm font-bold text-white transition-transform hover:scale-105 hover:bg-cyan-400">
                                    JOIN US ON TELEGRAM
                                </a>
                            </RevealAnimation>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

AboutFeatures.displayName = 'AboutFeatures';
export default AboutFeatures;
