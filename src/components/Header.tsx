"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { config } from "@/config";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FunctionComponent, useEffect, useState } from "react";

interface MenuItem {
  name: string;
  href: string;
  openInNewTab?: boolean;
}

const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(null);
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 50) {
        // Always show header when near top
        setScrollDirection("up");
      } else if (currentScrollY > prevScrollY) {
        // Scrolling down
        setScrollDirection("down");
      } else if (currentScrollY < prevScrollY) {
        // Scrolling up
        setScrollDirection("up");
      }

      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollY]);

  return scrollDirection;
};

export const Navigation: FunctionComponent = () => {
  const pathname = usePathname();

  // Menu items configurados
  const menuItems: MenuItem[] = [
    { name: "/feature projects", href: "#work" },
    { name: "/about", href: "/about" }
  ];

  return (
    <nav>
      <div className="hidden md:flex items-center">
        {menuItems.map((item) => (
          <div key={item.href} className="ml-4 md:ml-8">
            <a
              href={item.href}
              target={item.openInNewTab ? "_blank" : "_self"}
              className={cn(
                "hover:text-[#929292] font-semibold",
                pathname === item.href && "font-semibold"
              )}
            >
              {item.name}
            </a>
          </div>
        ))}
      </div>
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <Menu size="24" />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <SheetDescription>
                {menuItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    target={item.openInNewTab ? "_blank" : "_self"}
                    className={cn(
                      "block py-2 font-semibold",
                      pathname === item.href && "font-semibold"
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export const Header: FunctionComponent = () => {
  const scrollDirection = useScrollDirection();
  const isVisible = scrollDirection !== "down";

  const headerClasses = cn(
    "fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm",
    "flex items-center justify-between px-4 sm:px-6 lg:px-8 pt-[18px] sm:pt-[26px] lg:pt-[35px] pb-4 sm:pb-6 lg:pb-8 transition-transform duration-300 ease-in-out",
    isVisible ? "transform translate-y-0" : "transform -translate-y-full"
  );

  const titleClasses = cn(
    config.header.titleSize.mobile,
    `md:${config.header.titleSize.desktop}`,
    "font-bold tracking-tighter leading-tight"
  );

  return (
    <section className={headerClasses}>
      <Link href="/">
        <h1 className={titleClasses}>
          {config.blog.name}
        </h1>
      </Link>
      <Navigation />
    </section>
  );
};
