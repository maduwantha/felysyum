import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import kycCert from '@public/images/kyc_certificate.png';

const KYCSection = () => {
    return (
        <section className="bg-background-2 dark:bg-background-6 pt-[120px] pb-[100px]">
            <div className="main-container">
                <div className="text-center space-y-10">

                    <RevealAnimation delay={0.1}>
                        <div className="inline-block relative">
                            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-600 opacity-20 blur-xl"></div>
                            <h2 className="relative text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                                KYC Verified by CyberScope
                            </h2>
                        </div>
                    </RevealAnimation>

                    <RevealAnimation delay={0.2}>
                        <div className="max-w-[900px] mx-auto relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl opacity-30 group-hover:opacity-50 blur transition duration-500"></div>
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                                <Image
                                    src={kycCert}
                                    alt="Felysyum KYC Certificate by CyberScope"
                                    className="w-full h-auto object-cover"
                                    priority
                                />
                            </div>
                        </div>
                    </RevealAnimation>

                    <RevealAnimation delay={0.3}>
                        <p className="max-w-[700px] mx-auto text-lg text-secondary/70 dark:text-white/70">
                            Verified trust. Transparency at our core. We are fully audited and KYC verified to ensure a secure and reliable ecosystem for our community.
                        </p>
                    </RevealAnimation>

                </div>
            </div>
        </section>
    );
};

KYCSection.displayName = 'KYCSection';
export default KYCSection;
