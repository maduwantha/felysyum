import Link from 'next/link';
import RevealAnimation from '@/components/animation/RevealAnimation';
import NextImage from 'next/image';

const WalletsPage = () => {
    return (
        <main className="bg-background-3 dark:bg-background-5 pt-32 pb-14 sm:pt-36 md:pt-42 md:pb-16 lg:pb-[88px] xl:pt-[180px] xl:pb-[100px]">
            <section className="main-container">

                {/* Header Section matching About Page */}
                <div className="mx-auto max-w-[800px] space-y-1.5 md:space-y-3 md:text-center mb-16 md:mb-20">
                    <RevealAnimation delay={0.1}>
                        <div className="mx-auto max-w-[800px] space-y-1.5 md:space-y-3 md:text-center">
                            <h2>Current Wallets</h2>
                            <p className="mx-auto lg:max-w-[700px] mt-4">
                                Securely manage your assets with supported wallets.
                            </p>
                        </div>
                    </RevealAnimation>
                </div>

                {/* Content Section */}
                <div className="mx-auto max-w-[1000px]">
                    <RevealAnimation delay={0.2}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            {/* Metamask */}
                            <div className="bg-white dark:bg-background-6 rounded-[20px] p-8 hover:shadow-lg transition-shadow duration-300 border border-transparent dark:hover:border-primary-500/30">
                                <div className="flex items-center gap-4 mb-6">
                                    <NextImage src="/images/wallet/fox.png" alt="Metamask" width={48} height={48} className="rounded-full" />
                                    <h3 className="text-2xl font-bold text-primary-500">Metamask</h3>
                                </div>
                                <div className="space-y-4">
                                    <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Download App</p>
                                    <div className="grid grid-cols-2 gap-3">
                                        <Link href="https://play.google.com/store/search?q=metamask&c=apps&hl=en_ZA" target="_blank" className="btn btn-sm btn-outline-primary flex items-center justify-center gap-2">
                                            <NextImage src="/images/icons/google-playstore.svg" alt="Play Store" width={16} height={16} />
                                            Android
                                        </Link>
                                        <Link href="https://apps.apple.com/us/app/metamask-blockchain-wallet/id1438144202" target="_blank" className="btn btn-sm btn-outline-primary flex items-center justify-center gap-2">
                                            <NextImage src="/images/icons/apple.svg" alt="Apple Store" width={16} height={16} className="dark:invert" />
                                            iOS
                                        </Link>
                                        <Link href="https://chromewebstore.google.com/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?utm_source=google.com" target="_blank" className="btn btn-sm btn-outline-primary col-span-2 text-center">
                                            Web Extension
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Trust Wallet */}
                            <div className="bg-white dark:bg-background-6 rounded-[20px] p-8 hover:shadow-lg transition-shadow duration-300 border border-transparent dark:hover:border-primary-500/30">
                                <div className="flex items-center gap-4 mb-6">
                                    <NextImage src="/images/wallet/trust.png" alt="Trust Wallet" width={48} height={48} className="rounded-full" />
                                    <h3 className="text-2xl font-bold text-primary-500">Trust Wallet</h3>
                                </div>
                                <div className="space-y-4">
                                    <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Download App</p>
                                    <div className="grid grid-cols-2 gap-3">
                                        <Link href="https://play.google.com/store/apps/details?id=com.wallet.crypto.trustapp" target="_blank" className="btn btn-sm btn-outline-primary flex items-center justify-center gap-2">
                                            <NextImage src="/images/icons/google-playstore.svg" alt="Play Store" width={16} height={16} />
                                            Android
                                        </Link>
                                        <Link href="https://apps.apple.com/us/app/trust-crypto-bitcoin-wallet/id1288339409?mt=8" target="_blank" className="btn btn-sm btn-outline-primary flex items-center justify-center gap-2">
                                            <NextImage src="/images/icons/apple.svg" alt="Apple Store" width={16} height={16} className="dark:invert" />
                                            iOS
                                        </Link>
                                        <Link href="https://chromewebstore.google.com/detail/trust-wallet/egjidjbpglichdcondbcbdnbeeppgdph" target="_blank" className="btn btn-sm btn-outline-primary col-span-2 text-center">
                                            Web Extension
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Coinbase Wallet */}
                            <div className="bg-white dark:bg-background-6 rounded-[20px] p-8 hover:shadow-lg transition-shadow duration-300 border border-transparent dark:hover:border-primary-500/30">
                                <div className="flex items-center gap-4 mb-6">

                                    <NextImage src="/images/wallet/coinbase.png" alt="Coinbase Wallet" width={48} height={48} className="rounded-full" />
                                    <h3 className="text-2xl font-bold text-primary-500">Coinbase Wallet</h3>
                                </div>
                                <div className="space-y-4">
                                    <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Download App</p>
                                    <div className="grid grid-cols-2 gap-3">
                                        <Link href="https://play.google.com/store/apps/details?id=org.toshi" target="_blank" className="btn btn-sm btn-outline-primary flex items-center justify-center gap-2">
                                            <NextImage src="/images/icons/google-playstore.svg" alt="Play Store" width={16} height={16} />
                                            Android
                                        </Link>
                                        <Link href="https://apps.apple.com/us/app/coinbase-wallet-nfts-crypto/id1278383455" target="_blank" className="btn btn-sm btn-outline-primary flex items-center justify-center gap-2">
                                            <NextImage src="/images/icons/apple.svg" alt="Apple Store" width={16} height={16} className="dark:invert" />
                                            iOS
                                        </Link>
                                        <Link href="https://www.coinbase.com/wallet/downloads" target="_blank" className="btn btn-sm btn-outline-primary col-span-2 text-center">
                                            Web Extension
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Phantom Wallet */}
                            <div className="bg-white dark:bg-background-6 rounded-[20px] p-8 hover:shadow-lg transition-shadow duration-300 border border-transparent dark:hover:border-primary-500/30">
                                <div className="flex items-center gap-4 mb-6">
                                    <NextImage src="/images/wallet/pntm.png" alt="Phantom Wallet" width={48} height={48} className="rounded-full" />
                                    <h3 className="text-2xl font-bold text-primary-500">Phantom Wallet</h3>
                                </div>
                                <div className="space-y-4">
                                    <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Download App</p>
                                    <div className="grid grid-cols-2 gap-3">
                                        <Link href="https://play.google.com/store/apps/details?id=app.phantom&pcampaignid=web_share" target="_blank" className="btn btn-sm btn-outline-primary flex items-center justify-center gap-2">
                                            <NextImage src="/images/icons/google-playstore.svg" alt="Play Store" width={16} height={16} />
                                            Android
                                        </Link>
                                        <Link href="https://apps.apple.com/us/app/phantom-crypto-wallet/id1598432977" target="_blank" className="btn btn-sm btn-outline-primary flex items-center justify-center gap-2">
                                            <NextImage src="/images/icons/apple.svg" alt="Apple Store" width={16} height={16} className="dark:invert" />
                                            iOS
                                        </Link>
                                        <Link href="https://phantom.com/download" target="_blank" className="btn btn-sm btn-outline-primary col-span-2 text-center">
                                            Web Extension
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </RevealAnimation>

                    <RevealAnimation delay={0.3}>
                        <div className="mt-12 bg-red-500/5 dark:bg-red-500/10 border border-red-500/20 rounded-[20px] p-8 text-center">
                            <h4 className="text-red-500 font-bold mb-2 uppercase tracking-wide text-sm">Disclaimer</h4>
                            <p className="text-gray-500 dark:text-gray-400">
                                Be aware that we have not independently verified the security or functionality of the wallets listed above. Always do your own research.
                            </p>
                        </div>
                    </RevealAnimation>

                </div>
            </section>
        </main>
    );
};

export default WalletsPage;
