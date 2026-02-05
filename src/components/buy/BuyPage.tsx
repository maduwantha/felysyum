'use client';

import { TabProvider, useTab } from '@/context/TabContext';
import TabList from '@/components/ui/tab/TabList';
import Tab from '@/components/ui/tab/Tab';
import BuyFelySection from './BuyFelySection';
import StakeFelySection from './StakeFelySection';
import RevealAnimation from '@/components/animation/RevealAnimation';

const TabContentWrapper = () => {
    const { currentIndex } = useTab();

    return (
        <div className="mt-8">
            {currentIndex === 0 && <BuyFelySection />}
            {currentIndex === 1 && <StakeFelySection />}
        </div>
    );
};

const BuyPage = () => {
    return (
        <section className="pt-24 pb-16 md:pt-32 md:pb-20 lg:pt-[140px] lg:pb-[100px]">
            <div className="main-container">
                <TabProvider defaultValue={0}>
                    <RevealAnimation delay={0.1}>
                        <div className="flex justify-center mb-10">
                            <TabList>
                                <Tab index={0}>Buy Felysyum</Tab>
                                <Tab index={1}>Stake Fely</Tab>
                            </TabList>
                        </div>
                    </RevealAnimation>

                    <TabContentWrapper />
                </TabProvider>
            </div>
        </section>
    );
};

export default BuyPage;
