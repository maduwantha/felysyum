import heroImg01Image from '@public/images/fely-d.png';
import heroImg02Image from '@public/images/ns-img-87.png';
import heroImg03Image from '@public/images/ns-img-88.png';
import heroImg04Image from '@public/images/ns-img-89.png';
import heroImg01DarkImage from '@public/images/fely-d.png';
import heroImg02DarkImage from '@public/images/ns-img-dark-60.png';
import heroImg03DarkImage from '@public/images/ns-img-dark-61.png';
import heroImg04DarkImage from '@public/images/ns-img-dark-62.png';
import Image from 'next/image';
import { LuGlobe, LuGraduationCap, LuLandmark } from 'react-icons/lu';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';
import AvatarGroup from './AvatarGroup';
import HeroTextSlider from './HeroTextSlider';
const Hero = () => {
  return (
    <section
      className="bg-[url('/images/ns-img-85.png')] bg-left bg-no-repeat pt-[140px] pb-[120px] md:pt-[160px] lg:bg-top-right lg:pt-[200px] lg:pb-[150px] xl:pb-[200px]"
      aria-label="Hero section">
      <div className="main-container">
        <div className="flex flex-col gap-10 lg:flex-row 2xl:gap-[100px]">
          {/* hero text  */}
          <div className="text-center md:w-full lg:max-w-[570px] lg:text-left xl:max-w-[595px]">


            <RevealAnimation delay={0.1}>
              <HeroTextSlider />
            </RevealAnimation>

          </div>

          {/* hero image  */}
          <div className="relative flex-1 w-full flex justify-center items-center" aria-hidden="true">
            <RevealAnimation delay={0.3} useSpring={true} duration={2}>
              <figure className="relative z-[1] w-full max-w-[450px] h-auto overflow-hidden rounded-[20px]">
                <Image
                  src={heroImg01Image}
                  alt="Hero img 1"
                  className="w-full h-auto object-contain dark:hidden"
                  width={600}
                  height={600}
                  priority
                />
                <Image
                  src={heroImg01DarkImage}
                  alt="Hero img 1"
                  className="hidden w-full h-auto object-contain dark:inline-block"
                  width={600}
                  height={600}
                  priority
                />
              </figure>
            </RevealAnimation>

            {/* <RevealAnimation delay={0.4} useSpring={true} duration={2}>
              <figure className="absolute top-[275px] left-0 z-[2] hidden w-[408px] overflow-hidden rounded-[20px] lg:block">
                <Image
                  src={heroImg02Image}
                  alt="Hero img 2"
                  className="size-full object-cover dark:hidden"
                  width={408}
                  height={408}
                  priority
                />
                <Image
                  src={heroImg02DarkImage}
                  alt="Hero img 2"
                  className="hidden size-full object-cover dark:inline-block"
                  width={408}
                  height={408}
                  priority
                />
              </figure>
            </RevealAnimation>

            <RevealAnimation delay={0.5} useSpring={true} duration={2}>
              <figure className="lp:block relative top-[43px] left-[358px] z-[3] hidden w-[273px] rotate-[-20deg] overflow-hidden">
                <Image
                  src={heroImg03Image}
                  alt="Hero img 3"
                  className="size-full object-cover dark:hidden"
                  width={273}
                  height={273}
                  priority
                />
                <Image
                  src={heroImg03DarkImage}
                  alt="Hero img 3"
                  className="hidden size-full object-cover dark:inline-block"
                  width={273}
                  height={273}
                  priority
                />
              </figure>
            </RevealAnimation>

            <RevealAnimation delay={0.6} useSpring={true} duration={2}>
              <figure className="shadow-4 lp:block relative top-[-115px] left-[401px] z-[4] hidden w-[273px] rotate-[5deg] overflow-hidden">
                <Image
                  src={heroImg04Image}
                  alt="Hero img 4"
                  className="size-full object-cover dark:hidden"
                  width={273}
                  height={273}
                  priority
                />
                <Image
                  src={heroImg04DarkImage}
                  alt="Hero img 4"
                  className="hidden size-full object-cover dark:inline-block"
                  width={273}
                  height={273}
                  priority
                />
              </figure>
            </RevealAnimation>

            <RevealAnimation delay={0.7} useSpring={true} duration={2}>
              <figure className="shadow-4 lp:block relative top-[-310px] left-[450px] z-[3] hidden w-[273px] rotate-[5deg] overflow-hidden">
                <Image
                  src={heroImg04Image}
                  alt="Hero img 5"
                  className="size-full object-cover dark:hidden"
                  width={273}
                  height={273}
                  priority
                />
                <Image
                  src={heroImg04DarkImage}
                  alt="Hero img 5"
                  className="hidden size-full object-cover dark:inline-block"
                  width={273}
                  height={273}
                  priority
                />
              </figure>
            </RevealAnimation> */}
          </div>
        </div>

      </div>

    </section >


  );
};

export default Hero;
