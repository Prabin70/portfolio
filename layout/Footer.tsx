// components/Footer.tsx

import React from "react";
import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandX,
  IconMail,
  IconMapPin,
  IconPhone,
} from "@tabler/icons-react";
import Link from "next/link";

export function Footer() {
  const socialLinks = [
    {
      href: "https://facebook.com",
      icon: IconBrandFacebook,
      label: "Facebook",
    },
    {
      href: "https://instagram.com",
      icon: IconBrandInstagram,
      label: "Instagram",
    },
    { href: "https://x.com", icon: IconBrandX, label: "X (Twitter)" },
    { href: "https://github.com", icon: IconBrandGithub, label: "GitHub" },
    { href: "mailto:your-email@example.com", icon: IconMail, label: "Email" },
  ];

  const footerLinks = [
    { href: "/about", label: "ABOUT US" },
    { href: "/contact", label: "CONTACT US" },
    { href: "/help", label: "HELP" },
    { href: "/projects", label: "PROJECTS" },
    { href: "/skills", label: "SKILLS" },
  ];

  return (
    <footer className="bg-[#0F172A] text-slate-300">
      <div className="container mx-auto px-6 py-12">
        <div className="h-px w-full bg-slate-700"></div>
        <div className="border-8 z-10 border-white rounded-full h-[100px] w-[100px] absolute -top-32 -right-32"></div>

        <div className="flex flex-col items-center justify-between gap-12 py-12 md:flex-row md:items-start">
          <div className="mt-2 text-center md:text-left">
            <h2 className="text-3xl font-bold tracking-wider text-white">
              Prabin Shrestha
            </h2>
          </div>

          <div className="flex flex-col items-center gap-8 md:items-start">
            <div className="flex flex-col items-start gap-3">
              <a
                href="#"
                className="flex items-center gap-3 transition-colors hover:text-white"
              >
                <IconMapPin size={20} />
                <span>345 Faulconer Drive, Suite 4 • Charlottesville, CA</span>
              </a>
              <a
                href="tel:1234567890"
                className="flex items-center gap-3 transition-colors hover:text-white"
              >
                <IconPhone size={20} />
                <span>(123) 456-7890</span>
              </a>
              <a
                href="mailto:prabin.shrestha@example.com"
                className="flex items-center gap-3 transition-colors hover:text-white"
              >
                <IconMail size={20} />
                <span>prabin.shrestha@example.com</span>
              </a>
            </div>

            <div className="flex flex-col items-start gap-4">
              <h3 className="font-semibold text-slate-400">Social Media</h3>
              <div className="flex items-center gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="text-slate-400 transition-colors hover:text-white"
                  >
                    <link.icon size={22} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="h-px w-full bg-slate-700"></div>

        <div className="flex flex-col-reverse items-center justify-between gap-6 pt-8 text-sm md:flex-row">
          <p className="text-slate-500">
            Copyright © {new Date().getFullYear()} Prabin Shrestha Inc.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-medium tracking-wider text-slate-400 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}