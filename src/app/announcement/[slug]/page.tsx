
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

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const slug = (await params).slug;
    const blogContent = getMarkDownContent('src/data/announcements/', slug);

    return {
        ...defaultMetadata,
        title: `${blogContent.data.title} - Felysyum`,
        description: blogContent.data.description,
        openGraph: {
            ...defaultMetadata.openGraph,
            title: `${blogContent.data.title} - Felysyum`,
            description: blogContent.data.description,
            url: `https://dv.felysyum.com/announcement/${slug}`,
            images: [
                {
                    url: `https://dv.felysyum.com${blogContent.data.thumbnail}`,
                    width: 1200,
                    height: 600,
                    alt: blogContent.data.title,
                },
            ],
            type: 'article',
        },
    };
}

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
