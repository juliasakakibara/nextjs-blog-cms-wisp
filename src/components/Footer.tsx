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

  const copyrightText = showYear
    ? `© ${config.blog.copyright} ${currentYear}`
    : `© ${config.blog.copyright}`;

  return (
    <section className={footerClasses}>
      <div className="flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          {copyrightText}
        </div>

        {showWispBranding && (
          <div className="text-xs text-muted-foreground hidden lg:block">
            <Link
              href={`https://wisp.blog/?utm_source=next-js-template&utm_medium=web&utm_campaign=${config.baseUrl}`}
            >
              Blog powered by wisp
            </Link>
          </div>
        )}

        <div>
          {rssEnabled && (
            <Link href="/rss">
              <Button variant="ghost" className="p-2">
                <Rss className="w-4 h-4" />
              </Button>
            </Link>
          )}
          <DarkModeToggle />
        </div>
      </div>

      {showWispBranding && (
        <div className="text-xs text-muted-foreground lg:hidden">
          <Link
            href={`https://wisp.blog/?utm_source=next-js-template&utm_medium=web&utm_campaign=${config.baseUrl}`}
          >
            Blog powered by wisp
          </Link>
        </div>
      )}
    </section>
  );
};
