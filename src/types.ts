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

type BlogPost = {
  url: string | undefined; // TODO: figure out why TS errors when I remove "undefined"
  frontmatter: BlogPostFrontmatter;
};

type MainLayoutProps = {
  title: string;
  description?: string;
};

export type { BlogPostFrontmatter, BlogPost, MainLayoutProps };
