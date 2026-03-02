//white paper hero
import RevealAnimation from '../animation/RevealAnimation';

const Hero = () => {
  return (
    <section className="pt-[100px] pb-16 lg:pt-[140px] lg:pb-20 xl:pt-[170px] xl:pb-28">
      <div className="main-container">
        <div className="space-y-6 text-center">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green-v2">Whitepapers</span>
          </RevealAnimation>
          <div className="space-y-4">
            <RevealAnimation delay={0.2}>
              <h1 className="font-normal">
                Explore  whitepaper. <br></br>Discover our full vision

              </h1>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p>
                Explore our whitepaper for a complete view of the project—tokenomics, distribution, milestones, ecosystem products, and future vision.
              </p>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

Hero.displayName = 'Hero';
export default Hero;
