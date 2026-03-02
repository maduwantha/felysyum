
import { IBlogPost } from '@/interface';
import Image from 'next/image';
import Link from 'next/link';

interface BlogCardProps {
    blog: IBlogPost;
    baseUrl?: string;
}

export const AnnouncementCard = ({ blog, baseUrl = '/blog' }: BlogCardProps) => {
    return (
        <article className="group h-full">
            <div className="bg-background-1 dark:bg-background-5 relative h-full scale-100 overflow-hidden rounded-[20px] transition-transform duration-500 hover:scale-[102%] hover:transition-transform hover:duration-500 flex flex-col">
                <figure className="h-[240px] w-full overflow-hidden">
                    <Image
                        src={blog.thumbnail}
                        alt={blog.title}
                        loading="lazy"
                        className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                        width={600}
                        height={400}
                    />
                </figure>
                <div className="flex flex-col flex-1 p-6 space-y-4">
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-secondary/70 dark:text-accent/70">
                        <span className="badge badge-primary px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider" aria-label="Article category">
                            {blog.tag}
                        </span>
                        <div className="flex items-center gap-2">
                            <span className="font-medium text-primary-500 dark:text-white">{blog.author}</span>
                            <span className="size-1 rounded-full bg-current opacity-50"></span>
                            <time dateTime={blog.publishDate}>{blog.publishDate}</time>
                        </div>
                    </div>

                    <h3 className="text-xl font-bold leading-tight text-heading-card dark:text-white group-hover:text-primary-500 transition-colors">
                        <Link
                            href={`${baseUrl}/${blog.slug}`}
                            aria-label={`Read full article about ${blog.title}`}>
                            {blog.title}
                        </Link>
                    </h3>

                    <p className="text-base text-secondary/80 dark:text-accent/80 line-clamp-3 flex-1 mb-4">
                        {blog.description}
                    </p>

                    <div className="pt-4 mt-auto border-t border-neutral-100 dark:border-neutral-800/50">
                        <Link
                            href={`${baseUrl}/${blog.slug}`}
                            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide px-6 py-2.5 rounded-full border border-neutral-300 dark:border-neutral-700 hover:border-primary-500 hover:bg-primary-500 hover:text-white transition-all duration-300"
                            aria-label={`Read full article about ${blog.title}`}>
                            Read more
                        </Link>
                    </div>
                </div>
            </div>
        </article>
    );
};
