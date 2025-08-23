import { config } from "@/config";
import { signOgImageUrl } from "@/lib/og-image";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

// Dynamic font loading based on config
const fontSans = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: {
    absolute: config.blog.metadata.title.absolute,
    default: config.blog.metadata.title.default,
    template: config.blog.metadata.title.template,
  },
  description: config.blog.metadata.description,
  openGraph: {
    title: config.blog.metadata.title.default,
    description: config.blog.metadata.description,
    images: [
      signOgImageUrl({
        title: config.blog.name,
        width: config.seo.ogImageWidth,
        height: config.seo.ogImageHeight,
      }),
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Dynamic container classes based on configuration
  const containerClasses = cn(
    "min-h-screen bg-background font-sans antialiased m-auto",
    `max-w-${config.layout.maxWidth}`,
    fontSans.variable
  );

  return (
    <html lang={config.layout.language}>
      <body className={containerClasses}>
        <Providers>
          <main style={{ padding: config.layout.containerPadding }}>
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
