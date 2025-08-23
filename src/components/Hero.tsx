"use client";
import { config } from "@/config";
import { cn } from "@/lib/utils";
import { FunctionComponent } from "react";

interface HeroProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

export const Hero: FunctionComponent<HeroProps> = ({
  title = config.hero.title,
  subtitle = config.hero.subtitle,
  className,
}) => {
  const sectionClasses = cn(
    "relative w-full flex flex-col items-center justify-center px-4 md:px-8 lg:px-32",
    config.hero.paddingY.mobile,
    `lg:${config.hero.paddingY.desktop}`,
    className
  );

  return (
    <section className={sectionClasses}>
      <div className="max-w-6xl mx-auto w-full flex flex-col items-center gap-10 md:gap-16">
        {/* Main Title */}
        <h1 className={cn(
          "text-center font-black tracking-tight",
          "text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[150px]",
          "leading-[0.85] md:leading-[0.9]",
          "text-foreground",
          "max-w-5xl"
        )}>
          <span style={{ letterSpacing: "-0.015em" }}>
            {title}
          </span>
        </h1>

        {/* Subtitle */}
        <div className={cn(
          "text-center max-w-4xl",
          "text-lg sm:text-xl md:text-2xl lg:text-2xl",
          "leading-relaxed md:leading-[1.4]",
          "text-muted-foreground",
          "font-normal"
        )}>
          <span style={{ letterSpacing: "-0.005em" }}>
            {subtitle}
          </span>
        </div>
      </div>
    </section>
  );
};
