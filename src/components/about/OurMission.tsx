import authorAvatarBgImg from '@public/images/ns-author-avatar-bg.png';
import avatar1Img from '@public/images/ns-avatar-1.png';
import avatar2Img from '@public/images/ns-avatar-2.png';
import avatar3Img from '@public/images/ns-avatar-3.png';
import businessGrowthCardImg from '@public/images/ns-img-366.png';
import gradient4Img from '@public/images/ns-img-496.png';
import businessGrowthCardDarkImg from '@public/images/ns-img-dark-210.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const OurMission = () => {
  return (
    <section className="pt-14 pb-20 md:pt-16 md:pb-28 lg:pt-[88px] lg:pb-44 xl:pt-[100px] xl:pb-[200px]">
      <div className="main-container">
        <div className="grid grid-cols-12 items-center gap-y-14 xl:gap-x-28">
          <div className="col-span-12 mx-4 lg:col-span-6 xl:mx-0">
            <div className="space-y-3">
              <RevealAnimation delay={0.1}>
                <span className="badge badge-cyan mb-5">Our Story</span>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <h2>From Myth to Digital Reality</h2>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <div className="space-y-4 text-justify">
                  <p>
                    In Greek mythology, <strong>Elysium</strong> was a paradise reserved for heroes, a place of perfect happiness and eternal life. Inspired by this legend, <strong>FELYSYUM (FELY)</strong> is our digital paradise—a blockchain-powered ecosystem designed for the heroes of the modern world.
                  </p>
                  <p>
                    We are building a future-ready environment where education, innovation, commerce, and compassion coexist. Our mission is to empower individuals through decentralized technology, creating a seamless bridge between the traditional world and the limitless possibilities of Web3.
                  </p>
                </div>
              </RevealAnimation>
            </div>
          </div>
          {/*  */}
          <div className="relative col-span-12 mx-4 lg:col-span-6 xl:mx-0">
            {/* Business Growth Card */}
            <RevealAnimation delay={0.5} useSpring={true} duration={2.5}>
              <figure className="absolute top-[78%] left-1/2 z-20 max-w-[360px] -translate-x-1/2 overflow-hidden rounded-[12px]">
                <Image
                  src={businessGrowthCardImg}
                  alt="business growth card"
                  className="block h-full w-full dark:hidden"
                />

              </figure>
            </RevealAnimation>
            <RevealAnimation delay={0.6}>
              <div className="dark:bg-background-8 shadow-2 relative z-10 flex h-full min-h-[380px] items-center justify-center overflow-hidden rounded-[20px] bg-white/60 p-[26px] backdrop-blur-[20px]">
                {/* gradient bg */}
                <RevealAnimation delay={0.7}>
                  <figure className="pointer-events-none absolute right-[-33%] bottom-[-54%] -z-10 w-full max-w-[500px] rotate-180 select-none max-[376px]:bottom-[-45%] md:right-[-30%] md:bottom-[-112%] md:max-w-[700px] lg:bottom-[-80%] xl:right-[-32%] xl:bottom-[-90%]">
                    <Image src={gradient4Img} alt="hero author bg" className="size-full object-cover" />
                  </figure>
                </RevealAnimation>
                <div className="-mt-20 text-center">
                  <div className="mb-4 flex items-center justify-center gap-4">
                    <div className="group flex -space-x-3.5">

                    </div>
                  </div>
                  <h6 className="text-secondary dark:text-accent leading-[1 .5] mb-1 text-xl font-normal">
                    Polygon Network
                  </h6>
                  <p className="text-secondary/60 dark:text-accent/60">Fast & Low-cost transactions</p>
                </div>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

OurMission.displayName = 'OurMission';
export default OurMission;
