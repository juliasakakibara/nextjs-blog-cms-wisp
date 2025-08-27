import { BlogPostsPreview } from "@/components/BlogPostPreview";
import { BlogPostsPagination } from "@/components/BlogPostsPagination";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { config } from "@/config";
import { wisp } from "@/lib/wisp";

const Page = async (
  props: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
  }
) => {
  const searchParams = await props.searchParams;
  const page = searchParams.page ? parseInt(searchParams.page as string) : 1;
  const result = await wisp.getPosts({ limit: 6, page });
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-10 pt-20 md:pt-24">
        {config.hero.enabled && <Hero />}
        <section id="work">
          {/* Section Header */}
          <div className="mb-8 lg:mb-9">
            <h2 className="text-foreground">
              work.
            </h2>
          </div>
          <BlogPostsPreview posts={result.posts} />
        </section>
        <BlogPostsPagination pagination={result.pagination} />
        <Footer />
      </div>
    </>
  );
};

export default Page;
