import gradient16 from '@public/images/ns-img-495.png';
import gradient3 from '@public/images/ns-img-508.png';
import gradient27 from '@public/images/ns-img-515.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';
import { LuGraduationCap, LuStore, LuSettings, LuBanknote, LuWallet } from 'react-icons/lu';
const CommunityIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-secondary dark:text-accent"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
);

const Innovation = () => {
  const platforms = [
    {
      title: "SkillFullHub",
      subtitle: "BLOCKCHAIN EDUCATION",
      description: "SkillFullHub will be our educational platform designed to guide people into the digital future. It will help users learn about cryptocurrency, blockchain, and digital safety—equipping them to avoid scams, fake tokens, and common crypto mistakes. We believe that education is the first step toward freedom and success in the new digital era.",
      icon: <LuGraduationCap size={52} strokeWidth={1.5} className="text-secondary dark:text-accent" />,
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
      icon: <LuStore size={52} strokeWidth={1.5} className="text-secondary dark:text-accent" />,
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
      icon: <LuSettings size={52} strokeWidth={1.5} className="text-secondary dark:text-accent" />,
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
      icon: <LuWallet size={52} strokeWidth={1.5} className="text-secondary dark:text-accent" />,
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
      icon: <LuBanknote size={52} strokeWidth={1.5} className="text-secondary dark:text-accent" />,
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
