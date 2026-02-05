import BuyFelySection from '@/components/buy/BuyFelySection';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import { MouseEvent } from 'react';

export const metadata: Metadata = {
    ...defaultMetadata,
    title: 'Buy & Stake Felysyum | Felysyum',
    description: 'Buy Felysyum (FELY) tokens or stake them to earn rewards.',
};

const Page = () => {

    return (
        <main className="bg-background-3 dark:bg-background-7 min-h-screen pt-32 pb-20">
            <div className="mx-auto w-full max-w-[1290px] px-4">
                <div className="mb-8 text-center">
                    <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
                        BUY FELYSYUM
                    </h1>
                </div>
                <BuyFelySection />
            </div>
        </main>
    );
};

export default Page;
