import AboutMap from '@/components/about/AboutMap';
import AboutFeatures from '@/components/about/AboutFeatures';
import StandOutFeatures from '@/components/about/StandOutFeatures';
import CTA from '@/components/about/CTA';
import Feature from '@/components/about/Feature';
import Innovation from '@/components/about/Innovation';
import OurMission from '@/components/about/OurMission';
import OurVision from '@/components/about/OurVision';
import Teams from '@/components/about/Teams';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'About Us - Smart Solutions || NextSaaS',
};

const page = () => {
  return (
    <main className="bg-background-3 dark:bg-background-5">
      <Feature />
      <OurMission />
      <Innovation />
      <AboutFeatures />
      <StandOutFeatures />
    </main>
  );
};

export default page;
