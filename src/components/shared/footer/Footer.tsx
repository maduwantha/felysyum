import RevealAnimation from '@/components/animation/RevealAnimation';
import { footerLinks } from '@/data/footer-data';
import { cn } from '@/utils/cn';
import bgGradientImg from '@public/images/ns-img-524.png';
import FelysyumLogo from '@public/images/shared/felysyum-logo.png';
import Image from 'next/image';
import Link from 'next/link';
import { FaDiscord, FaLinkedin, FaMedium, FaReddit, FaXTwitter } from 'react-icons/fa6';
import ThemeToggle from '../ThemeToggle';
import FooterDivider from './FooterDivider';

const Footer = () => {
  return (
    <footer className="dark:bg-background-8 relative overflow-hidden bg-white">
      <div className="main-container">
        <RevealAnimation delay={0.7} offset={100} direction="right">
          <figure
            className={cn(
              'pointer-events-none absolute top-[-237px] right-[-321px] !block size-[600px] rotate-[-38deg] overflow-hidden select-none md:top-[-485px] md:right-[-693px] md:size-[1220px]',
            )}>
            <Image src={bgGradientImg} alt="gradient-img" className="h-full w-full object-cover" />
          </figure>
        </RevealAnimation>

        <div className="grid grid-cols-12 justify-between gap-x-0 gap-y-16 pt-16 pb-16 lg:gap-x-8 xl:gap-x-0 xl:pt-[100px]">
          <div className="col-span-12 lg:col-span-4">
            <RevealAnimation delay={0.3}>
              <div className="xl:max-w-[306px]">
                <figure>
                  <Image src={FelysyumLogo} alt="Felysyum" className="w-32" />
                </figure>
                <p className="text-secondary dark:text-accent mt-4 mb-7">
                  Forge your legend in the digital gold rush. Felysyum is the hero's crypto for a
                  creator-powered utopia. Learn, launch, and thrive.
                </p>
                <div className="flex items-center gap-3">
                  <Link target="_blank" href="https://medium.com/@felysyumfely" className="footer-social-link">
                    <span className="sr-only">Medium</span>
                    <FaMedium className="text-xl text-secondary dark:text-accent" />
                  </Link>
                  <div className="bg-stroke-1 dark:bg-stroke-8 h-5 w-px"></div>
                  <Link target="_blank" href="https://www.linkedin.com/company/102992887" className="footer-social-link">
                    <span className="sr-only">LinkedIn</span>
                    <FaLinkedin className="text-xl text-secondary dark:text-accent" />
                  </Link>
                  <div className="bg-stroke-1 dark:bg-stroke-8 h-5 w-px"></div>
                  <Link target="_blank" href="https://x.com/felysyum" className="footer-social-link">
                    <span className="sr-only">X (Twitter)</span>
                    <FaXTwitter className="text-xl text-secondary dark:text-accent" />
                  </Link>
                  <div className="bg-stroke-1 dark:bg-stroke-8 h-5 w-px"></div>
                  <Link target="_blank" href="https://discord.com/channels/1245708794927906866/1245708794927906869" className="footer-social-link">
                    <span className="sr-only">Discord</span>
                    <FaDiscord className="text-xl text-secondary dark:text-accent" />
                  </Link>
                  <div className="bg-stroke-1 dark:bg-stroke-8 h-5 w-px"></div>
                  <Link target="_blank" href="https://www.reddit.com/r/felysyum/" className="footer-social-link">
                    <span className="sr-only">Reddit</span>
                    <FaReddit className="text-xl text-secondary dark:text-accent" />
                  </Link>
                </div>
              </div>
            </RevealAnimation>
          </div>
          <div className="col-span-12 grid grid-cols-12 gap-x-0 gap-y-8 lg:col-span-8">
            {footerLinks.map(({ title, links }, index) => (
              <div className="col-span-12 md:col-span-6 lg:col-span-3" key={title}>
                <RevealAnimation delay={0.4 + index * 0.1}>
                  <div className="space-y-8">
                    <p className="sm:text-heading-6 text-tagline-1 text-secondary dark:text-accent font-normal">
                      {title}
                    </p>
                    <ul className="space-y-5">
                      {links.map(({ label, href, target }) => (
                        <li key={label}>
                          <Link href={href} target={target} className="footer-link-v2">
                            {label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </RevealAnimation>
              </div>
            ))}
          </div>
        </div>
        <div className="relative overflow-hidden pt-6 pb-[60px] text-center">
          <FooterDivider className="bg-stroke-2 dark:bg-accent/5" />
          <RevealAnimation delay={0.7} offset={10} start="top 105%">
            <p className="text-secondary dark:text-accent/60">
              Copyright &copy; {new Date().getFullYear()} Felysyum. All rights reserved.
            </p>
          </RevealAnimation>
        </div>
      </div>
      {process.env.NODE_ENV === 'development' && <ThemeToggle />}
    </footer>
  );
};
Footer.displayName = 'Footer';
export default Footer;
