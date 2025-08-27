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
    "relative w-full h-screen flex flex-col items-center justify-center",
    "px-4 sm:px-6 lg:px-8",
    className
  );

  return (
    <section className={sectionClasses}>
      <div className="container mx-auto w-full flex flex-col justify-center h-full">
        {/* Profile Section */}
        <div className="mb-8 lg:mb-12">
          {/* Name Section */}
          <div className="flex flex-col items-start">
            <h1 className={cn(
              "font-bold",
              "text-[40px] sm:text-[53px] md:text-[66px] lg:text-[84px]",
              "leading-[1] lg:leading-[84px]",
              "text-foreground",
              "tracking-[-0.05em] lg:tracking-[-0.06em]"
            )}>
              <div className="mb-2 lg:mb-3">JULIA</div>
              <div>SAKAKIBARA</div>
            </h1>
          </div>
        </div>

        {/* Bio Section */}
        <div className="flex justify-start lg:justify-end">
          <div className="max-w-full lg:max-w-[600px]">
            <p className={cn(
              "text-[18px] sm:text-[22px] md:text-[27px] lg:text-[36px]",
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
