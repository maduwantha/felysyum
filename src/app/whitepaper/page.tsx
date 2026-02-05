import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import Link from 'next/link';
import { FaDownload } from "react-icons/fa6";
import Hero from '@/components/white-paper/Hero';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Whitepaper - Felysyum',
};

const page = () => {
  const pdfUrl = "/assets/pdf/felysyum-white-paper-v5.pdf";

  return (
    <main className="bg-background-3 dark:bg-background-5 min-h-screen pb-20">
      <Hero />
      <div className="main-container relative z-10 -mt-10 lg:-mt-20">
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-t-2xl p-4 flex justify-between items-center bg-[#0F1623]/80">
          <div className="flex items-center gap-3">
            <div className="h-3 w-3 rounded-full bg-red-500/80"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-500/80"></div>
            <div className="h-3 w-3 rounded-full bg-green-500/80"></div>
            <span className="ml-4 text-xs font-mono text-white/50 hidden md:inline-block">felysyum-white-paper-v5.pdf</span>
          </div>
          <Link
            href={pdfUrl}
            target="_blank"
            download
            className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 px-5 py-2 text-xs font-bold text-cyan-400 transition-all hover:from-cyan-500/20 hover:to-blue-500/20 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] border border-cyan-500/30"
          >
            <FaDownload className="transition-transform group-hover:-translate-y-0.5 text-sm" />
            <span>DOWNLOAD PDF</span>
          </Link>
        </div>

        <div className="w-full h-[800px] border-x border-b border-white/10 bg-[#0F1623] rounded-b-2xl overflow-hidden shadow-2xl relative">
          <iframe
            src={`${pdfUrl}#view=FitH`}
            className="w-full h-full"
            title="Felysyum Whitepaper Viewer"
          />
        </div>
      </div>
    </main>
  );
};

export default page;
