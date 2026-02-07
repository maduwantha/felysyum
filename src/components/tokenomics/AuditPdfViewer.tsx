'use client';

import { FadeInUp } from '@/components/animation/FadeInUp';

const AuditPdfViewer = () => {
    return (
        <section className="py-20 bg-[#0B0F19] border-t border-white/5">
            <div className="container mx-auto px-4">
                <FadeInUp delay={0.1}>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 text-center">
                        Audit Report Viewer
                    </h2>
                </FadeInUp>

                <FadeInUp delay={0.2}>
                    <div className="max-w-5xl mx-auto w-full h-[600px] md:h-[800px] bg-slate-800 rounded-2xl overflow-hidden shadow-2xl border border-white/10 relative">
                        {/* Note: Ensure 'audit.pdf' is placed in the 'public/pdf' folder */}
                        <iframe
                            src="/pdf/audit.pdf"
                            className="w-full h-full border-none"
                            title="Audit Report PDF"
                        >
                            <div className="flex flex-col items-center justify-center h-full text-white p-6 text-center">
                                <p className="mb-4 text-lg">Your browser does not support PDF viewing right here.</p>
                                <a href="/pdf/audit.pdf" download className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                                    Download Audit Report
                                </a>
                            </div>
                        </iframe>
                    </div>
                </FadeInUp>

                <FadeInUp delay={0.3}>
                    <div className="flex justify-center mt-8">
                        <a
                            href="/pdf/audit.pdf"
                            download
                            className="btn btn-secondary hover:btn-primary dark:hover:btn-primary dark:btn-accent btn-lg md:btn-xl mx-auto w-full md:mx-0 md:w-auto"
                        >
                            <span>Download Audit Report</span>
                        </a>
                    </div>
                </FadeInUp>
            </div>
        </section>
    );
};

export default AuditPdfViewer;
