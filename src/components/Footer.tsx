"use client";
import { config } from "@/config";
import { cn } from "@/lib/utils";
import { Rss } from "lucide-react";
import Link from "next/link";
import { FunctionComponent } from "react";
import { DarkModeToggle } from "./DarkModeToggle";
import { Button } from "./ui/button";

export const Footer: FunctionComponent = () => {
  const footerClasses = cn(
    config.footer.marginTop.mobile,
    `md:${config.footer.marginTop.desktop}`,
    config.footer.marginBottom
  );

  const currentYear = new Date().getFullYear();
  const showYear = config.footer.showYear;
  const showWispBranding = config.navigation.showWispBranding;
  const rssEnabled = config.navigation.rssEnabled;

  return (
    <footer className="bg-background text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          {/* Social Media Links */}
          <div className="flex justify-end mb-16 lg:mb-20">
            <div className="flex gap-6">
              <Link
                href="https://linkedin.com"
                className="text-foreground hover:text-muted-foreground transition-colors font-normal"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin
              </Link>
              <Link
                href="https://twitter.com"
                className="text-foreground hover:text-muted-foreground transition-colors font-normal"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </Link>
              <Link
                href="https://behance.net"
                className="text-foreground hover:text-muted-foreground transition-colors font-normal"
                target="_blank"
                rel="noopener noreferrer"
              >
                Behance
              </Link>
            </div>
          </div>

          {/* Footer Content */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 lg:gap-16">
            {/* Left Section - Contact Info */}
            <div className="flex flex-col gap-1">
              <div className="text-white font-normal leading-relaxed">
                +55 51 9 94991466
              </div>
              <div className="text-white font-normal leading-relaxed">
                juliasakakibara@outlook.com
              </div>
            </div>

            {/* Right Section - Copyright */}
            <div className="flex flex-col text-left lg:text-right">
              <div className="text-white font-normal leading-relaxed">
                All rights reserved,
              </div>
              <div className="text-white font-normal leading-relaxed">
                Julia Sakakibara ©{currentYear}
              </div>
            </div>
          </div>

          {/* Legacy Footer Content (hidden by default, can be enabled via config) */}
          {(showWispBranding || rssEnabled) && (
            <div className="border-t border-gray-800 mt-12 pt-8">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
                {showWispBranding && (
                  <div className="text-xs text-gray-400">
                    <Link
                      href={`https://wisp.blog/?utm_source=next-js-template&utm_medium=web&utm_campaign=${config.baseUrl}`}
                      className="hover:text-gray-300 transition-colors"
                    >
                      Designed & Developed by me :)
                    </Link>
                  </div>
                )}

                <div className="flex items-center gap-2">
                  {rssEnabled && (
                    <Link href="/rss">
                      <Button variant="ghost" className="p-2 text-white hover:text-gray-300 hover:bg-gray-800">
                        <Rss className="w-4 h-4" />
                      </Button>
                    </Link>
                  )}
                  <DarkModeToggle />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
};
