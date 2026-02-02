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
  const cleanUsername = username.replace('@', '').trim();
  
  try {
    return await fetchViaRSS2JSON(cleanUsername);
  } catch (error) {
    try {
      return await fetchDirectRSS(cleanUsername);
    } catch (directError) {
      return [];
    }
  }
};

const fetchViaRSS2JSON = async (username: string): Promise<MediumArticle[]> => {
  const mediumRssUrl = `https://medium.com/feed/@${username}`;
  const rss2JsonUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(mediumRssUrl)}`;
  
  const response = await fetch(rss2JsonUrl);
  
  if (!response.ok) {
    throw new Error(`RSS2JSON HTTP ${response.status}`);
  }

  const data = await response.json();
  
  if (data.status !== 'ok' || !data.items || data.items.length === 0) {
    throw new Error('RSS2JSON returned no data');
  }
  
  return data.items
    .sort((a: any, b: any) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime())
    .map((item: any) => ({
      id: item.guid || item.link,
      title: item.title || 'Untitled',
      link: item.link,
      pubDate: item.pubDate,
      description: (item.description || '').replace(/<[^>]*>/g, '').trim().substring(0, 200) + '...',
      thumbnail: item.thumbnail || extractImageFromContent(item.content || item.description),
      categories: item.categories || [],
      author: item.author || username,
      readTime: calculateReadTime(item.content || item.description)
    }));
};

const fetchDirectRSS = async (username: string): Promise<MediumArticle[]> => {
  const mediumRssUrl = `https://medium.com/feed/@${username}`;
  const corsProxy = 'https://api.allorigins.win/raw?url=';
  const proxyUrl = `${corsProxy}${encodeURIComponent(mediumRssUrl)}`;
  
  const response = await fetch(proxyUrl);
  
  if (!response.ok) {
    throw new Error(`Direct RSS HTTP ${response.status}`);
  }

  const xmlText = await response.text();
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlText, 'text/xml');
  
  const items = Array.from(xmlDoc.querySelectorAll('item'));
  
  if (items.length === 0) {
    throw new Error('No items found in RSS feed');
  }
  
  const articles = items.map((item, index) => {
    const title = item.querySelector('title')?.textContent || 'Untitled';
    const link = item.querySelector('link')?.textContent || '';
    const pubDate = item.querySelector('pubDate')?.textContent || new Date().toISOString();
    const description = item.querySelector('description')?.textContent || '';
    const content = item.querySelector('content\\:encoded, encoded')?.textContent || description;
    
    const categories = Array.from(item.querySelectorAll('category'))
      .map(cat => cat.textContent || '')
      .filter(Boolean);
    
    const cleanDesc = description.replace(/<[^>]*>/g, '').trim();
    
    return {
      id: item.querySelector('guid')?.textContent || link || `article-${index}`,
      title,
      link,
      pubDate,
      description: cleanDesc.substring(0, 200) + (cleanDesc.length > 200 ? '...' : ''),
      thumbnail: extractImageFromContent(content),
      categories,
      author: username,
      readTime: calculateReadTime(content)
    };
  });
  
  return articles.sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime());
};

const extractImageFromContent = (content: string): string | undefined => {
  if (!content) return undefined;
  const imgMatch = content.match(/<img[^>]+src="([^">]+)"/i);
  return imgMatch ? imgMatch[1] : undefined;
};

const calculateReadTime = (content: string): string => {
  if (!content) return '5 min read';
  const words = content.replace(/<[^>]*>/g, '').split(/\s+/).filter(w => w.length > 0).length;
  return `${Math.max(1, Math.ceil(words / 200))} min read`;
};
