"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import RevealAnimation from "../animation/RevealAnimation";

interface ShareLinkProps {
  title?: string;
  description?: string;
}

const ShareLink = ({ title, description }: ShareLinkProps) => {
  const [currentUrl, setCurrentUrl] = useState("");
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.href);
    }
  }, []);

  const handleCopyLink = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(currentUrl);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  const shareText = title || "Check out this announcement from Felysyum!";

  const shareLinks = [
    {
      name: "Facebook",
      icon: <FaFacebookF className="size-5" />,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        currentUrl
      )}`,
    },
    {
      name: "X",
      icon: <FaXTwitter className="size-5" />,
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
        currentUrl
      )}&text=${encodeURIComponent(shareText)}`,
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn className="size-5" />,
      url: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
        currentUrl
      )}&title=${encodeURIComponent(shareText)}${description ? `&summary=${encodeURIComponent(description)}` : ""
        }`,
    },
    {
      name: "WhatsApp",
      icon: <FaWhatsapp className="size-5" />,
      url: `https://wa.me/?text=${encodeURIComponent(
        `${shareText} ${currentUrl}`
      )}`,
    },
  ];

  return (
    <RevealAnimation delay={0.2}>
      <div className="mx-auto mt-[70px] max-w-[950px] space-y-4">
        <h5 className="text-heading-6">Share this post</h5>
        <ul className="flex items-center gap-2.5">
          {shareLinks.map((link) => (
            <li
              key={link.name}
              className="group/social-link border-secondary/10 dark:border-stroke-7 hover:bg-primary-500 hover:border-primary-500 inline-flex items-center justify-center rounded-full border p-2.5 transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-lg"
            >
              <Link
                href={link.url}
                target="_blank"
                aria-label={`Share on ${link.name}`}
              >
                <span className="fill-secondary dark:fill-accent group-hover/social-link:fill-accent text-secondary dark:text-accent group-hover/social-link:text-white transition-all duration-300 ease-in-out">
                  {link.icon}
                </span>
              </Link>
            </li>
          ))}
          {/* Instagram / Copy Link Button */}
          <li className="group/social-link border-secondary/10 dark:border-stroke-7 hover:bg-primary-500 hover:border-primary-500 inline-flex items-center justify-center rounded-full border p-2.5 transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-lg">
            <button
              onClick={handleCopyLink}
              className="flex items-center justify-center"
              aria-label="Copy Link for Instagram"
              title="Copy link"
            >
              <span className="fill-secondary dark:fill-accent group-hover/social-link:fill-accent text-secondary dark:text-accent group-hover/social-link:text-white transition-all duration-300 ease-in-out">
                {isCopied ? (
                  <span className="text-xs font-bold px-1">Copied!</span>
                ) : (
                  <FaInstagram className="size-5" />
                )}
              </span>
            </button>
          </li>
        </ul>
      </div>
    </RevealAnimation>
  );
};

export default ShareLink;
