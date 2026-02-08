
import BlogList from '@/components/blog/BlogList';
import RevealAnimation from '@/components/animation/RevealAnimation';

import { IBlogPost } from '@/interface';
import getMarkDownData from '@/utils/getMarkDownData';
import { Metadata } from 'next';
import { defaultMetadata } from '@/utils/generateMetaData';

export const metadata: Metadata = {
    ...defaultMetadata,
    title: 'Announcements - Felysyum',
    description: 'Stay updated with the latest news, updates, and announcements from Felysyum.',
};

const AnnouncementPage = () => {
    const announcements = getMarkDownData<IBlogPost & { [key: string]: unknown }>(
        'src/data/announcements',
        true,
        'publishDate'
    );

    return (
        <main className="bg-[#181D26]">
            <section className="pt-32 pb-14 sm:pt-36 md:pt-42 md:pb-16 lg:pb-[88px] xl:pt-[180px] xl:pb-[100px]">
                <div className="main-container">
                    <div className="mx-auto max-w-[700px] space-y-3 text-center">
                        <RevealAnimation delay={0.1}>
                            <h1 className="text-4xl md:text-5xl font-bold">Announcements</h1>
                        </RevealAnimation>
                        <RevealAnimation delay={0.3}>
                            <p className="text-secondary dark:text-gray-400">Keep up with the latest updates from the Felysyum ecosystem.</p>
                        </RevealAnimation>
                    </div>
                </div>
            </section>
            <BlogList
                blogs={announcements}
                baseUrl="/announcement"
                cardType="announcement"
            />
        </main>
    );
};

export default AnnouncementPage;
