type TBlogPostFrontmatter = {
  title: string;
  description: string;
  pubDate: string;
  author: string;
  image?: {
    url: string;
    alt: string;
  };
  tags: string[];
};

type TBlogPost = {
  url: string | undefined; // TODO: figure out why TS errors when I remove "undefined"
  frontmatter: TBlogPostFrontmatter;
};

type TMainLayoutProps = {
  title: string;
  description?: string;
};

export type { TBlogPostFrontmatter, TBlogPost, TMainLayoutProps };
