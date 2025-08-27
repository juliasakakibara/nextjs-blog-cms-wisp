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
    <div className="container mx-auto px-5 mb-10">
      <Header />
      {config.hero.enabled && <Hero />}
      <section id="work">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8 lg:mb-9">
          <h2 className="text-2xl lg:text-[30px] font-normal leading-[1.2] tracking-[-0.02em] text-foreground">
            work.
          </h2>
          <button className="bg-muted hover:bg-muted/80 transition-colors px-6 lg:px-7 py-3 lg:py-4 rounded-none">
            <span className="text-sm lg:text-base font-medium leading-[1.2] tracking-[-0.01em] text-foreground">
              Show More
            </span>
          </button>
        </div>
        <BlogPostsPreview posts={result.posts} />
      </section>
      <BlogPostsPagination pagination={result.pagination} />
      <Footer />
    </div>
  );
};

export default Page;
