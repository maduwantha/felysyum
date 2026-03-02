
import CTA from '@/components/about/CTA';
import ContactInfo from '@/components/contact-page/ContactInfo';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Contact Us - Felysyum',
  description: 'Get in touch with the Felysyum team.',
};

const ContactUs = () => {
  return (
    <main className="bg-background-3 dark:bg-background-5">
      <ContactInfo />
      {/* <CTA /> */}
    </main>
  );
};

export default ContactUs;
