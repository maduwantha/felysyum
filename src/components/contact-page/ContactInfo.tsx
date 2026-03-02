'use client';

import gradientThree from '@/../public/images/ns-img-498.png';
import gradientTwo from '@/../public/images/ns-img-509.png';
import gradientOne from '@/../public/images/ns-img-510.png';
import Image from 'next/image';
import Link from 'next/link';
import LinkButton from '../ui/button/LinkButton';
import { FormEvent, useState } from 'react';
import { LuHeadset, LuMail, LuSend, LuLoader } from 'react-icons/lu';
import RevealAnimation from '../animation/RevealAnimation';

const contactInfoItems = [
  {
    id: 1,
    icon: <LuMail className="size-full text-white" />,
    title: 'Email Us',
    content: 'contact@felysyum.com',
    link: 'mailto:contact@felysyum.com',
    gradient: gradientTwo,
    gradientClass: 'top-[-206px] left-[-36px] rotate-[62deg]',
  },
  {
    id: 2,
    icon: <LuHeadset className="size-full text-white" />,
    title: 'Customer Care',
    content: 'Contact Support',
    link: 'https://t.me/Felysyum_Customer_Care',
    target: '_blank',
    gradient: gradientOne,
    gradientClass: 'top-[-187px] left-[174px] -rotate-[78deg]',
    btnClass: 'btn btn-primary hover:btn-secondary dark:hover:btn-white w-full',
  },
  {
    id: 3,
    icon: <LuSend className="-mt-1 -ml-1 size-full text-white" />,
    title: 'Join Us',
    content: 'Join Community',
    link: 'https://t.me/felysyum',
    target: '_blank',
    gradient: gradientThree,
    gradientClass: 'top-[-184px] left-[-185px]',
    btnClass: 'btn btn-primary hover:btn-secondary dark:hover:btn-white w-full',
  },
];

