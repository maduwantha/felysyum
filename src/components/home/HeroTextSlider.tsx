'use client';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import LinkButton from '../ui/button/LinkButton';
import Image from 'next/image';

const HeroTextSlider = () => {
  return (
    <div className="relative w-full">
      <style>{`
        .hero-text-slider {
          padding-bottom: 15px !important;
        }
        .hero-text-slider .swiper-pagination-bullet {
          background: #888;
        }
        .hero-text-slider .swiper-pagination-bullet-active {
          background: #F59E0B;
        }
        .hero-text-slider .swiper-pagination {
          text-align: left;
          bottom: 0px !important;
        }
        @media (max-width: 1023px) {
          .hero-text-slider .swiper-pagination {
            text-align: center;
          }
        }
      `}</style>
      <Swiper
        className="w-full h-full hero-text-slider"
        slidesPerView={1}
        loop={true}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1000}
        modules={[Autoplay, Pagination, EffectFade]}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
          bottom: 0,
        }}
      >
        {/* Slide 1: Olympus Text (Now First) */}
        <SwiperSlide>
          <div className="w-full h-full">
            <span className="badge badge-white mb-5 mx-auto lg:mx-0 inline-flex border-[#FFD700] text-[#FFD700]">Felysyum’s Official Community</span>
            <h1 className="mb-4 !text-[24px] sm:!text-[30px] md:!text-[36px] lg:!text-[40px] xl:!text-[44px] !leading-tight">
              Forge Your Legacy. Claim Your Title. Earn Your Honor. Rise within the Olympus Honor Legion.
            </h1>
            <p className="mb-4 md:mb-6 lg:max-w-[440px] xl:max-w-[570px] mx-auto lg:mx-0">
              Use Felysyum Ecosystem products, share them with others, build your own community, and unlock more benefits.
            </p>
            <ul className="mt-8 flex flex-col items-center gap-4 md:flex-row md:justify-center lg:justify-start">
              <li className="w-full sm:w-auto">
                <a
                  href="https://olympus.felysyum.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center gap-4 rounded-full bg-white/5 dark:bg-background-8/50 px-6 py-4 border border-white/5 dark:border-background-8/50 hover:border-[#FFD700] dark:hover:border-[#FFD700] transition-all duration-300 w-[90%] sm:w-auto backdrop-blur-md mx-auto sm:mx-0 shadow-sm hover:shadow-lg"
                >
                  <div className="flex items-center justify-center w-10 h-10 overflow-hidden">
                    <Image
                      src="/images/olympus-logo.png"
                      alt="Olympus Logo"
                      width={40}
                      height={40}
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="text-left">
                    <span className="block text-[10px] font-medium text-secondary/60 dark:text-accent/60 uppercase tracking-widest mb-0.5">The Gates are Opening</span>
                    <span className="block text-sm font-bold text-secondary dark:text-white group-hover:text-[#FFD700] dark:group-hover:text-[#FFD700] transition-colors">Enter Paradise</span>
                  </div>
                </a>
              </li>
              <li className="w-full sm:w-auto">
                <a
                  href="https://skillfullhub.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center gap-4 rounded-full bg-white/5 dark:bg-background-8/50 px-6 py-4 border border-white/5 dark:border-background-8/50 hover:border-primary dark:hover:border-primary transition-all duration-300 w-[90%] sm:w-auto backdrop-blur-md mx-auto sm:mx-0 shadow-sm hover:shadow-lg"
                >
                  <div className="flex items-center justify-center w-10 h-10 overflow-hidden rounded-full">
                    <Image
                      src="/images/skillfullhub.png"
                      alt="SkillFullHub Logo"
                      width={40}
                      height={40}
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="text-left">
                    <span className="block text-[10px] font-medium text-secondary/60 dark:text-accent/60 uppercase tracking-widest mb-0.5">Learn & Grow</span>
                    <span className="block text-sm font-bold text-secondary dark:text-white group-hover:text-primary dark:group-hover:text-primary transition-colors">Explore SkillFullHub</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </SwiperSlide>

        {/* Slide 2: Original Felysyum Text (Now Second) */}
        <SwiperSlide>
          <div className="w-full h-full">
            <span className="badge badge-white mb-5 mx-auto lg:mx-0 inline-flex">Felysyum: Smart Money for a New Era</span>
            <h1 className="mb-4 !text-[28px] sm:!text-[36px] md:!text-[44px] lg:!text-[50px] xl:!text-[54px] !leading-tight">
              We're shifting Crypto from digital assets to everyday currency
            </h1>
            <p className="mb-4 md:mb-6 lg:max-w-[440px] xl:max-w-[570px] mx-auto lg:mx-0">
              A complete ecosystem where innovation, education, commerce, and charity come together.
            </p>
            <ul className="mt-8 flex flex-col items-center gap-4 md:flex-row md:justify-center lg:justify-start">
              <li className="w-full sm:w-auto">
                <LinkButton
                  href="/buy"
                  className="btn btn-primary btn-xl hover:btn-secondary dark:hover:btn-white w-[90%] md:w-auto">
                  Buy FELY
                </LinkButton>
              </li>
              <li className="w-full sm:w-auto">
                <LinkButton
                  href="/stake"
                  className="btn btn-white dark:btn-transparent btn-xl hover:btn-primary w-[90%] md:w-auto">
                  Stake FELY
                </LinkButton>
              </li>
            </ul>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroTextSlider;
