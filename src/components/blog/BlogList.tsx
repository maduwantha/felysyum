import { IBlogPost } from '@/interface';
import RevealAnimation from '../animation/RevealAnimation';
import PaginationWrapper from './PaginationWrapper';

interface BlogListProps {
  blogs: IBlogPost[];
  title?: string;
  description?: string;
  baseUrl?: string;
}

const BlogList = ({ blogs, title, description, baseUrl = '/blog' }: BlogListProps) => {
  return (
    <section className="py-14 md:py-16 lg:py-[88px] xl:py-[100px]">
      <div className="main-container">
        {(title || description) && (
          <div className="mb-10 space-y-3 text-center md:mb-[70px]">
            {title && (
              <RevealAnimation delay={0.1}>
                <h2>{title}</h2>
              </RevealAnimation>
            )}
            {description && (
              <RevealAnimation delay={0.2}>
                <p className="mx-auto max-w-[738px]">
                  {description}
                </p>
              </RevealAnimation>
            )}
          </div>
        )}

        {/* Blog grid with pagination wrapper */}
        <PaginationWrapper blogs={blogs} baseUrl={baseUrl} />
      </div>
    </section>
  );
};

export default BlogList;
