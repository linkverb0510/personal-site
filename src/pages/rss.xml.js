import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { siteConfig } from '../data/site';
import { isProductionVisible, sortByDateDesc } from '../utils/content';

export async function GET() {
  const posts = sortByDateDesc((await getCollection('blog')).filter((post) => isProductionVisible(post.data.draft)));
  const site = import.meta.env.PUBLIC_SITE_URL ?? siteConfig.siteUrl;

  return rss({
    title: siteConfig.title,
    description: siteConfig.description,
    site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `/blog/${post.id}/`,
    })),
    customData: '<language>zh-CN</language>',
  });
}
