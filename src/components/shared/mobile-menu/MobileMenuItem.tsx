'use client';

import { useMobileMenuContext } from '@/context/MobileMenuContext';
import { cn } from '@/utils/cn';
import Link from 'next/link';
import { ReactNode } from 'react';

interface MobileMenuItemProps {
  id: string;
  title: string;
  children?: ReactNode;
  hasSubmenu?: boolean;
  href?: string;
}

const MobileMenuItem = ({ id, title, children, hasSubmenu = false, href }: MobileMenuItemProps) => {
  const { activeSubmenu, toggleSubmenu, toggleMenu } = useMobileMenuContext();

  const isActive = activeSubmenu === id;

  const handleToggle = () => {
    if (hasSubmenu) {
      toggleSubmenu(id);
    }
  };

  const handleLinkClick = () => {
    toggleMenu();
  };

  if (href && !hasSubmenu) {
    return (
      <li className="space-y-2">
        <Link
          href={href}
          onClick={handleLinkClick}
          className={cn(
            'flex w-full cursor-pointer items-center justify-between p-2.5 transition-all duration-200',
            'text-tagline-1 text-secondary/60 dark:text-accent/60 hover:text-secondary dark:hover:text-accent font-normal',
          )}>
          {title}
        </Link>
      </li>
    );
  }

  return (
    <li className="space-y-2">
      <button
        onClick={handleToggle}
        className={cn('flex w-full cursor-pointer items-center justify-between p-2.5 transition-all duration-200')}
        aria-expanded={hasSubmenu ? isActive : undefined}
        aria-controls={hasSubmenu ? `submenu-${id}` : undefined}>
        <span
          className={cn(
            'text-tagline-1 ease block font-normal transition-colors duration-300',
            isActive ? 'text-secondary dark:text-accent font-medium' : 'text-secondary/60 dark:text-accent/60',
          )}>
          {title}{' '}
        </span>
        {hasSubmenu && (
          <span
            className={cn(
              'stroke-secondary/60 dark:stroke-accent/60 size-5 transition-transform duration-300 ease-in-out',
              isActive && 'rotate-90',
            )}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none">
              <path d="M8 12L12 8L8 4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        )}
      </button>

      {/* show submenu parent  */}
      {hasSubmenu && children && (
        <div
          id={`submenu-${id}`}
          className={cn(
            'dark:bg-background-7 ml-3.5 w-full overflow-y-hidden bg-white transition-[height,opacity] duration-300 ease-in-out',
            isActive ? 'pointer-events-auto h-fit opacity-100' : 'pointer-events-none h-0 opacity-0',
          )}>
          {/* render submenu  */}
          {children}
        </div>
      )}
    </li>
  );
};

MobileMenuItem.displayName = 'MobileMenuItem';
export default MobileMenuItem;
