import ConceptContent from '@/components/concept/ConceptContent';
import ConceptHero from '@/components/concept/ConceptHero';
import ConceptMission from '@/components/concept/ConceptMission';
import VisionSection from '@/components/concept/VisionSection';
import CTA from '@/components/about/CTA';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
    ...defaultMetadata,
    title: 'Concept - Felysyum',
    description: 'Discover your digital elysium at The Oasis of Legends, a vibrant ecosystem fueled by Felysyum (FELY) cryptocurrency.',
};

const page = () => {
    return (
        <main className="bg-background-3 dark:bg-background-5">
            <ConceptHero />
            <ConceptContent />
            <VisionSection />
            <ConceptMission />


        </main>
    );
};

export default page;
