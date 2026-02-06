'use client';
import { useProgressStepsAnimation } from '@/hooks/useProgressStepsAnimation';
import RevealAnimation from '../animation/RevealAnimation';

const stepItems = [
  {
    stepNumber: '01',
    title: 'Learn & Master',
    description: 'Gain essential crypto knowledge through SkillfullHub to start your journey right.',
    progressWidth: '25%',
  },
  {
    stepNumber: '02',
    title: 'Innovate & Build',
    description: 'Turn your unique concepts into reality with FelyNova’s powerful tools.',
    progressWidth: '0%',
  },
  {
    stepNumber: '03',
    title: 'Trade & Prosper',
    description: 'Monetize on FelyZone and connect with the Aidora community to grow.',
    progressWidth: '0%',
  },
];

const Steps = () => {
  const { ref } = useProgressStepsAnimation({
    delay: 0.5,
    duration: 2,
    delayBetweenSteps: 2,
    triggerOnScroll: true,
  });
  return (
    <section className="pt-14 pb-14 md:pt-16 md:pb-16 lg:pt-[88px] lg:pb-[88px] xl:pt-[100px] xl:pb-[100px]">
      <div ref={ref} className="main-container progress-container grid grid-cols-1 gap-8 md:grid-cols-3">
        {stepItems.map((step, index) => (
          <RevealAnimation key={step.stepNumber} delay={0.2 + index * 0.2}>
            <div className="flex flex-col space-y-3">
              <div className="bg-stroke-2 dark:bg-stroke-6 relative h-[2px] w-full">
                <div className={`progress-line absolute w-[${step.progressWidth}] bg-ns-green top-0 left-0 h-full`} />
              </div>
              <p className="text-tagline-2 text-primary-500">{step.stepNumber}</p>
              <div className="space-y-1">
                <h5>{step.title}</h5>
                <p>
                  {step.description.includes('<br') ? (
                    <>
                      {step.description.split('<br')[0]}
                      <br className="hidden md:block" />
                      {step.description.split('<br')[1]?.replace('>', '')}
                    </>
                  ) : (
                    step.description
                  )}
                </p>
              </div>
            </div>
          </RevealAnimation>
        ))}
      </div>
    </section>
  );
};

export default Steps;
