import Link from "next/link";

import { LuLandmark } from 'react-icons/lu';

const TopBanner = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-[100] bg-white/80 dark:bg-background-8/80 backdrop-blur-xl py-2.5 px-4 text-xs sm:text-sm flex items-center justify-center gap-2 transition-all">
      <LuLandmark className="text-base sm:text-lg text-yellow-600 dark:text-yellow-400" />
      <span className="text-yellow-600 dark:text-yellow-400 font-semibold tracking-wide">
        The Gates of Olympus are Opening —{' '}
        <a 
          href="https://olympus.felysyum.com/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-yellow-600 dark:text-yellow-400 font-bold underline decoration-yellow-600/40 dark:decoration-yellow-400/40 underline-offset-4 hover:decoration-yellow-600 dark:hover:decoration-yellow-400 transition-all ml-1"
        >
          Join the Honor Legion
        </a>
      </span>
    </div>
  );
};

export default TopBanner;
