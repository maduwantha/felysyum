import { DownArrowIcon, UpArrowIcon } from '@/icons';
import salesAssetImg from '@public/images/ns-img-362.svg';
import satisfiedUserAssetImg from '@public/images/ns-img-363.png';
import satisfiedUserAssetLightImg from '@public/images/ns-img-364.png';
import featureImg from '@public/images/felysyum_hero_v3.jpg';
import badgeImg from '@public/images/ns-img-66.svg';
import salesAssetDarkImg from '@public/images/ns-img-dark-209.svg';
import Image from 'next/image';
import NumberAnimation from '../animation/NumberAnimation';
import RevealAnimation from '../animation/RevealAnimation';

const Feature = () => {
  return (
    <section className="overflow-hidden pt-32 pb-14 sm:pt-36 md:pt-42 md:pb-16 lg:pb-[88px] xl:pt-[180px] xl:pb-[100px]">
      <div className="main-container space-y-14 md:space-y-[70px]">
        <div className="space-y-3 text-center">
          <RevealAnimation delay={0.2}>
            <span className="badge badge-cyan mb-5">About Us</span>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <h2 className="xl:text-heading-1 mx-auto font-medium lg:max-w-[980px]">
              About
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <p className="mx-auto lg:max-w-[904px]">
              Felysyum is born from the myth of Elysium—a heavenly realm in Greek mythology where the world's heroes are reborn in the afterlife. Inspired by this legend, Felysyum envisions a digital paradise for the heroes of the crypto world.It is a bold initiative to build a complete ecosystem powered by our native currency, the FELYSYUM token.
            </p>
          </RevealAnimation>

          <RevealAnimation delay={0.4}>
            <p className="mx-auto lg:max-w-[904px]">
              We are creating a future-ready world where education, innovation, commerce, and compassion come together under one digital roof.
            </p>
          </RevealAnimation>
        </div>


      </div>
    </section>
  );
};

Feature.displayName = 'Feature';
export default Feature;
