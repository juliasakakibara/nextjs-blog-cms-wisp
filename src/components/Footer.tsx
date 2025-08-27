"use client";
import { config } from "@/config";
import Link from "next/link";
import { FunctionComponent } from "react";
import { DarkModeToggle } from "./DarkModeToggle";

export const Footer: FunctionComponent = () => {
  const currentYear = new Date().getFullYear();
  const showYear = config.footer.showYear;

  return (
    <footer className="bg-black text-white">
      <div className="w-full max-w-none px-20 py-20">
        <div className="flex flex-col gap-10">
          {/* Main Footer Content */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 lg:gap-16 pt-[88px]">
            {/* Left Section - Contact Info */}
            <div className="flex flex-col gap-4 max-w-[487px]">
              {/* Get in touch header */}
              <div className="text-white text-[32px] font-normal leading-[44px] tracking-[-2.4px]">
                Get in touch:
              </div>

              {/* Contact details */}
              <div className="flex flex-col gap-2">
                <div className="text-white text-[40px] font-bold leading-[44px] tracking-[-2.4px]">
                  +55 51 9 94991466
                </div>
                <div className="text-white text-[40px] font-bold leading-[44px] tracking-[-2.4px]">
                  juliasakakibara@outlook.com
                </div>
              </div>
            </div>

            {/* Right Section - Social Links */}
            <div className="flex flex-col gap-6 items-end">
              <Link
                href="https://linkedin.com"
                className="text-white hover:text-[#929292] transition-colors text-base font-normal leading-[19.2px] tracking-[-0.64px]"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin
              </Link>
              <Link
                href="https://twitter.com"
                className="text-white hover:text-[#929292] transition-colors text-base font-normal leading-[19.2px] tracking-[-0.64px]"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </Link>
              <Link
                href="https://behance.net"
                className="text-white hover:text-[#929292] transition-colors text-base font-normal leading-[19.2px] tracking-[-0.64px]"
                target="_blank"
                rel="noopener noreferrer"
              >
                Behance
              </Link>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gray-500"></div>

          {/* Bottom Section */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="text-[#C3C3C3] text-base font-normal leading-[19.2px] tracking-[-0.64px]">
              Designed & Developed by me :)
            </div>
            <div className="flex items-center">
              <DarkModeToggle />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
