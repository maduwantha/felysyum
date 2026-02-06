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
      { label: 'Road Map', href: '/road-map' },

      { label: 'Token Distribution', href: '/token-distribution' },
    ],
  },
  {
    title: 'Products',
    links: [
      { label: 'Skillfullhub', target: '_blank', href: 'https://skillfullhub.com/' },
      { label: 'Felyzone', target: '_blank', href: 'http://felyzone.com/' },
      { label: 'Felynova', target: '_blank', href: 'https://felynova.com/' },
      { label: 'Aidora', target: '_blank', href: 'http://aidora.care/' },
      { label: 'Fely Wallet', target: '_blank', href: 'http://felywallet.com/' },
    ],
  },
  {
    title: 'Quick Links',
    links: [
      { label: 'Buy FELY', href: '/buy' },
      { label: 'Stake FELY', href: '/stake' },
      { label: 'Announcements', href: '/announcement' },
      { label: 'Contact', href: '/contact-us' },
    ],
  },
];
