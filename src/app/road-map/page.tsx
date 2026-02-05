import CTA from '@/components/about/CTA';
import RoadMapContent from '@/components/road-map/RoadMapContent';
import RoadMapHero from '@/components/road-map/RoadMapHero';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = defaultMetadata;

const RoadMap = () => {
    return (
        <main className="bg-background-3 dark:bg-background-5">
            <RoadMapHero />
            <RoadMapContent />

        </main>
    );
};

export default RoadMap;
