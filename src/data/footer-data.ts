import { FooterData } from '@/interface';

export const footerLinks: FooterData[] = [
  {
    title: 'About',
    links: [
      { label: 'Behind the Story', href: '/about' },
      { label: 'White Paper', href: '/whitepaper' },
      { label: 'Team', href: '/team' },
    ],
  },
  {
    title: 'Insight',
    links: [
      { label: 'Concept', href: '/concept' },
      { label: 'Road Map', href: '/roadmap' },

      { label: 'Token Distribution', href: '/token-distribution' },
    ],
  },
  {
    title: 'Products',
    links: [
      { label: 'Skillfullhub', href: 'https://skillfullhub.com/' },
      { label: 'Felyzone', href: 'http://felyzone.com/' },
      { label: 'Felynova', href: 'https://felynova.com/' },
      { label: 'Aidora', href: 'http://aidora.care/' },
      { label: 'Fely Wallet', href: 'http://felywallet.com/' },
    ],
  },
  {
    title: 'Quick Links',
    links: [
      { label: 'Buy FELY', href: '/buy' },
      { label: 'Announcements', href: '/announcement' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact', href: '/contact-us' },
    ],
  },
];
