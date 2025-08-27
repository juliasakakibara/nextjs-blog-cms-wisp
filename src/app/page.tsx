import { BlogPostsPreview } from "@/components/BlogPostPreview";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { config } from "@/config";
import { wisp } from "@/lib/wisp";

const Page = async () => {
  const result = await wisp.getPosts({ limit: 20 });
  return (
    <>
      <Header />

      {config.hero.enabled && <Hero />}

      <section id="work" className="w-full px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="container mx-auto">
          {/* Section Header */}
          <div className="mb-8 lg:mb-9">
            <h2 className="text-foreground text-[23px] sm:text-[28px] md:text-[35px] lg:text-[41px] font-semibold">
              /feature projects
            </h2>
          </div>
          <BlogPostsPreview posts={result.posts} />
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Page;
