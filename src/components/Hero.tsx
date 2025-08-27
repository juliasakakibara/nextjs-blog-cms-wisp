"use client";
import { config } from "@/config";
import { cn } from "@/lib/utils";
import { FunctionComponent } from "react";

interface HeroProps {
  className?: string;
}

export const Hero: FunctionComponent<HeroProps> = ({
  className,
}) => {
  const sectionClasses = cn(
    "relative w-full flex flex-col items-center justify-center px-4 md:px-8 lg:px-16",
    config.hero.paddingY.mobile,
    `lg:${config.hero.paddingY.desktop}`,
    className
  );

  return (
    <section className={sectionClasses}>
      <div className="max-w-7xl mx-auto w-full">
        {/* Profile Section */}
        <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-24 mb-24 lg:mb-32">
          {/* Name Section */}
          <div className="flex flex-col items-start">
            <h1 className={cn(
              "font-bold tracking-tight",
              "text-5xl sm:text-6xl md:text-7xl lg:text-[76px]",
              "leading-[1] md:leading-[76px]",
              "text-foreground",
              "mb-3"
            )}>
              <div style={{ letterSpacing: "-5px" }}>JULIA</div>
              <div style={{ letterSpacing: "-5px" }}>SAKAKIBARA</div>
            </h1>
          </div>

          {/* Avatar Placeholder */}
          <div className="w-32 h-32 lg:w-42 lg:h-42 rounded-full bg-muted flex-shrink-0 lg:mt-8"></div>
        </div>

        {/* Bio Section */}
        <div className="flex justify-center lg:justify-end">
          <div className="max-w-2xl lg:max-w-3xl">
            <p className={cn(
              "text-2xl sm:text-3xl md:text-4xl lg:text-[40px]",
              "leading-relaxed lg:leading-[1.2]",
              "text-foreground",
              "font-normal"
            )}>
              <span style={{ letterSpacing: "-2.4px" }}>
                Hello, I'm freelancer Designer who codes with 4+ years experience — based{" "}
              </span>
              <span className="text-base lg:text-lg" style={{ letterSpacing: "-2.4px" }}>
                (for now)
              </span>
              <span style={{ letterSpacing: "-2.4px" }}>
                {" "}in Lalala blabla, working remotely.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
