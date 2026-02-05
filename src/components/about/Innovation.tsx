import gradient16 from '@public/images/ns-img-495.png';
import gradient3 from '@public/images/ns-img-508.png';
import gradient27 from '@public/images/ns-img-515.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

// Consolidating icons here
const EduIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-secondary dark:text-accent"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></svg>
);
const MarketIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-secondary dark:text-accent"><circle cx="10" cy="20.5" r="1" /><circle cx="19" cy="20.5" r="1" /><path d="M2.5 2.5h3l2.7 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6l1.6-8.4H7.1" /></svg>
);
const IdeaIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-secondary dark:text-accent"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-2.246-5.318-2.5-7a2.5 2.5 0 1 1 5 0C14.5 4.5 18 10 18 10" /><path d="M15.5 14.5a2.5 2.5 0 0 1-2.5-2.5c0-1.38.5-2 1-3 .429-.858.916-1.83 1.341-2.822" /><path d="M18 19h2.5" /><path d="M20 22h.5" /><path d="M3.5 22H4" /><path d="M3.5 19H6" /><path d="M18 15h.5" /><path d="M6 15H5.5" /></svg>
);
const WalletIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-secondary dark:text-accent"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" /><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" /></svg>
);
const HeartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-secondary dark:text-accent"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
);
const CommunityIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-secondary dark:text-accent"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
);

const Innovation = () => {
  const platforms = [
    {
      title: "SkillFullHub",
      subtitle: "BLOCKCHAIN EDUCATION",
      description: "SkillFullHub will be our educational platform designed to guide people into the digital future. It will help users learn about cryptocurrency, blockchain, and digital safety—equipping them to avoid scams, fake tokens, and common crypto mistakes. We believe that education is the first step toward freedom and success in the new digital era.",
      icon: <EduIcon />,
      gradient: gradient3,
      rotation: "rotate-[304deg]",
      pos: "-top-[66%] -left-[60%]",
      btnText: "Learn More",
      href: "#",
      tag: "COMING SOON",
      tagColor: "bg-cyan-400 text-black"
    },
    {
      title: "Felyzone",
      subtitle: "CRYPTO MARKETPLACE",
      description: "Felyzone will be a marketplace where people will be able to buy and sell products using the FELY token. This will allow everyday use of cryptocurrency in real-life scenarios, with special discounts and unique product offerings for our community members.",
      icon: <MarketIcon />,
      gradient: gradient27,
      rotation: "rotate-[175deg]",
      pos: "-top-[74%] -right-[70%]",
      btnText: "Visit Market",
      href: "#",
      tag: "IN DEVELOPMENT",
      tagColor: "bg-orange-400 text-black"
    },
    {
      title: "Felynova",
      subtitle: "INNOVATION LAUNCHPAD",
      description: "Felynova will offer individuals the chance to present innovative ideas, raise funds with the help of the community and project team, and bring their creations to life. These innovations could later be sold on Felyzone—making the marketplace truly unique and community-driven.",
      icon: <IdeaIcon />,
      gradient: gradient16,
      rotation: "rotate-[175deg]",
      pos: "-top-[74%] -right-[35%]",
      btnText: "Start Project",
      href: "#",
      tag: "COMING SOON",
      tagColor: "bg-cyan-400 text-black"
    },
    {
      title: "FelyWallet",
      subtitle: "A SAFE & EFFICIENT WALLET",
      description: "To power our future digital ecosystem, FelyWallet is planned as a secure, fast, and low-cost wallet solution. It will be designed to make holding and transacting with FELY and other assets simple and safe.",
      icon: <WalletIcon />,
      gradient: gradient3,
      rotation: "rotate-[304deg]",
      pos: "-top-[66%] -left-[60%]",
      btnText: "Planned",
      href: "#",
      tag: "PLANNED",
      tagColor: "bg-purple-400 text-white"
    },
    {
      title: "Aidora",
      subtitle: "GIVING BACK THROUGH CHARITY",
      description: "Aidora, our future charitable arm, will focus on providing free education, professional development, and startup support for underprivileged individuals. The goal is to uplift people through knowledge, entrepreneurship, and opportunity.",
      icon: <HeartIcon />,
      gradient: gradient27,
      rotation: "rotate-[175deg]",
      pos: "-top-[74%] -right-[70%]",
      btnText: "Coming Soon",
      href: "#",
      tag: "COMING SOON",
      tagColor: "bg-cyan-400 text-black"
    },
    {
      title: "Olympus Community",
      subtitle: "BUILDING A DIGITAL SOCIETY",
      description: "All these future platforms will be powered by the Olympus Community—a future global network of educated, empowered, and prosperous individuals leading the way into the digital world.",
      icon: <CommunityIcon />,
      gradient: gradient16,
      rotation: "rotate-[175deg]",
      pos: "-top-[74%] -right-[35%]",
      btnText: "Join Us",
      href: "#",
      tag: "ACTIVE",
      tagColor: "bg-pink-500 text-white"
    }
  ];

  return (
    <section className="py-[100px]">
      <div className="main-container">
        <div className="mb-[70px] space-y-5 text-center">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green">Our Ecosystem</span>
          </RevealAnimation>
          <div className="space-y-3">
            <RevealAnimation delay={0.2}>
              <h2 className="mx-auto max-w-[810px]">Future Ecosystem Platforms</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="mx-auto max-w-[542px]">
                Explore the comprehensive suite of platforms designed to power the Felysyum digital paradise.
              </p>
            </RevealAnimation>
          </div>
        </div>
        <div className="grid grid-cols-12 max-md:gap-y-8 md:gap-8">
          {platforms.map((item, index) => (
            <div key={index} className="col-span-12 md:col-span-4">
              <RevealAnimation delay={0.4 + (index * 0.1)}>
                <div className="bg-background-2 dark:bg-background-6 relative z-10 space-y-6 overflow-hidden rounded-[20px] px-6 py-8 h-full flex flex-col justify-between group hover:border-primary/20 border border-transparent transition-all duration-300">
                  {/* bg gradient */}
                  <figure className={`pointer-events-none absolute -z-10 size-[410px] select-none ${item.pos} ${item.rotation}`}>
                    <Image src={item.gradient} className="size-full object-contain" alt="gradient" />
                  </figure>

                  {/* Tag */}
                  <div className="absolute top-6 right-6">
                    <span className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider ${item.tagColor}`}>
                      {item.tag}
                    </span>
                  </div>

                  <div>
                    <div className="flex items-center justify-start">
                      <div className="p-3 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
                        {item.icon}
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3 text-left flex-grow mt-4">
                    <div>
                      <h3 className="text-heading-5">{item.title}</h3>
                      {item.subtitle && (
                        <p className="text-xs font-bold text-marketing uppercase mt-1 tracking-wide">{item.subtitle}</p>
                      )}
                    </div>
                    <p className="text-secondary/80 dark:text-accent/80 leading-relaxed text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              </RevealAnimation>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

Innovation.displayName = 'Innovation';
export default Innovation;
