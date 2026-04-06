import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Disclaimer - Felysyum',
};

const disclaimerIntro =
  'This whitepaper and all related materials are provided for informational purposes only and do not constitute legal, financial, investment, or other professional advice. The information contained herein is subject to change without notice and may not be complete, accurate, or up to date.';

const disclaimerContent = [
  {
    title: '1. No Investment Offering',
    content:
      'Nothing in this document constitutes or forms part of any offer or solicitation to sell, purchase, or subscribe to any securities or financial instruments in any jurisdiction. Participation in the Felysyum project is entirely voluntary and should be undertaken only after independent research and due diligence.',
  },
  {
    title: '2. No Guarantees of Performance',
    content:
      'The Felysyum project involves emerging technologies and future development plans that carry inherent risks. There is no guarantee of financial returns, token value appreciation, liquidity, or the successful implementation of any roadmap items.',
  },
  {
    title: '3. Market Risk',
    content:
      'Cryptocurrency markets are highly volatile, speculative, and subject to significant price fluctuations. Participants acknowledge that they may lose part or all of their funds and should only engage with amounts they can afford to lose.',
  },
  {
    title: '4. Regulatory Compliance',
    content:
      'Cryptocurrency regulations vary across jurisdictions and may change over time. It is the sole responsibility of each user to ensure compliance with applicable local laws, regulations, and tax obligations before participating in the Felysyum ecosystem.',
  },
  {
    title: '5. Restricted Jurisdictions',
    content:
      'This document and the Felysyum project are not intended for use by individuals or entities in jurisdictions where cryptocurrency-related activities are restricted or prohibited by law. Users from such jurisdictions must refrain from accessing or using the platform.',
  },
  {
    title: '6. Technology and Smart Contract Risks',
    content:
      'The Felysyum platform utilizes blockchain technology and smart contracts, which may be subject to bugs, vulnerabilities, hacking risks, or unforeseen technical issues. The project does not guarantee uninterrupted or error-free operation.',
  },
  {
    title: '7. No Liability',
    content:
      'To the fullest extent permitted by law, Felysyum, its team members, affiliates, partners, and associated entities shall not be liable for any direct, indirect, incidental, or consequential losses, damages, or expenses arising from:<br/><br/><ul class="list-disc pl-5 mt-2 space-y-1"><li>The use of this document</li><li>Participation in the project</li><li>Technical failures or system errors</li><li>Market volatility or price fluctuations</li></ul>',
  },
  {
    title: '8. Forward-Looking Statements',
    content:
      'This document may contain forward-looking statements, including projections, expectations, or plans for future development. Such statements are subject to risks and uncertainties, and actual results may differ materially from those anticipated.',
  },
  {
    title: '9. No Ownership or Rights',
    content:
      'Holding or acquiring Felysyum tokens does not grant any ownership, equity, governance rights, or claims to profits in the project, unless explicitly stated otherwise.',
  },
  {
    title: '10. Independent Advice',
    content:
      'Users are strongly encouraged to seek independent legal, financial, and professional advice before engaging with the Felysyum project or purchasing tokens.',
  },
  {
    title: '11. KYC and AML Compliance',
    content:
      'Felysyum reserves the right to implement Know Your Customer (KYC) and Anti-Money Laundering (AML) procedures where required. Users agree to comply with such requirements if requested.',
  },
  {
    title: '12. Governing Law',
    content:
      'This disclaimer shall be governed by and interpreted in accordance with the laws of [Insert Your Jurisdiction – e.g., Sri Lanka or your registered country].',
  },
  {
    title: '13. Acknowledgment',
    content:
      'By accessing, reading, or using this whitepaper or participating in the Felysyum project, you acknowledge that you have read, understood, and agreed to this disclaimer and accept all associated risks and responsibilities.',
  },
];

const Page = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7 min-h-screen">
      <section className="pt-32 pb-[100px] sm:pt-36 md:pt-42 xl:pt-[180px]">
        <div className="main-container">
          <div className="privacy-policy mx-auto max-w-4xl space-y-[45px]">
            {/* Header Section */}
            <div className="mb-10 space-y-4 text-center">
              <h2 className="text-secondary dark:text-accent mb-4 text-4xl font-bold lg:text-5xl">
                Felysyum Disclaimer
              </h2>
              <p className="text-secondary/60 dark:text-accent/60 mx-auto max-w-3xl text-lg leading-relaxed">
                {disclaimerIntro}
              </p>
            </div>

            {/* Content */}
            <div className="space-y-10">
              {disclaimerContent.map((section, idx) => (
                <div key={idx} className="space-y-3 text-left">
                  <h4 className="text-secondary dark:text-accent text-2xl font-bold">{section.title}</h4>
                  <div
                    className="text-secondary/70 dark:text-accent/70 text-lg leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: section.content }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
