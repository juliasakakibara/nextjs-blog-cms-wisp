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
    "relative w-full flex flex-col items-center justify-center",
    config.hero.paddingY.mobile,
    `lg:${config.hero.paddingY.desktop}`,
    className
  );

  return (
    <section className={sectionClasses}>
      <div className="w-full">
        {/* Profile Section */}
        <div className="mb-16 lg:mb-20">
          {/* Name Section */}
          <div className="flex flex-col items-start">
            <h1 className={cn(
              "font-bold",
              "text-4xl sm:text-5xl md:text-6xl lg:text-[76px]",
              "leading-[1] lg:leading-[76px]",
              "text-foreground",
              "tracking-[-0.05em] lg:tracking-[-0.06em]"
            )}>
              <div className="mb-2 lg:mb-3">JULIA</div>
              <div>SAKAKIBARA</div>
            </h1>
          </div>
        </div>

        {/* Bio Section */}
        <div className="flex justify-start lg:justify-end lg:pr-6">
          <div className="max-w-full lg:max-w-[600px]">
            <p className={cn(
              "text-xl sm:text-2xl md:text-3xl lg:text-[40px]",
              "leading-relaxed lg:leading-[1.3]",
              "text-foreground",
              "font-normal",
              "tracking-[-0.02em] lg:tracking-[-0.03em]"
            )}>
              <span>
                Hello, I'm freelancer Designer who codes with 4+ years experience — based{" "}
              </span>
              <span className="text-sm lg:text-base">
                (for now)
              </span>
              <span>
                {" "}in Lalala blabla, working remotely.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
