
import { CalendarIcon, ClockIcon } from '@/icons';
import { IBlogPost } from '@/interface';
import Image from 'next/image';
import Link from 'next/link';
import LinkButton from '../ui/button/LinkButton';

interface BlogCardProps {
  blog: IBlogPost;
  baseUrl?: string;
}

export const BlogCard = ({ blog, baseUrl = '/blog' }: BlogCardProps) => {
  return (
    <article className="group">
      <div className="bg-background-1 dark:bg-background-5 relative scale-100 overflow-hidden rounded-[20px] transition-transform duration-500 hover:scale-[102%] hover:transition-transform hover:duration-500">
        <figure className="h-[250px] max-w-full overflow-hidden rounded-b-[20px] xl:h-[310px]">
          <Image
            src={blog.thumbnail}
            alt={blog.title}
            loading="lazy"
            className="h-full w-full object-cover object-center"
            width={310}
            height={310}
          />
        </figure>
        <div className="space-y-4 rounded-b-[20px] p-4 md:p-6 lg:p-8">
          <div className="inline-block">
            <span className="badge badge-cyan" aria-label="Article category">
              {blog.tag}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <time
              className="text-tagline-2 text-secondary/60 dark:text-accent/60 flex items-center gap-2 font-medium"
              dateTime={blog.publishDate}>
              <CalendarIcon className="size-5" />
              {blog.publishDate}
            </time>
            <div aria-hidden="true" className="bg-stroke-2 dark:bg-stroke-6 inline-block h-3 w-px" />
            <time
              className="text-tagline-2 text-secondary/60 dark:text-accent/60 flex items-center gap-2 font-medium"
              dateTime="PT1M">
              <ClockIcon className="size-5.5" />
              {blog.readTime}
            </time>
          </div>
          <h3 className="sm:text-heading-5 text-tagline-1 line-clamp-2 min-h-[3rem] font-normal">
            <Link
              href={`${baseUrl}/${blog.slug}`}
              aria-label={`Read full article about ${blog.title}`}>
              {blog.title}
            </Link>
          </h3>
          <div className="mt-8">
            <LinkButton
              href={`${baseUrl}/${blog.slug}`}
              className="btn btn-md btn-white hover:btn-primary dark:btn-transparent inline-block"
              aria-label={`Read full article about ${blog.title}`}>
              Read more
            </LinkButton>
          </div>
        </div>
      </div>
    </article>
  );
};
