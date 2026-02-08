'use client';
'use client';
import { LuGraduationCap, LuStore, LuSettings, LuBanknote, LuWallet } from 'react-icons/lu';
import { cn } from '@/utils/cn';
import Link from 'next/link';
import type { ComponentType } from 'react';
import HoverBgTransform from '../hover-bg-transform';

type EngageLink = {
  title: string;
  description: string;
  href: string;
  icon: ComponentType;
  target?: string;
};

const engageLinks: EngageLink[] = [
  {
    title: 'Skillfullhub',
    description: 'skillfullhub.com',
    href: 'https://skillfullhub.com/',
    icon: () => <LuGraduationCap strokeWidth={1.25} className="size-6" />,
    target: '_blank',
  },
  {
    title: 'Felyzone',
    description: 'felyzone.com',
    href: 'http://felyzone.com/',
    icon: () => <LuStore strokeWidth={1.25} className="size-6" />,
    target: '_blank',
  },
  {
    title: 'Felynova',
    description: 'felynova.com',
    href: 'https://felynova.com/',
    icon: () => <LuSettings strokeWidth={1.25} className="size-6" />,
    target: '_blank',
  },
  {
    title: 'Aidora',
    description: 'aidora.care',
    href: 'http://aidora.care/',
    icon: () => <LuBanknote strokeWidth={1.25} className="size-6" />,
    target: '_blank',
  },
  {
    title: 'Fely Wallet',
    description: 'felywallet.com',
    href: 'http://felywallet.com/',
    icon: () => <LuWallet strokeWidth={1.25} className="size-6" />,
    target: '_blank',
  },
];

const EngageMenu = ({
  menuDropdownId,
  setMenuDropdownId,
}: {
  menuDropdownId: string | null;
  setMenuDropdownId: (id: string | null) => void;
}) => {
  return (
    <div>
      <div
        className={cn(
          'dropdown-menu-bridge pointer-events-none absolute top-full left-1/2 z-40 h-3 w-full min-w-[300px] -translate-x-1/2 bg-transparent opacity-0',
          menuDropdownId === 'engage-mega-menu' ? '!pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
        )}
      />
      <ul
        id="engage-dropdown-menu"
        className={cn(
          'dropdown-menu dark:bg-background-6 shadow-14 border-stroke-1/50 dark:border-background-7 pointer-events-none absolute top-full left-1/2 z-50 mt-2 w-[300px] -translate-x-1/2 space-y-2.5 rounded-[20px] border bg-white p-3 opacity-0 transition-all duration-300',
          menuDropdownId === 'engage-mega-menu'
            ? '!pointer-events-auto translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-2.5 opacity-0',
        )}>
        {engageLinks.map(({ title, description, href, icon: Icon, target }) => (
          <li key={title}>
            <Link
              href={href}
              target={target}
              onClick={() => setMenuDropdownId(null)}
              className="group relative flex items-start gap-3 rounded-[10px] p-3 transition-all duration-300">
              <HoverBgTransform className="group-hover:opacity-100" />
              <div className="dark:bg-background-6 shadow-14 border-stroke-1 dark:border-background-7 relative z-10 flex size-11 items-center justify-center rounded-[10px] border bg-white p-3">
                <Icon />
              </div>
              <div className="relative z-10">
                <p className="text-tagline-1 text-secondary dark:text-accent font-normal">{title}</p>
                <p className="text-tagline-3 text-secondary/60 dark:text-accent/60 font-normal">{description}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

EngageMenu.displayName = 'EngageMenu';
export default EngageMenu;
