
import Link from 'next/link';
import RevealAnimation from '@/components/animation/RevealAnimation';

const ConnectWalletPage = () => {
    return (
        <main className="bg-background-3 dark:bg-background-5 pt-32 pb-14 sm:pt-36 md:pt-42 md:pb-16 lg:pb-[88px] xl:pt-[180px] xl:pb-[100px]">
            <section className="main-container">

                {/* Header Section */}
                <div className="mx-auto max-w-[800px] space-y-1.5 md:space-y-3 md:text-center mb-16 md:mb-20">
                    <RevealAnimation delay={0.1}>
                        <div className="mx-auto max-w-[800px] space-y-1.5 md:space-y-3 md:text-center">
                            <h2>Connecting Your MetaMask Wallet to Uniswap</h2>
                            <p className="mx-auto lg:max-w-[700px] mt-4">
                                This guide takes you on a journey to acquire Fely tokens using Uniswap and your MetaMask wallet. Follow these steps closely
                            </p>
                        </div>
                    </RevealAnimation>
                </div>

                {/* Content Section */}
                <div className="mx-auto max-w-[800px]">
                    <RevealAnimation delay={0.2}>
                        <div className="bg-white dark:bg-background-6 rounded-[24px] p-8 md:p-12 shadow-sm border border-transparent dark:border-white/5">

                            <div className="space-y-12 relative">
                                {/* Vertical Line for Timeline Effect (Optional - purely visual decoration could be added here) */}

                                {/* Step 1 */}
                                <div className="flex gap-6 md:gap-8">
                                    <div className="flex-shrink-0">
                                        <span className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-500/10 text-primary-500 text-xl font-bold border border-primary-500/20">1</span>
                                    </div>
                                    <div className="pt-1">
                                        <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Head over to Uniswap</h3>
                                        <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                                            Open your favorite web browser and visit the Uniswap website at{' '}
                                            <Link href="https://app.uniswap.org/swap" target="_blank" className="text-primary-500 hover:text-primary-600 font-medium underline decoration-primary-500/30 underline-offset-4">
                                                https://app.uniswap.org/swap
                                            </Link>.
                                        </p>
                                    </div>
                                </div>

                                {/* Step 2 */}
                                <div className="flex gap-6 md:gap-8">
                                    <div className="flex-shrink-0">
                                        <span className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-500/10 text-primary-500 text-xl font-bold border border-primary-500/20">2</span>
                                    </div>
                                    <div className="pt-1">
                                        <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Connect your wallet</h3>
                                        <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                                            Look for the <span className="font-semibold text-gray-900 dark:text-white">"Connect Wallet"</span> button, usually located in the top right corner. Click on it.
                                        </p>
                                    </div>
                                </div>

                                {/* Step 3 */}
                                <div className="flex gap-6 md:gap-8">
                                    <div className="flex-shrink-0">
                                        <span className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-500/10 text-primary-500 text-xl font-bold border border-primary-500/20">3</span>
                                    </div>
                                    <div className="pt-1">
                                        <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Choose MetaMask</h3>
                                        <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                                            A pop-up will appear showing various wallet options. Select<span className="font-semibold text-gray-900 dark:text-white">"MetaMask"</span> from the list.
                                        </p>
                                    </div>
                                </div>

                                {/* Step 4 */}
                                <div className="flex gap-6 md:gap-8">
                                    <div className="flex-shrink-0">
                                        <span className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-500/10 text-primary-500 text-xl font-bold border border-primary-500/20">4</span>
                                    </div>
                                    <div className="pt-1">
                                        <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Grant permission (if needed):</h3>
                                        <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                                            Depending on your MetaMask settings, you might see a pop-up requesting permission for Uniswap to access your wallet. Review the details and click <span className="font-semibold text-gray-900 dark:text-white">"Connect"</span> if you're comfortable.
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </RevealAnimation>
                </div>
            </section>
        </main>
    );
};

export default ConnectWalletPage;
