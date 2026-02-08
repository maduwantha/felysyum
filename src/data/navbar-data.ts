import { MobileMenuGroup } from '@/components/shared/mobile-menu/MobileMenu';
import { FooterOneData } from '@/interface';

export const mobileMenuData: MobileMenuGroup[] = [
  {
    id: 'elysium',
    title: 'Elysium',
    href: '/',
  },
  {
    id: 'fely',
    title: 'FELY',
    submenu: [
      { id: 'buy-fely', label: 'Buy Fely', href: '/buy' },
      { id: 'stake-fely', label: 'Stake Fely', href: '/stake' },
    ],
  },
  {
    id: 'about',
    title: 'About',
    submenu: [
      { id: 'behind-the-story', label: 'Behind the Story', href: '/about' },
      { id: 'white-paper', label: 'White Paper', href: '/whitepaper' },
      { id: 'team', label: 'Team', href: '/team' },
    ],
  },
  {
    id: 'insight',
    title: 'Insight',
    submenu: [
      { id: 'concept', label: 'Concept', href: '/concept' },
      { id: 'road-map', label: 'Road Map', href: '/road-map' },
      { id: 'tokenomics', label: 'Tokenomics', href: '/tokenomics' },
      { id: 'token-distribution', label: 'Token Distribution', href: '/token-distribution' },
    ],
  },
  {
    id: 'products',
    title: 'Products',
    submenu: [
      { id: 'skillfullhub', label: 'Skillfullhub', href: 'https://skillfullhub.com/', target: '_blank' },
      { id: 'felyzone', label: 'Felyzone', href: 'http://felyzone.com/', target: '_blank' },
      { id: 'felynova', label: 'Felynova', href: 'https://felynova.com/', target: '_blank' },
      { id: 'aidora', label: 'Aidora', href: 'http://aidora.care/', target: '_blank' },
      { id: 'fely-wallet', label: 'Fely Wallet', href: 'http://felywallet.com/', target: '_blank' },
    ],
  },
  {
    id: 'announcements',
    title: 'Announcements',
    href: '/announcement',
  },

  {
    id: 'contact',
    title: 'Contact',
    href: '/contact-us',
  },
  {
    id: 'connect',
    title: 'Connect',
    href: '/signup',
  },
];

export const footerData: FooterOneData[] = [
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Career', href: '/career' },
      { label: 'Case Studies', href: '/case-study' },
      { label: 'Contact Us', href: '/contact-us' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'FAQ', href: '/faq' },
      { label: 'Documentation', href: '/documentation' },
      { label: 'Tutorial', href: '/tutorial' },
      { label: 'Community', href: '/community' },
    ],
  },
  {
    title: 'Legal Policies',
    links: [
      { label: 'Terms & Conditions', href: '/terms-conditions' },
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Refund Policy', href: '/refund-policy' },
      { label: 'GDPR Compliance', href: '/gdpr' },
      { label: 'Affiliate Policy', href: '/affiliate-policy' },
    ],
  },
];
