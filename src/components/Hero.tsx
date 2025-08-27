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
        <div className="mb-16 lg:mb-20">
          {/* Name Section */}
          <div className="flex flex-col items-start">
            <h1 className={cn(
              "font-bold tracking-tight",
              "text-4xl sm:text-5xl md:text-6xl lg:text-[76px]",
              "leading-[1] lg:leading-[76px]",
              "text-foreground"
            )}>
              <div className="mb-2 lg:mb-3" style={{ letterSpacing: "-5px" }}>JULIA</div>
              <div style={{ letterSpacing: "-5px" }}>SAKAKIBARA</div>
            </h1>
          </div>
        </div>

        {/* Bio Section */}
        <div className="flex justify-start lg:justify-end lg:pr-4">
          <div className="max-w-full lg:max-w-[600px]">
            <p className={cn(
              "text-xl sm:text-2xl md:text-3xl lg:text-[40px]",
              "leading-relaxed lg:leading-[1.3]",
              "text-foreground",
              "font-normal"
            )}>
              <span style={{ letterSpacing: "-2.4px" }}>
                Hello, I'm freelancer Designer who codes with 4+ years experience — based{" "}
              </span>
              <span className="text-sm lg:text-base" style={{ letterSpacing: "-2.4px" }}>
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
