import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function get() {
  // TO-DO: update when live
  return rss({
    title: 'smatysiak.dev | Blog',
    description: 'My digital garden',
    site: 'https://my-blog-site.netlify.app',
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>en-us</language>`,
  });
}
