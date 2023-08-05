type BlogPostFrontmatter = {
  title: string;
  description: string;
  pubDate: string;
  author: string;
  image?: {
    url: string;
    alt: string;
  };
  tags?: string[];
};

type MainLayoutProps = {
  title: string;
  description?: string;
};

export type { BlogPostFrontmatter, MainLayoutProps };
