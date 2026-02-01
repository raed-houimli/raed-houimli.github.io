export interface MediumArticle {
  id: string;
  title: string;
  link: string;
  pubDate: string;
  description: string;
  thumbnail?: string;
  categories: string[];
  author: string;
  readTime?: string;
}

export const fetchMediumArticles = async (username: string): Promise<MediumArticle[]> => {
  try {
    const rssUrl = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${username}`;
    const response = await fetch(rssUrl);
    
    if (!response.ok) {
      throw new Error('Failed to fetch Medium articles');
    }

    const data = await response.json();
    
    return data.items.map((item: any) => ({
      id: item.guid,
      title: item.title,
      link: item.link,
      pubDate: item.pubDate,
      description: item.description.replace(/<[^>]*>/g, '').substring(0, 200) + '...',
      thumbnail: item.thumbnail || extractImageFromContent(item.content),
      categories: item.categories || [],
      author: item.author,
      readTime: calculateReadTime(item.description)
    }));
  } catch (error) {
    console.error('Error fetching Medium articles:', error);
    return [];
  }
};

const extractImageFromContent = (content: string): string | undefined => {
  const imgRegex = /<img[^>]+src="([^">]+)"/;
  const match = content.match(imgRegex);
  return match ? match[1] : undefined;
};

const calculateReadTime = (content: string): string => {
  const text = content.replace(/<[^>]*>/g, '');
  const wordCount = text.split(/\s+/).length;
  const readTime = Math.ceil(wordCount / 200);
  return `${readTime} min read`;
};
