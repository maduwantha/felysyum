
import BlogContent from '@/components/blog-details/BlogContent';
import CTA from '@/components/shared/cta/CTA';
import { defaultMetadata } from '@/utils/generateMetaData';
import getMarkDownContent from '@/utils/getMarkDownContent';
import getMarkDownData from '@/utils/getMarkDownData';
import { Metadata } from 'next';

export async function generateStaticParams() {
    const announcements = getMarkDownData('src/data/announcements');
    return announcements.map((post) => ({
        slug: post.slug,
    }));
}

export const metadata: Metadata = {
    ...defaultMetadata,
    title: 'Announcement Details - Felysyum',
};

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const slug = (await params).slug;
    const blogContent = getMarkDownContent('src/data/announcements/', slug);

    return (
        <main className="bg-background-3 dark:bg-background-7">
            <BlogContent blog={blogContent} />
            <CTA
                className="dark:bg-background-7 bg-white"
                badgeClass="!badge-orange-v2"  // Changed to orange to match theme
                badgeText="Join Community"
                ctaHeading="Join the Felysyum Revolution"
                description="Be part of the future of decentralized finance and innovation."
                ctaBtnText="Join Now"
            />
        </main>
    );
};

export default page;
