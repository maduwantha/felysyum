import Link from 'next/link';
import clientLogo01 from '@public/images/icons/01.svg';
import clientLogo02 from '@public/images/icons/02.svg';
import clientLogo04 from '@public/images/icons/04.svg';
import clientLogo05 from '@public/images/icons/05.svg';
import clientLogo06 from '@public/images/icons/06.svg';
import clientLogo07 from '@public/images/icons/07.svg';
import clientLogo08 from '@public/images/icons/08.svg';
import clientLogo09 from '@public/images/icons/09.svg';
import clientLogo10 from '@public/images/icons/10.svg';
import clientLogo11 from '@public/images/icons/11.svg';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import RevealAnimation from '../animation/RevealAnimation';

const clientLogos = [
  { image: clientLogo01, alt: 'Client logo 01' },
  { image: clientLogo02, alt: 'Client logo 02' },
  { image: clientLogo04, alt: 'Client logo 04' },
  { image: clientLogo05, alt: 'Client logo 05' },
  { image: clientLogo06, alt: 'Client logo 06' },
  { image: clientLogo07, alt: 'Client logo 07' },
  { image: clientLogo08, alt: 'Client logo 08' },
  { image: clientLogo09, alt: 'Client logo 09' },
  { image: clientLogo10, alt: 'Client logo 10' },
  { image: clientLogo11, alt: 'Client logo 11' },
];

const Clients = () => {
  return (
    <section className="py-[50px] md:py-[80px] lg:py-[100px] bg-background-2 dark:bg-background-5">
      <div className="main-container">
        <div className="space-y-14">
          <RevealAnimation delay={0.2}>
            <h2 id="trusted-businesses-heading" className="text-center text-heading-5 md:text-heading-3">
              Featured on Top Crypto Platforms
            </h2>
          </RevealAnimation>
          {/* clients marquee */}
          <div className="space-y-7">
            <RevealAnimation delay={0.3}>
              <article className="relative max-w-[1200px] mx-auto">
                <div className="absolute left-0 top-0 h-full w-[8%] bg-gradient-to-r from-background-2 to-background-2/20 dark:to-background-5/20 dark:from-background-5 z-40" />
                <div className="absolute right-0 top-0 h-full w-[8%] bg-gradient-to-l from-background-2 to-background-2/20 dark:to-background-5/20 dark:from-background-5 z-40" />
                <Marquee pauseOnHover autoFill speed={40}>
                  <div className="flex items-center justify-center gap-8">
                    {clientLogos.map((logo, index) => (
                      <figure className="min-w-[150px] md:min-w-[210px] h-[60px] flex items-center justify-center first:ml-8" key={index}>
                        <Image src={logo.image} alt={logo.alt} className="w-auto h-full max-h-[60px] object-contain" />
                      </figure>
                    ))}
                  </div>
                </Marquee>
              </article>
            </RevealAnimation>

            <RevealAnimation delay={0.4}>
              <article className="relative max-w-[900px] mx-auto">
                <div className="absolute left-0 top-0 h-full w-[3%] bg-gradient-to-r from-background-2 to-background-2/20 dark:to-background-5/20 dark:from-background-5 z-40" />
                <div className="absolute right-0 top-0 h-full w-[3%] bg-gradient-to-l from-background-2 to-background-2/20 dark:to-background-5/20 dark:from-background-5 z-40" />
                <div>
                  <Marquee pauseOnHover autoFill direction="right" speed={40}>
                    <div className="flex items-center justify-center gap-8">
                      {clientLogos.map((logo, index) => (
                        <figure className="min-w-[150px] md:min-w-[210px] h-[60px] flex items-center justify-center first:ml-8" key={index}>
                          <Image src={logo.image} alt={logo.alt} className="w-auto h-full max-h-[60px] object-contain" />
                        </figure>
                      ))}
                    </div>
                  </Marquee>
                </div>
              </article>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
