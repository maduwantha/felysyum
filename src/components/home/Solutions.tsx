import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';
import { LuRoute, LuChartPie, LuHandCoins } from 'react-icons/lu';

const Solutions = () => {
  return (
    <section className="bg-background-2 dark:bg-background-5 py-[50px] md:py-[80px] lg:py-[100px]">
      <div className="main-container">
        <div className="space-y-[35px] md:space-y-[70px]">
          {/* heading  */}
          <div className="space-y-3 text-center">
            <RevealAnimation delay={0.2}>
              <h2>Building the Future: How Our Token Works</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p>Journey & Growth, Roadmap, Tokenomics & Distribution</p>
            </RevealAnimation>
          </div>
          <div className="space-y-14">
            {/* cards  */}
            {/* cards  */}
            <div className="grid grid-cols-1 gap-9 md:grid-cols-2 lg:grid-cols-3">
              <RevealAnimation delay={0.4}>
                <div className="dark:bg-background-8 w-full max-w-[405px] space-y-6 rounded-[20px] bg-white p-8">
                  <LuRoute strokeWidth={0.75} className="text-secondary dark:text-accent inline-block text-[52px]" />
                  <div className="space-y-2">
                    <h3 className="text-heading-5">Road Map</h3>
                    <p className="line-clamp-3 w-full max-w-[275px]">
                      Discover the journey ahead — milestones, progress, and what’s coming next.
                    </p>
                  </div>
                  <div>
                    <LinkButton
                      href="/road-map"
                      className="btn btn-white hover:btn-primary btn-md dark:btn-transparent">
                      View more
                    </LinkButton>
                  </div>
                </div>
              </RevealAnimation>

              <RevealAnimation delay={0.5}>
                <div className="dark:bg-background-8 w-full max-w-[405px] space-y-6 rounded-[20px] bg-white p-8">
                  <LuChartPie strokeWidth={0.75} className="text-secondary dark:text-accent inline-block text-[52px]" />
                  <div className="space-y-2">
                    <h3 className="text-heading-5">Tokenomics</h3>
                    <p className="line-clamp-3 w-full max-w-[275px]">
                      Check tokenomics to understand fairness, rewards, and long-term sustainability.
                    </p>
                  </div>
                  <div>
                    <LinkButton
                      href="/tokenomics"
                      className="btn btn-white hover:btn-primary btn-md dark:btn-transparent">
                      View more
                    </LinkButton>
                  </div>
                </div>
              </RevealAnimation>

              <RevealAnimation delay={0.6}>
                <div className="dark:bg-background-8 w-full max-w-[405px] space-y-6 rounded-[20px] bg-white p-8">
                  <LuHandCoins strokeWidth={0.75} className="text-secondary dark:text-accent inline-block text-[52px]" />
                  <div className="space-y-2">
                    <h3 className="text-heading-5">Token Distribution</h3>
                    <p className="line-clamp-3 w-full max-w-[275px]">
                      Explore how tokens are spread among investors, team, and ecosystem.
                    </p>
                  </div>
                  <div>
                    <LinkButton
                      href="/token-distribution"
                      className="btn btn-white hover:btn-primary btn-md dark:btn-transparent">
                      View more
                    </LinkButton>
                  </div>
                </div>
              </RevealAnimation>





            </div>
            {/* btn  */}

          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
