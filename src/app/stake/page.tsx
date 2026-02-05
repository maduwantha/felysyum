import StakeFelySection from '@/components/buy/StakeFelySection';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
    ...defaultMetadata,
    title: 'Stake Felysyum | Felysyum',
    description: 'Stake your Felysyum (FELY) tokens to earn rewards.',
};

const Page = () => {
    return (
        <main className="bg-background-3 dark:bg-background-7 min-h-screen pt-32 pb-20">
            <div className="mx-auto w-full max-w-[1290px] px-4">
                <div className="mb-8 text-center">
                    <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
                        STAKE FELYSYUM
                    </h1>
                </div>
                <StakeFelySection />
            </div>
        </main>
    );
};

export default Page;