const ContactInfo = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    // Security 1: Client-side Honeypot Check
    if (formData.get('website_url')) {
      console.warn("Spam attempt blocked.");
      return;
    }

    setLoading(true);
    setMessage(null);

    const data = {
      name: formData.get('fullname'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
      website_url: formData.get('website_url'),
    };

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000);

      const endpoint = process.env.NODE_ENV === 'development' ? '/api/contact' : '/send-mail.php';

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);
      const result = await response.json();

      if (response.ok) {
        setMessage({
          type: 'success',
          text: 'Thank you! Your message has been sent successfully.',
        });
        (e.target as HTMLFormElement).reset();
      } else {
        setMessage({
          type: 'error',
          text: result.error || 'Something went wrong. Please try again.',
        });
      }
    } catch (error: any) {
      setMessage({
        type: 'error',
        text: error.name === 'AbortError' ? 'Request timed out.' : 'Failed to connect to server.',
      });
    } finally {
      setLoading(false);
      if (message?.type === 'success') {
        setTimeout(() => setMessage(null), 8000);
      }
    }
  };

  // Reusable input class to keep the code clean
  const inputClass = "dark:focus-visible:border-stroke-4/20 dark:border-stroke-7 dark:bg-background-6 border-stroke-3 bg-background-1 text-tagline-2 placeholder:text-secondary/60 focus:border-secondary placeholder:text-tagline-2 dark:placeholder:text-accent/60 dark:text-accent h-[48px] w-full rounded-full border px-[18px] py-3 font-normal placeholder:font-normal focus:outline-none xl:h-[41px]";
  const textareaClass = "dark:bg-background-6 dark:border-stroke-7 border-stroke-3 bg-background-1 text-tagline-2 placeholder:text-secondary/60 focus:border-secondary dark:focus-visible:border-stroke-4/20 placeholder:text-tagline-2 dark:placeholder:text-accent/60 dark:text-accent w-full rounded-xl border px-[18px] py-3 font-normal placeholder:font-normal focus:outline-none";

  return (
    <section className="pb-14 pt-32 sm:pt-36 md:pb-16 md:pt-42 lg:pb-20 xl:pb-[100px] xl:pt-[180px]">
      <div className="main-container">
        <div className="space-y-[70px]">
          <div className="mx-auto max-w-[680px] space-y-3 text-center">
            <RevealAnimation delay={0.2}>
              <h2>Reach out to our support team for help.</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p>Whether you have a question or need assistance, our support team is here to help.</p>
            </RevealAnimation>
          </div>

          <div className="flex flex-col items-center justify-center gap-10 lg:flex-row lg:items-start lg:gap-8 xl:gap-[70px]">
            {/* Contact Info Cards */}
            <div className="flex flex-col gap-8 md:flex-row lg:flex-col">
              {contactInfoItems.map((item) => (
                <RevealAnimation key={item.id} delay={0.4}>
                  <div className="bg-secondary dark:bg-background-6 relative w-full space-y-6 overflow-hidden rounded-[20px] p-11 text-center md:max-w-[371px]">
                    <figure className={`pointer-events-none absolute size-[350px] select-none overflow-hidden ${item.gradientClass}`}>
                      <Image src={item.gradient} alt="overlay" className="size-full object-cover" />
                    </figure>
                    <figure className="mx-auto flex size-10 items-center justify-center overflow-hidden p-0.5">
                      {item.icon}
                    </figure>
                    <div className="space-y-2.5">
                      <p className="text-heading-6 text-accent">{item.title}</p>
                      {item.btnClass ? (
                        <div className="pt-2">
                          <LinkButton href={item.link!} target={item.target || '_self'} className={item.btnClass}>
                            {item.content}
                          </LinkButton>
                        </div>
                      ) : (
                        <p className="text-accent/60">
                          <Link href={item.link || '#'} target={item.target || '_self'}>{item.content}</Link>
                        </p>
                      )}
                    </div>
                  </div>
                </RevealAnimation>
              ))}
            </div>

            {/* Contact Form */}
            <RevealAnimation delay={0.3} className="dark:bg-background-6 mx-auto w-full max-w-[847px] rounded-4xl bg-white p-6 md:p-8 lg:p-11">
              <div>
                {message && (
                  <div className={`mb-6 flex items-center justify-between rounded-lg border px-5 py-4 ${message.type === 'success' ? 'border-[#c3e6cb] bg-[#d4edda] text-[#155724]' : 'border-[#f5c6cb] bg-[#f8d7da] text-[#721c24]'
                    }`}>
                    <span>{message.text}</span>
                    <button onClick={() => setMessage(null)} className="text-xl opacity-80 hover:opacity-100">&times;</button>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Security 2: Honeypot (Hidden) */}
                  <input type="text" name="website_url" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

                  <div className="w-full space-y-2">
                    <label htmlFor="fullname" className="text-tagline-2 text-secondary dark:text-accent block font-medium">Your name</label>
                    <input type="text" id="fullname" name="fullname" placeholder="Enter your name" required disabled={loading} className={inputClass} />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-tagline-2 text-secondary dark:text-accent block font-medium">Email address</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email" required disabled={loading} className={inputClass} />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-tagline-2 text-secondary dark:text-accent block font-medium">Subject</label>
                    <input type="text" id="subject" name="subject" placeholder="Enter your subject" required disabled={loading} className={inputClass} />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-tagline-2 text-secondary dark:text-accent block font-medium">Write message</label>
                    <textarea id="message" name="message" rows={7} placeholder="Enter your messages" required disabled={loading} className={textareaClass} />
                  </div>

                  <fieldset className="mb-4 flex items-center gap-2">
                    <label className="flex items-center gap-x-3">
                      <input id="terms" type="checkbox" className="peer sr-only" required disabled={loading} />
                      <span className="border-stroke-3 dark:border-stroke-7 after:bg-primary-500 peer-checked:border-primary-500 relative size-4 cursor-pointer rounded-full border after:absolute after:left-1/2 after:top-1/2 after:size-2.5 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:opacity-0 peer-checked:after:opacity-100" />
                      <span className="sr-only">Agree to the terms and conditions</span>
                    </label>
                    <label htmlFor="terms" className="text-tagline-3 text-secondary/60 dark:text-accent/60 cursor-pointer">
                      I agree with the <Link href="/terms-conditions" className="text-primary-500 text-tagline-3 underline"> terms and conditions</Link>
                    </label>
                  </fieldset>

                  <button type="submit" disabled={loading} className="btn btn-md btn-secondary hover:btn-primary dark:btn-accent w-full flex items-center justify-center gap-2">
                    {loading && <LuLoader className="animate-spin size-4" />}
                    {loading ? 'Sending...' : 'Submit'}
                  </button>
                </form>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;