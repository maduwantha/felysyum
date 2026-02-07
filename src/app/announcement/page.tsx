
import BlogHeader from '@/components/blog/BlogHeader';
import BlogList from '@/components/blog/BlogList';

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
    const announcements = getMarkDownData<IBlogPost & { [key: string]: unknown }>('src/data/announcements');
    const featuredAnnouncements = announcements.slice(0, 3); // Take first 3 as featured

    return (
        <main className="bg-background-3 dark:bg-background-5">
            <BlogHeader
                featuredBlogs={featuredAnnouncements}
                title="Announcements"
                subtitle="Keep up with the latest updates from the Felysyum ecosystem."
                baseUrl="/announcement"
            />
            <BlogList
                blogs={announcements}
                title="All Announcements"
                baseUrl="/announcement"
            />
        </main>
    );
};

export default AnnouncementPage;
