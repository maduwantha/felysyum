import Blog from '@/components/home/Blog';
import CTA from '@/components/home/CTA';
import Clients from '@/components/home/Clients';
import DownloadApp from '@/components/home/DownloadApp';
import GetStarted from '@/components/home/GetStarted';
import Hero from '@/components/home/Hero';

import Marketplace from '@/components/home/Marketplace';
import MeetOurTeam from '@/components/home/MeetOurTeam';
import Solutions from '@/components/home/Solutions';
import ProcessStep from '@/components/process/ProcessStep';
import Steps from '@/components/home/Steps';
import Tools from '@/components/home/Tools';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Felysyum : Elysiums Digital Gold',
};

const page = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <Hero />

      <MeetOurTeam />
      <Solutions />
      <Clients />
      <Tools />
      <ProcessStep />
      <GetStarted />
      {/* <DownloadApp /> */}
      <Steps />
      {/* <Blog /> */}
      <Marketplace />

      {/* <CTA /> */}
    </main>
  );
};

export default page;
