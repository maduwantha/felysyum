
import RevealAnimation from '@/components/animation/RevealAnimation';
import Link from 'next/link';

const GetFelysiumPage = () => {

    return (
        <main className="bg-background-3 dark:bg-background-7">

            {/* Hero Section */}
            <section className="pt-32 pb-14 sm:pt-36 md:pt-42 md:pb-16 lg:pb-[88px] xl:pt-[180px] xl:pb-[100px]">
                <div className="main-container">
                    <RevealAnimation delay={0.1}>
                        <div className="mx-auto max-w-[800px] space-y-1.5 md:space-y-3 md:text-center">
                            <h2>Connecting Your MetaMask Wallet to Uniswap</h2>
                            <p className="mx-auto lg:max-w-[700px] mt-4">
                                Follow this guide to convert your cryptocurrency into Felysyum (FELY) tokens using Uniswap.
                            </p>
                        </div>
                    </RevealAnimation>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-14 md:py-16 lg:py-[88px] xl:py-[100px] bg-white dark:bg-background-5">
                <div className="main-container">

                    {/* Detailed Content Section (Paragraphs) */}
                    <div className="max-w-[1000px] mx-auto">

                        <div className="space-y-12">
                            {/* Section 1 */}
                            <RevealAnimation delay={0.3}>
                                <div className="bg-background-1 dark:bg-background-6 rounded-[20px] p-8 md:p-10 space-y-6">
                                    <h3 className="text-heading-4 text-primary-500">Swapping for Fely Tokens</h3>

                                    <div className="space-y-4 text-lg text-gray-600 dark:text-gray-300">
                                        <p>
                                            <strong className="text-secondary dark:text-white block mb-1">Pick your selling currency:</strong>
                                            Locate the top section labeled "Swap." Look for the first dropdown menu, typically displaying "ETH" or another cryptocurrency. This represents the coin or token you'll be selling to acquire Fely.
                                        </p>
                                        <p>
                                            <strong className="text-secondary dark:text-white block mb-1">Enter the amount to sell:</strong>
                                            Click on the first input field (where the amount is displayed) and enter the quantity of the chosen cryptocurrency you want to exchange for Fely.
                                        </p>
                                        <div>
                                            <strong className="text-secondary dark:text-white block mb-2">Select Fely as the buy currency:</strong>
                                            <p className="mb-3">
                                                Look for the second dropdown menu, usually labeled "Buy." Click on it and search for "Fely." If you can't find it readily, use the following trick:
                                            </p>
                                            <ul className="list-disc list-inside space-y-2 pl-4 text-base bg-white dark:bg-black/20 p-4 rounded-lg border border-gray-100 dark:border-white/5">
                                                <li>Click on the "Import" button next to the "Buy" field.</li>
                                                <li>Paste the Fely smart contract address <code className="text-primary-500 bg-gray-100 dark:bg-black/40 px-1 rounded break-all">0xEe997788f625809332BaABB3110BCf1BA7400824</code> in the provided field.</li>
                                                <li>Click "Import" again. Now, you should see "Fely" listed in the dropdown menu.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </RevealAnimation>

                            {/* Section 2 */}
                            <RevealAnimation delay={0.4}>
                                <div className="bg-background-1 dark:bg-background-6 rounded-[20px] p-8 md:p-10 space-y-6">
                                    <h3 className="text-heading-4 text-primary-500">Completing the Swap and Receiving Fely</h3>

                                    <div className="space-y-4 text-lg text-gray-600 dark:text-gray-300">
                                        <p>
                                            <strong className="text-secondary dark:text-white">Review and confirm:</strong> Double-check the amount you're selling, the exchange rate, and the selected currencies (selling and buying).
                                        </p>
                                        <p>
                                            <strong className="text-secondary dark:text-white">Click "Swap":</strong> If everything looks accurate, click the "Swap" button.
                                        </p>
                                        <p>
                                            <strong className="text-secondary dark:text-white">MetaMask confirmation:</strong> A pop-up window from MetaMask will appear, summarizing the transaction details and gas fees. Review these details carefully. If you agree, click "Confirm."
                                        </p>
                                    </div>
                                </div>
                            </RevealAnimation>

                            {/* Section 3 */}
                            <RevealAnimation delay={0.5}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="bg-background-1 dark:bg-background-6 rounded-[20px] p-8 space-y-4">
                                        <h3 className="text-heading-5 text-secondary dark:text-white">Patience and Fely in Your Wallet!</h3>
                                        <p className="text-gray-600 dark:text-gray-300">
                                            The transaction might take a few minutes to process, depending on network traffic. Be patient and wait for confirmation.
                                        </p>
                                        <p className="text-gray-600 dark:text-gray-300">
                                            Once successful, your newly acquired Fely tokens will be reflected in your MetaMask wallet.
                                        </p>
                                    </div>

                                    <div className="bg-background-1 dark:bg-background-6 rounded-[20px] p-8 space-y-4 border-l-4 border-primary-500">
                                        <h3 className="text-heading-5 text-secondary dark:text-white">Adding Fely to MetaMask (Optional)</h3>
                                        <p className="text-gray-600 dark:text-gray-300">
                                            If Fely doesn't automatically appear in your MetaMask wallet list, you can import it manually.
                                        </p>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-600 dark:text-gray-300 ml-2">
                                            <li>Open MetaMask and navigate to the "Assets" tab.</li>
                                            <li>Click "Import tokens."</li>
                                            <li>Paste the Fely smart contract address <br /><code className="text-primary-500 text-sm break-all font-bold">0xEe997788f625809332BaABB3110BCf1BA7400824</code></li>
                                            <li>Click "Import" again.</li>
                                        </ol>
                                        <p className="font-semibold text-secondary dark:text-white mt-2">
                                            Now you have Fely tokens safely stored in your MetaMask wallet!
                                        </p>
                                    </div>
                                </div>
                            </RevealAnimation>

                            {/* Disclaimer */}
                            <RevealAnimation delay={0.6}>
                                <div className="bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/20 rounded-[20px] p-6 text-center">
                                    <p className="text-red-500 text-sm">
                                        <strong>Disclaimer:</strong> Remember, this guide is for informational purposes only and doesn't constitute financial advice. Always conduct your research before investing in any cryptocurrency.
                                    </p>
                                </div>
                            </RevealAnimation>

                        </div>
                    </div>

                </div>
            </section>

        </main>
    );
};

export default GetFelysiumPage;
