
import BlogContent from '@/components/blog-details/BlogContent';
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
        </main>
    );
};

export default page;
