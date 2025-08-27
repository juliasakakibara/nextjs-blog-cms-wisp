import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { config } from "@/config";
import { signOgImageUrl } from "@/lib/og-image";
import { wisp } from "@/lib/wisp";
import Link from "next/link";

export async function generateMetadata() {
  return {
    title: "Tags",
    description: "Different blog post categories",
    openGraph: {
      title: "Tags",
      description: "Different blog post categories",
      images: [
        signOgImageUrl({
          title: "Blog Post Categories",
          brand: config.blog.name,
        }),
      ],
    },
  };
}

export default async function Page() {
  const result = await wisp.getTags();

  return (
    <>
      <Header />
      <section className="w-full px-4 sm:px-6 lg:px-8 py-16 lg:py-20 pt-32 sm:pt-36 lg:pt-40">
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <h1 className="mb-2 text-5xl font-bold">Tags</h1>
            <p className="text-lg opacity-50">List of all tags</p>
          </div>
          <div className="my-10 max-w-6xl text-balance text-center text-xl mx-auto mb-48">
            {result.tags.map((tag) => (
              <Link
                key={tag.id}
                href={`/tag/${tag.name}`}
                className="text-primary mr-2 inline-block"
              >
                #{tag.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
