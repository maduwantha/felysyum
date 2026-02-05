import CTA from '@/components/team/CTA';
import GlobalTeam from '@/components/team/GlobalTeam';
import TeamHero from '@/components/team/TeamHero';
import KYCSection from '@/components/team/KYCSection';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Team - Felysyum',
};

const page = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <TeamHero />
      <GlobalTeam />
      <KYCSection />

    </main>
  );
};

export default page;
