export type Props = {
  frontmatter: {
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
};
