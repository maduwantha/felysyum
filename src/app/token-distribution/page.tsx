import CommonHero from '@/components/shared/CommonHero';
import TokenomicsChart from '@/components/tokonomics/TokenomicsChart';
import TokenDistributionContent from '@/components/token-distribution/TokenDistributionContent';
import TokenHighlights from '@/components/token-distribution/TokenHighlights';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Token Distribution - Felysyum',
    description: 'Felysyum Token Distribution and Allocation Details',
};

const TokenDistributionPage = () => {
    return (
        <main className="min-h-screen pt-[180px] pb-20 bg-background-2 dark:bg-background-6">
            <CommonHero
                title="Token Distribution"
                description="Comprehensive breakdown of Felysyum token allocation and release schedule."
                badge="Tokenomics"
            />
            <TokenHighlights />
            <TokenDistributionContent />
        </main>
    );
};

export default TokenDistributionPage;
