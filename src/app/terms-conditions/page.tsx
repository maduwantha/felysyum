import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Terms & Conditions - Felysyum',
};

const Page = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7 min-h-[60vh]">
      <section className="pt-32 pb-14 sm:pt-36 md:pt-42 md:pb-16 lg:pb-[88px] xl:pt-[180px] xl:pb-[200px]">
        <div className="main-container text-center">
          <h2 className="text-secondary dark:text-accent mb-4 text-4xl font-bold">Terms & Conditions</h2>
          <p className="text-secondary/60 dark:text-accent/60 text-lg">Coming Soon</p>
        </div>
      </section>
    </main>
  );
};

export default Page;
