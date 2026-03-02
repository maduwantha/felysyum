'use client';

import { IBlogPost } from '@/interface';
import { useState } from 'react';
import RevealAnimation from '../animation/RevealAnimation';
import Pagination from '../shared/Pagination';
import { BlogCard } from './BlogCard';
import { AnnouncementCard } from './AnnouncementCard';

interface PaginationWrapperProps {
    blogs: IBlogPost[];
    baseUrl?: string;
    cardType?: 'blog' | 'announcement';
}

const PaginationWrapper = ({ blogs, baseUrl = '/blog', cardType = 'blog' }: PaginationWrapperProps) => {
    const [currentPage, setCurrentPage] = useState(1);
    const blogsPerPage = 9;

    // Calculate pagination
    const totalPages = Math.ceil(blogs.length / blogsPerPage);
    const startIndex = (currentPage - 1) * blogsPerPage;
    const endIndex = startIndex + blogsPerPage;
    const currentBlogs = blogs?.slice(startIndex, endIndex);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        window.scrollTo({ top: 1620, behavior: 'smooth' });
    };

    const Card = cardType === 'announcement' ? AnnouncementCard : BlogCard;

    const gridClass = cardType === 'announcement'
        ? "grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:gap-[30px]"
        : "grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 xl:gap-[70px]";

    return (
        <>
            {/* Blog grid */}
            <div className={gridClass}>
                {currentBlogs?.map((blog, index) => (
                    <RevealAnimation key={blog?.slug} delay={0.3 + index * 0.1}>
                        <div>
                            <Card blog={blog} baseUrl={baseUrl} />
                        </div>
                    </RevealAnimation>
                ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="mt-14">
                    <RevealAnimation delay={0.6}>
                        <div>
                            <Pagination
                                totalItems={blogs.length}
                                itemsPerPage={blogsPerPage}
                                currentPage={currentPage}
                                onPageChange={handlePageChange}
                                className="mt-14"
                            />
                        </div>
                    </RevealAnimation>
                </div>
            )}
        </>
    );
};

PaginationWrapper.displayName = 'PaginationWrapper';
export default PaginationWrapper;
