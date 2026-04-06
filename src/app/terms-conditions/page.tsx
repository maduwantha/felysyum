import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Terms & Conditions - Felysyum',
};

const termsContent = [
  {
    title: '1. Acceptance of Terms',
    content: 'By accessing or using the Felysyum platform, website, products, or services, you agree to be bound by these Terms and Conditions. If you do not agree, you must not use our services.'
  },
  {
    title: '2. Eligibility',
    content: 'You must be at least 18 years old and legally capable of entering into binding agreements under applicable laws to use this platform.'
  },
  {
    title: '3. Nature of Service',
    content: 'Felysyum provides access to digital assets, including cryptocurrency tokens, and related services. All transactions are conducted on a voluntary basis and at your own risk.'
  },
  {
    title: '4. No Financial Advice',
    content: 'Nothing on this platform constitutes financial, investment, legal, or professional advice. Users are responsible for conducting their own research before making any decisions.'
  },
  {
    title: '5. Token Purchases and Transactions',
    content: 'All token purchases are final and non-refundable unless otherwise stated.<br/><br/>Prices may fluctuate based on market conditions.<br/><br/>Users are responsible for ensuring correct wallet addresses and transaction details.'
  },
  {
    title: '6. System Errors and Excess Token Distribution',
    content: 'In the event of any technical error, system malfunction, pricing error, or miscalculation, where a user receives tokens or funds exceeding the correct amount:<br/><br/><ul class="list-disc pl-5 mt-2 space-y-1"><li>The user acknowledges that such excess tokens or funds are not rightfully theirs.</li><li>The user agrees to immediately return the excess amount to Felysyum upon notification.</li><li>Felysyum reserves the right to:<br/>- Correct the transaction<br/>- Deduct the excess amount from the user’s balance or associated wallets (where technically possible)<br/>- Temporarily suspend or permanently restrict accounts involved until resolution</li></ul><br/>Failure to comply may result in legal action.'
  },
  {
    title: '7. User Responsibilities',
    content: 'Users agree:<br/><br/><ul class="list-disc pl-5 mt-2 space-y-1"><li>Not to exploit bugs, errors, or vulnerabilities</li><li>Not to engage in fraudulent or illegal activities</li><li>To comply with all applicable laws and regulations in their jurisdiction</li></ul>'
  },
  {
    title: '8. Market Risk',
    content: 'Cryptocurrency markets are highly volatile. Users acknowledge the risk of loss and agree that they are solely responsible for their investment decisions.'
  },
  {
    title: '9. Regulatory Compliance',
    content: 'Users are responsible for ensuring that their use of Felysyum complies with local laws, including tax obligations and crypto regulations.'
  },
  {
    title: '10. Limitation of Liability',
    content: 'Felysyum, its team, affiliates, and partners shall not be liable for:<br/><br/><ul class="list-disc pl-5 mt-2 space-y-1"><li>Any direct or indirect financial losses</li><li>Loss of data, tokens, or access</li><li>Market-related losses or price fluctuations</li><li>Technical failures or third-party issues</li></ul>'
  },
  {
    title: '11. Intellectual Property',
    content: 'All content, branding, logos, and materials related to Felysyum are the intellectual property of the project and may not be used without permission.'
  },
  {
    title: '12. Suspension and Termination',
    content: 'Felysyum reserves the right to suspend or terminate access to any user who violates these terms or engages in suspicious or harmful activities.'
  },
  {
    title: '13. Amendments',
    content: 'Felysyum may update these Terms and Conditions at any time without prior notice. Continued use of the platform constitutes acceptance of the updated terms.'
  },
  {
    title: '14. Governing Law',
    content: 'These Terms shall be governed by and interpreted in accordance with the laws applicable to the jurisdiction in which Felysyum operates.'
  },
  {
    title: '15. Contact',
    content: 'For any questions or concerns regarding these Terms, users may contact the Felysyum support team through official channels.'
  }
];

const Page = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7 min-h-screen">
      <section className="pt-32 pb-[100px] sm:pt-36 md:pt-42 xl:pt-[180px]">
        <div className="main-container">
          <div className="privacy-policy space-y-[45px] max-w-4xl mx-auto">
            {/* Header Section */}
            <div className="space-y-4 mb-10 text-center">
              <h2 className="text-secondary dark:text-accent mb-4 text-4xl lg:text-5xl font-bold">Terms and Conditions</h2>
            </div>

            {/* Content */}
            <div className="space-y-10">
              {termsContent.map((section, idx) => (
                <div key={idx} className="space-y-3 text-left">
                  <h4 className="text-2xl font-bold text-secondary dark:text-accent">{section.title}</h4>
                  <div 
                    className="text-secondary/70 dark:text-accent/70 leading-relaxed text-lg" 
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
