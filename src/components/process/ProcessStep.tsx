import { cn } from '@/utils/cn';
import RevealAnimation from '../animation/RevealAnimation';
import Link from 'next/link';

interface ProcessStep {
  id: string;
  stepNumber: string;
  title: string;
  description: string;
  icon: string;
  actionText: string;
  actionLink: string;
}

const ProcessStep = () => {
  const processSteps: ProcessStep[] = [
    {
      id: 'create-wallet',
      stepNumber: 'Step- 01',
      title: 'Create a wallet',
      description: 'At this moment, there are numerous DeFi crypto wallets available globally. You can select and create your preferred crypto wallet from the options.',
      icon: 'ns-shape-36', // Changed to a wallet-like icon if available, otherwise default
      actionText: 'Learn more',
      actionLink: '/wallets',
    },
    {
      id: 'connect-wallet',
      stepNumber: 'Step- 02',
      title: 'Connect your wallet',
      description: 'Establish a connection between your cryptocurrency wallet and the Uniswap decentralized exchange platform.',
      icon: 'ns-shape-8', // iconic representation
      actionText: 'How to connect',
      actionLink: '/connect-your-wallet',
    },
    {
      id: 'get-felysyum',
      stepNumber: 'Step- 03',
      title: 'Get Felysyum',
      description: 'Convert any of your current cryptocurrencies into Felysyum tokens through the exchange process available on the platform',
      icon: 'ns-shape-2',
      actionText: 'Get Now',
      actionLink: '/get-felysium',
    },
  ];

  return (
    <section className="pt-10 pb-[80px] sm:pt-10 md:pt-10 ">
      <div className="main-container">
        <div className="mb-[60px] space-y-4 text-center">

          <RevealAnimation delay={0.4}>
            <h2 className="mx-auto max-w-[800px] text-4xl md:text-5xl ">Reserve Your Share of <span className="text-primary-500">Felysyum</span></h2>
          </RevealAnimation>
          <RevealAnimation delay={0.5}>
            <p className="mx-auto max-w-[692px] text-lg text-gray-400">
              Join the Felysyum Revolution. Follow these simple 3 steps to acquire your FELY Token. Build your future today.
            </p>
          </RevealAnimation>
        </div>
        <div className="grid grid-cols-12 gap-y-5 md:gap-8">
          {processSteps.map((step, index) => {
            return (
              <div
                key={step.id}
                className={cn('col-span-12 md:col-span-6 lg:col-span-4')}>
                <RevealAnimation delay={0.3 + index * 0.1}>
                  <div className="bg-background-1 dark:bg-background-6 flex h-full flex-col space-y-8 rounded-[20px] p-5 sm:p-8">
                    <div className="flex items-center justify-between">
                      <p className="text-tagline-2 text-secondary dark:text-accent">{step.stepNumber}</p>
                      <span className={`${step.icon} text-secondary dark:text-accent text-[52px]`} />
                    </div>
                    <div className="flex-1 space-y-4">
                      <h3 className="sm:text-heading-5 text-heading-6 font-normal">{step.title}</h3>
                      <p>{step.description}</p>

                      {/* Action Link added here */}
                      <div className="pt-2">
                        <Link href={step.actionLink} className="inline-flex items-center text-primary-500 hover:text-secondary dark:hover:text-white font-medium transition-colors gap-2 group/link">
                          {step.actionText}
                          <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </RevealAnimation>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessStep;
