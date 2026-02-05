import RevealAnimation from '../animation/RevealAnimation';
import { CheckIcon } from '@/icons';

const ConceptContent = () => {
    return (
        <section className="pb-28">
            <div className="main-container">
                <div className="mx-auto max-w-[1100px] space-y-[60px]">

                    {/* Section 1: Moved to VisionSection */}

                    {/* Section 2: Moved to ConceptMission */}

                    {/* Section 3: The Future */}
                    <div className="bg-background-2 dark:bg-background-6 p-8 rounded-3xl border border-cyan-500/20">
                        <RevealAnimation delay={0.5}>
                            <div className="space-y-4">
                                <h2 className="lg:text-heading-3 md:text-heading-4 text-2xl font-bold">
                                    We Built A Crypto Platform
                                    To Buy & Sell Shares.
                                </h2>
                                <div className="space-y-4 text-lg text-secondary dark:text-gray-300 leading-relaxed">
                                    <p>
                                        FELYSYUM was created with a mission: to provide real-world solutions for the challenges faced in the rapidly evolving digital landscape. In the crypto world, many individuals encounter significant hurdles due to limited understanding of new technologies and digital currencies. This lack of knowledge has led to substantial financial losses for countless people. Recognizing this, we set out to create a new kind of community—one filled with experts, visionaries, and pioneers ready to lead in the digital era.
                                    </p>

                                    <p>
                                        Our inspiration comes from Greek mythology, where Elysium is a heavenly realm reserved for heroes. Just as Elysium was a paradise for those who achieved greatness, we aim to create a digital Elysium—a space where digital heroes are born. These heroes are not defined by physical prowess but by their unparalleled knowledge, wisdom, and wealth in the digital realm. They are the ones who understand every facet of digital assets and cryptocurrencies, becoming the torchbearers of this new era.
                                    </p>

                                    <p>
                                        To cultivate these digital heroes, we have established SkillfulHub, a comprehensive knowledge platform designed to empower our community with the latest insights into cryptocurrency, blockchain technology, and emerging digital trends. This hub is exclusively accessible to our community members, allowing them to learn, grow, and develop a deep understanding of the digital world. By equipping themselves with this knowledge, they become capable of navigating the complexities of the crypto space and seizing new opportunities.
                                    </p>

                                    <p>
                                        In addition to fostering a culture of learning, we have also created the FELYSYUM token, a digital currency that rewards our community's commitment and engagement. Initially, this token is distributed among our community members, incentivizing participation and fostering a sense of belonging.
                                    </p>

                                </div>
                            </div>
                        </RevealAnimation>
                    </div>

                </div>
            </div>
        </section>
    );
};

ConceptContent.displayName = 'ConceptContent';
export default ConceptContent;
