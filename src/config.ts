const buildConfig = () => {
  const blogId = process.env.NEXT_PUBLIC_BLOG_ID;
  if (!blogId) throw new Error("NEXT_PUBLIC_BLOG_ID is missing");

  // Basic blog configuration
  const name = process.env.NEXT_PUBLIC_BLOG_DISPLAY_NAME || "Travel.";
  const copyright = process.env.NEXT_PUBLIC_BLOG_COPYRIGHT || "Samantha";
  const defaultTitle = process.env.NEXT_DEFAULT_METADATA_DEFAULT_TITLE || "Travel with Samantha";
  const defaultDescription = process.env.NEXT_PUBLIC_BLOG_DESCRIPTION || "Blog about travel and lifestyle.";

  // Layout & Design tokens
  const layoutTokens = {
    maxWidth: process.env.NEXT_PUBLIC_MAX_WIDTH || "6xl",
    containerPadding: process.env.NEXT_PUBLIC_CONTAINER_PADDING || "2rem",
    fontFamily: process.env.NEXT_PUBLIC_FONT_FAMILY || "Inter",
    language: process.env.NEXT_PUBLIC_LANGUAGE || "en",
  };

  // Navigation tokens
  const navigationTokens = {
    menuItems: JSON.parse(process.env.NEXT_PUBLIC_MENU_ITEMS || '[{"name":"Blog","href":"/"},{"name":"About","href":"/about"}]'),
    rssEnabled: process.env.NEXT_PUBLIC_RSS_ENABLED !== "false",
  };

  // Content tokens
  const contentTokens = {
    placeholderImage: process.env.NEXT_PUBLIC_PLACEHOLDER_IMAGE || "/images/placeholder.webp",
    loadingText: process.env.NEXT_PUBLIC_LOADING_TEXT || "Loading...",
  };

  // Comments tokens
  const commentsTokens = {
    addCommentsTitle: process.env.NEXT_PUBLIC_COMMENTS_TITLE_ADD || "Add Comments",
    commentsListTitle: process.env.NEXT_PUBLIC_COMMENTS_TITLE_LIST || "Comments",
  };

  // Header tokens
  const headerTokens = {
    titleSize: {
      mobile: process.env.NEXT_PUBLIC_HEADER_TITLE_SIZE_MOBILE || "text-4xl",
      desktop: process.env.NEXT_PUBLIC_HEADER_TITLE_SIZE_DESKTOP || "text-6xl",
    },
    marginTop: {
      mobile: process.env.NEXT_PUBLIC_HEADER_MARGIN_TOP_MOBILE || "mt-8",
      desktop: process.env.NEXT_PUBLIC_HEADER_MARGIN_TOP_DESKTOP || "mt-16",
    },
    marginBottom: process.env.NEXT_PUBLIC_HEADER_MARGIN_BOTTOM || "mb-12",
  };

  // Footer tokens
  const footerTokens = {
    marginTop: {
      mobile: process.env.NEXT_PUBLIC_FOOTER_MARGIN_TOP_MOBILE || "mt-8",
      desktop: process.env.NEXT_PUBLIC_FOOTER_MARGIN_TOP_DESKTOP || "mt-16",
    },
    marginBottom: process.env.NEXT_PUBLIC_FOOTER_MARGIN_BOTTOM || "mb-12",
    showYear: process.env.NEXT_PUBLIC_FOOTER_SHOW_YEAR !== "false",
  };

  // SEO tokens
  const seoTokens = {
    ogImageWidth: parseInt(process.env.NEXT_PUBLIC_OG_IMAGE_WIDTH || "1200"),
    ogImageHeight: parseInt(process.env.NEXT_PUBLIC_OG_IMAGE_HEIGHT || "630"),
  };

  // Hero tokens
  const heroTokens = {
    title: process.env.NEXT_PUBLIC_HERO_TITLE || "hacker space.",
    subtitle: process.env.NEXT_PUBLIC_HERO_SUBTITLE || "Building lasting connections with your audience is our mission. We infuse creativity into every touchpoint, whether it's customer experience, relationship management, or commerce.",
    enabled: process.env.NEXT_PUBLIC_HERO_ENABLED !== "false",
    paddingY: {
      mobile: process.env.NEXT_PUBLIC_HERO_PADDING_Y_MOBILE || "py-20",
      desktop: process.env.NEXT_PUBLIC_HERO_PADDING_Y_DESKTOP || "py-40",
    },
  };

  return {
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000",
    blog: {
      name,
      copyright,
      metadata: {
        title: {
          absolute: defaultTitle,
          default: defaultTitle,
          template: `%s - ${defaultTitle}`,
        },
        description: defaultDescription,
      },
    },
    ogImageSecret: process.env.OG_IMAGE_SECRET || "secret_used_for_signing_and_verifying_the_og_image_url",
    wisp: {
      blogId,
    },
    // New token categories
    layout: layoutTokens,
    navigation: navigationTokens,
    content: contentTokens,
    comments: commentsTokens,
    header: headerTokens,
    footer: footerTokens,
    seo: seoTokens,
    hero: heroTokens,
  };
};

export const config = buildConfig();
