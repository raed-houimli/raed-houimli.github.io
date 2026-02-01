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
    // Clean username - remove @ if present
    const cleanUsername = username.replace('@', '').trim();
    
    // Try direct Medium RSS feed first (more reliable)
    const mediumRssUrl = `https://medium.com/feed/@${cleanUsername}`;
    const rss2JsonUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(mediumRssUrl)}`;
    
    console.log('Fetching from Medium RSS:', mediumRssUrl);
    console.log('Using RSS2JSON URL:', rss2JsonUrl);
    
    const response = await fetch(rss2JsonUrl, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    });
    
    if (!response.ok) {
      console.error('RSS2JSON API HTTP error:', response.status, response.statusText);
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    
    console.log('RSS2JSON Full Response:', data);
    
    if (data.status !== 'ok') {
      console.error('RSS2JSON returned error status:', data);
      throw new Error(data.message || 'RSS feed error');
    }

    if (!data.items || data.items.length === 0) {
      console.warn('No articles found in RSS feed');
      console.warn('Feed URL:', data.feed?.url);
      console.warn('Feed title:', data.feed?.title);
      return [];
    }
    
    console.log(`Successfully fetched ${data.items.length} articles`);
    
    return data.items.map((item: any) => {
      const cleanDescription = item.description?.replace(/<[^>]*>/g, '').trim() || item.content?.replace(/<[^>]*>/g, '').trim() || '';
      
      return {
        id: item.guid || item.link,
        title: item.title || 'Untitled',
        link: item.link,
        pubDate: item.pubDate,
        description: cleanDescription.substring(0, 200) + (cleanDescription.length > 200 ? '...' : ''),
        thumbnail: item.thumbnail || extractImageFromContent(item.content || item.description || ''),
        categories: item.categories || [],
        author: item.author || cleanUsername,
        readTime: calculateReadTime(item.content || item.description || '')
      };
    });
  } catch (error: any) {
    console.error('Error fetching Medium articles:', error);
    console.error('Error details:', {
      message: error.message,
      stack: error.stack
    });
    
    return [];
  }
};

const extractImageFromContent = (content: string): string | undefined => {
  if (!content) return undefined;
  
  // Try multiple image extraction patterns
  const patterns = [
    /<img[^>]+src="([^">]+)"/i,
    /<img[^>]+src='([^'>]+)'/i,
    /!\[.*?\]\((https?:\/\/[^\)]+)\)/i, // Markdown images
  ];
  
  for (const pattern of patterns) {
    const match = content.match(pattern);
    if (match && match[1]) {
      return match[1];
    }
  }
  
  return undefined;
};

const calculateReadTime = (content: string): string => {
  if (!content) return '5 min read';
  const text = content.replace(/<[^>]*>/g, '');
  const wordCount = text.split(/\s+/).filter(word => word.length > 0).length;
  const readTime = Math.max(1, Math.ceil(wordCount / 200));
  return `${readTime} min read`;
};
