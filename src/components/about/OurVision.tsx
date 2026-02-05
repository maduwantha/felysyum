import heroImageImg from '@public/images/felysyum_hero_v3.jpg';
import avatar1Img from '@public/images/ns-img-359.png';
import avatar2Img from '@public/images/ns-img-360.png';
import avatar3Img from '@public/images/ns-img-361.png';
import heroImageDarkImg from '@public/images/felysyum_hero_v3.jpg';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const OurVision = () => {
  return (
    <section className="pt-14 pb-14 md:pt-16 md:pb-16 lg:pt-[88px] lg:pb-[88px] xl:pt-[100px] xl:pb-[100px]">
      <div className="main-container space-y-16 md:space-y-[100px]">
        <div className="space-y-3 text-center">
          <RevealAnimation delay={0.2}>
            <span className="badge badge-cyan mb-5">Our Ecosystem</span>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <h2>Future Ecosystem Platforms</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <p className="mx-auto max-w-[806px]">
              Felysyum is not just a token; it's a comprehensive ecosystem designed to empower every aspect of digital life. From education to commerce, and innovation to charity, we are building the future of Web3.
            </p>
          </RevealAnimation>
        </div>
        {/*  */}
        <div className="grid grid-cols-12 gap-y-14 xl:gap-x-24">
          <div className="col-span-12 xl:col-span-8">
            <RevealAnimation delay={0.5}>
              <figure className="mx-auto overflow-hidden rounded-4xl lg:min-h-[424px] lg:max-w-[780px]">
                <Image src={heroImageImg} alt="hero image" className="block w-full dark:hidden" />
                <Image src={heroImageDarkImg} alt="hero image" className="hidden w-full dark:block" />
              </figure>
            </RevealAnimation>
          </div>
          <div className="col-span-12 xl:col-span-4">
            <div className="relative h-full w-full gap-4 max-[400px]:flex-wrap max-[400px]:justify-start max-lg:flex max-lg:justify-between">
              <RevealAnimation delay={0.6}>
                <figure className="size-[140px] overflow-hidden rounded-2xl lg:absolute lg:top-0 lg:left-11 relative">
                  <Image src={avatar1Img} alt="Vision Avatar" className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">Education</span>
                  </div>
                </figure>
              </RevealAnimation>
              <RevealAnimation delay={0.7}>
                <figure className="size-[140px] overflow-hidden rounded-2xl lg:absolute lg:top-[41%] lg:right-[14%] relative">
                  <Image src={avatar2Img} alt="Vision Avatar" className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">Marketplace</span>
                  </div>
                </figure>
              </RevealAnimation>
              <RevealAnimation delay={0.8}>
                <figure className="size-[140px] overflow-hidden rounded-2xl lg:absolute lg:-bottom-22 lg:left-96 xl:bottom-0 xl:left-0 relative">
                  <Image src={avatar3Img} alt="Vision Avatar" className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">Innovation</span>
                  </div>
                </figure>
              </RevealAnimation>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

OurVision.displayName = 'OurVision';
export default OurVision;
