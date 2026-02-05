import TokenSales from '@/components/tokonomics/TokenSales';
import TokenomicsBreakdown from '@/components/tokonomics/TokenomicsBreakdown';
import TokenomicsChart from '@/components/tokonomics/TokenomicsChart';
import AuditSection from '@/components/tokonomics/AuditSection';
import AuditPdfViewer from '@/components/tokonomics/AuditPdfViewer';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Tokonomics - Felysyum',
    description: 'Felysyum Tokenomics and Distribution Details',
};

const TokonomicsPage = () => {
    return (
        <main className="bg-background-3 dark:bg-background-5 min-h-screen pt-[180px] pb-20">
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Tokonomics</h1>
                <p className="text-lg text-gray-400">Understanding our value distribution.</p>
            </div>
            <TokenSales />
            <TokenomicsChart />
            <TokenomicsBreakdown />
            <AuditSection />
            <AuditPdfViewer />
        </main>
    );
};

export default TokonomicsPage;
