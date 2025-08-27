"use client";
import { config } from "@/config";
import Link from "next/link";
import { FunctionComponent } from "react";
import { DarkModeToggle } from "./DarkModeToggle";

export const Footer: FunctionComponent = () => {
  const currentYear = new Date().getFullYear();
  const showYear = config.footer.showYear;
  const showWispBranding = config.navigation.showWispBranding;

  return (
    <footer className="bg-background text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          {/* Footer Content */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 lg:gap-16">
            {/* Left Section - Contact Info */}
            <div className="flex flex-col gap-1">
              <div className="text-muted-foreground font-normal leading-relaxed">
                +55 51 9 94991466
              </div>
              <div className="text-muted-foreground font-normal leading-relaxed">
                juliasakakibara@outlook.com
              </div>
            </div>

            {/* Right Section - Social Links */}
            <div className="flex gap-6">
              <Link
                href="https://linkedin.com"
                className="text-muted-foreground hover:text-foreground transition-colors font-normal"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin
              </Link>
              <Link
                href="https://twitter.com"
                className="text-muted-foreground hover:text-foreground transition-colors font-normal"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </Link>
              <Link
                href="https://behance.net"
                className="text-muted-foreground hover:text-foreground transition-colors font-normal"
                target="_blank"
                rel="noopener noreferrer"
              >
                Behance
              </Link>
            </div>
          </div>

          {/* Legacy Footer Content (hidden by default, can be enabled via config) */}
          {showWispBranding && (
            <div className="border-t border-border mt-12 pt-8">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
                {showWispBranding && (
                  <div className="text-xs text-muted-foreground">
                    Designed & Developed by me :)
                  </div>
                )}

                <div className="flex items-center gap-2">
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
