"use client"

import React from "react";
import { FaLinkedin, FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";
import { useTheme } from "next-themes";

interface Footer7Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  sections?: Array<{
    title: string;
    links: Array<{ name: string; href: string }>;
  }>;
  description?: string;
  socialLinks?: Array<{
    icon: React.ReactElement;
    href: string;
    label: string;
  }>;
  copyright?: string;
  legalLinks?: Array<{
    name: string;
    href: string;
  }>;
}

const defaultSections = [
  {
    title: "Product",
    links: [
      { name: "Features", href: "#" },
      { name: "Pricing", href: "#" },
      { name: "How It Works", href: "#how-it-works" },
      { name: "Activities", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Contact", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Help Center", href: "#" },
      { name: "Community", href: "https://discord.gg/pP7RHfSJ" },
      { name: "Guides", href: "#" },
      { name: "API", href: "#" },
    ],
  },
];

const defaultSocialLinks = [
  { icon: <FaLinkedin className="size-5" />, href: "https://www.linkedin.com/in/wasif-ali-7693242a3", label: "LinkedIn" },
  { icon: <FaXTwitter className="size-5" />, href: "https://x.com/wasifali2468", label: "X (Twitter)" },
  { icon: <FaDiscord className="size-5" />, href: "https://discord.gg/pP7RHfSJ", label: "Discord" },
];

const defaultLegalLinks = [
  { name: "Terms and Conditions", href: "#" },
  { name: "Privacy Policy", href: "#" },
];

export const Footer7 = ({
  sections = defaultSections,
  description = "Transform your idle time into productive moments with AI-powered activity suggestions. Make every minute count.",
  socialLinks = defaultSocialLinks,
  copyright = "© 2026 Upvibers. All rights reserved.",
  legalLinks = defaultLegalLinks,
}: Footer7Props) => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="py-32 bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      <div className="container mx-auto">
        <div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-start lg:text-left">
          <div className="flex w-full flex-col justify-between gap-6 lg:items-start">
            {/* Logo */}
            <div className="flex items-center gap-3 lg:justify-start">
              <a href="/" className="flex items-center gap-3">
                {mounted && (
                  <Image 
                    src={resolvedTheme === 'dark' ? "/logo2.png" : "/whitelogo.png"}
                    alt="Upvibers Logo" 
                    width={120} 
                    height={40} 
                    className="w-auto h-8 object-contain"
                  />
                )}
              </a>
            </div>
            <p className="max-w-[70%] text-sm text-neutral-600 dark:text-neutral-400 transition-colors duration-300">
              {description}
            </p>
            <ul className="flex items-center space-x-6 text-neutral-600 dark:text-neutral-400 transition-colors duration-300">
              {socialLinks.map((social, idx) => (
                <li key={idx} className="font-medium hover:text-black dark:hover:text-white transition-colors cursor-pointer">
                  <a href={social.href} aria-label={social.label}>
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid w-full gap-6 md:grid-cols-3 lg:gap-20">
            {sections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-bold text-black dark:text-white transition-colors duration-300">{section.title}</h3>
                <ul className="space-y-3 text-sm text-neutral-600 dark:text-neutral-400 transition-colors duration-300">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="font-medium hover:text-black dark:hover:text-white transition-colors cursor-pointer"
                    >
                      <a href={link.href}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 flex flex-col justify-between gap-4 border-t border-neutral-200 dark:border-neutral-800 py-8 text-xs font-medium text-neutral-600 dark:text-neutral-400 md:flex-row md:items-center md:text-left transition-colors duration-300">
          <p className="order-2 lg:order-1">{copyright}</p>
          <ul className="order-1 flex flex-col gap-2 md:order-2 md:flex-row">
            {legalLinks.map((link, idx) => (
              <li key={idx} className="hover:text-black dark:hover:text-white transition-colors cursor-pointer">
                <a href={link.href}> {link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
