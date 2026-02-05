import { IBlogPost } from '@/interface';
import RevealAnimation from '../animation/RevealAnimation';
import FeaturedBlogSwiper from './FeaturedBlogSwiper';

interface BlogHeaderProps {
    featuredBlogs: IBlogPost[];
    title: string;
    subtitle: string;
    baseUrl?: string;
}

const BlogHeader = ({ featuredBlogs, title, subtitle, baseUrl = '/blog' }: BlogHeaderProps) => {
    return (
        <section className="pt-32 pb-14 sm:pt-36 md:pt-42 md:pb-16 lg:pb-[88px] xl:pt-[180px] xl:pb-[100px]">
            <div className="main-container">
                <div className="space-y-14 md:space-y-[70px]">
                    <div className="mx-auto max-w-[700px] space-y-3 text-center">
                        <RevealAnimation delay={0.1}>
                            <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
                        </RevealAnimation>
                        <RevealAnimation delay={0.3}>
                            <p className="text-secondary dark:text-gray-400">{subtitle}</p>
                        </RevealAnimation>
                    </div>
                    {/* Featured blog swiper */}
                    {featuredBlogs.length > 0 && <FeaturedBlogSwiper featuredBlogs={featuredBlogs} baseUrl={baseUrl} />}
                </div>
            </div>
        </section>
    );
};

export default BlogHeader;
