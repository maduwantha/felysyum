
import BlogHeader from '@/components/blog/BlogHeader';
import BlogList from '@/components/blog/BlogList';
import CTA from '@/components/about/CTA';
import { IBlogPost } from '@/interface';
import getMarkDownData from '@/utils/getMarkDownData';
import { Metadata } from 'next';
import { defaultMetadata } from '@/utils/generateMetaData';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Blog - Felysyum',
  description: 'Explore insights, guides, and articles about Felysyum and the crypto world.',
};

const BlogPage = () => {
  const blogs = getMarkDownData<IBlogPost & { [key: string]: unknown }>('src/data/blogs');
  const featuredBlogs = blogs.slice(0, 3);

  return (
    <main className="bg-background-3 dark:bg-background-5">
      <BlogHeader
        featuredBlogs={featuredBlogs}
        title="Felysyum Blog"
        subtitle="Insights, updates, and deep dives into the Felysyum universe."
        baseUrl="/blog"
      />
      <BlogList
        blogs={blogs}
        title="Latest Articles"
        description="Discover our latest thinking, tutorials, and industry insights."
        baseUrl="/blog"
      />
      <CTA />
    </main>
  );
};

export default BlogPage;
