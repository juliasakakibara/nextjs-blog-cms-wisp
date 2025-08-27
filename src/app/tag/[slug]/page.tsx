import { BlogPostsPreview } from "@/components/BlogPostPreview";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Badge } from "@/components/ui/badge";
import { wisp } from "@/lib/wisp";
import { CircleX } from "lucide-react";
import Link from "next/link";

interface Params {
  slug: string;
}

export async function generateMetadata(
  props: {
    params: Promise<Params>;
  }
) {
  const params = await props.params;

  const {
    slug
  } = params;

  return {
    title: `#${slug}`,
    description: `Posts tagged with #${slug}`,
  };
}

const Page = async (
  props: {
    params: Promise<Params>;
  }
) => {
  const params = await props.params;

  const {
    slug
  } = params;

  const result = await wisp.getPosts({ limit: 20, tags: [slug] });
  return (
    <>
      <Header />
      <section className="w-full px-4 sm:px-6 lg:px-8 py-16 lg:py-20 pt-32 sm:pt-36 lg:pt-40">
        <div className="container mx-auto">
          <Link href="/">
            <Badge className="px-2 py-1">
              <CircleX className="inline-block w-4 h-4 mr-2" />
              Posts tagged with <strong className="mx-2">#{slug}</strong>{" "}
            </Badge>
          </Link>
          <BlogPostsPreview posts={result.posts} />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Page;
