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

      {config.hero.enabled && <Hero />}

      <section id="work" className="w-full px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="container mx-auto">
          {/* Section Header */}
          <div className="mb-8 lg:mb-9">
            <h2 className="text-foreground">
              /feature projects
            </h2>
          </div>
          <BlogPostsPreview posts={result.posts} />
          <BlogPostsPagination pagination={result.pagination} />
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Page;
