import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fetchMediumArticles, type MediumArticle } from '../../utils/mediumRss';
import { personalInfo } from '../../data/content';

export const Articles = () => {
  const [articles, setArticles] = useState<MediumArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const articlesPerPage = 3;

  const loadArticles = async () => {
    setIsRefreshing(true);
    setError(null);
    
    try {
      const username = personalInfo.medium.split('@').pop()?.split('/')[0].split('?')[0] || '';
      const data = await fetchMediumArticles(username);
      setArticles(data);
      if (data.length === 0) setError('No articles found');
    } catch (err) {
      setError('Unable to load articles');
    } finally {
      setLoading(false);
      setIsRefreshing(false);
    }
  };

  useEffect(() => {
    loadArticles();
    const interval = setInterval(() => loadArticles(), 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  const totalPages = Math.ceil(articles.length / articlesPerPage);
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    document.getElementById('articles')?.scrollIntoView({ behavior: 'smooth' });
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  };

  const gradients = [
    'from-blue-500/20 to-cyan-500/20',
    'from-purple-500/20 to-pink-500/20',
    'from-green-500/20 to-emerald-500/20',
  ];

  return (
    <section id="articles" className="section-shell relative overflow-hidden bg-gradient-to-b from-surface-light to-background-light dark:from-surface-dark dark:to-background-dark">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(14,165,233,0.08),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.06),transparent_50%)]"></div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="text-center mb-14">
            <p className="kicker mb-2">Latest Insights</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-primary bg-clip-text text-transparent">
              Articles
            </h2>
            <p className="text-sm md:text-base text-text-secondary-light dark:text-text-secondary-dark max-w-2xl mx-auto">
              DevOps, Infrastructure, and Cloud Architecture insights
            </p>

            {/* Refresh Button */}
            <motion.button
              onClick={loadArticles}
              disabled={isRefreshing}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-accent-primary/10 to-accent-secondary/10 border border-accent-primary/30 text-accent-primary rounded-lg font-medium text-xs hover:bg-accent-primary/20 disabled:opacity-50"
            >
              <motion.svg
                animate={isRefreshing ? { rotate: 360 } : {}}
                transition={{ duration: 1, repeat: isRefreshing ? Infinity : 0, ease: "linear" }}
                className="w-3 h-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </motion.svg>
              {isRefreshing ? 'Refreshing...' : 'Refresh'}
            </motion.button>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="enterprise-card h-48 animate-pulse rounded-xl"></div>
              ))}
            </div>
          )}

          {/* Error State */}
          {!loading && error && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-10 p-4 bg-orange-500/10 border border-orange-500/30 rounded-lg max-w-md mx-auto text-center text-xs"
            >
              <p className="text-orange-600 dark:text-orange-400 font-medium">{error}</p>
            </motion.div>
          )}

          {/* Articles Grid */}
          {!loading && articles.length > 0 && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
                <AnimatePresence mode="wait">
                  {currentArticles.map((article, idx) => (
                    <motion.article
                      key={article.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.4, delay: idx * 0.08 }}
                      whileHover={{ y: -4 }}
                      className="group relative"
                    >
                      <div className={`absolute -inset-0.5 bg-gradient-to-br ${gradients[idx % 3]} rounded-lg blur opacity-0 group-hover:opacity-75 transition-opacity`}></div>
                      
                      <div className="relative enterprise-card p-4 h-full flex flex-col border-2 border-border-light/50 dark:border-border-dark/50 group-hover:border-accent-primary/30">
                        {/* Thumbnail */}
                        <div className="relative w-full h-32 -mx-4 -mt-4 mb-3 overflow-hidden rounded-t-lg bg-gradient-to-br from-accent-primary/10 to-accent-secondary/10">
                          {article.thumbnail ? (
                            <img 
                              src={article.thumbnail} 
                              alt={article.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              onError={(e) => { e.currentTarget.style.display = 'none'; }}
                            />
                          ) : null}
                        </div>

                        {/* Meta */}
                        <div className="flex items-center justify-between gap-2 mb-2 text-xs text-text-muted-light dark:text-text-muted-dark">
                          <span>{formatDate(article.pubDate)}</span>
                          {article.readTime && <span>{article.readTime}</span>}
                        </div>

                        {/* Title */}
                        <h3 className="font-bold text-sm mb-2 line-clamp-2 leading-tight">
                          {article.title}
                        </h3>

                        {/* Description */}
                        <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark mb-3 line-clamp-2 flex-grow">
                          {article.description}
                        </p>

                        {/* Categories */}
                        {article.categories.length > 0 && (
                          <div className="flex flex-wrap gap-1.5 mb-3">
                            {article.categories.slice(0, 2).map((cat, i) => (
                              <span key={i} className="px-2 py-0.5 bg-accent-primary/10 text-accent-primary rounded text-xs font-medium">
                                #{cat}
                              </span>
                            ))}
                          </div>
                        )}

                        {/* Link */}
                        <motion.a
                          href={article.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ x: 2 }}
                          className="inline-flex items-center gap-1 text-xs font-bold text-accent-primary hover:text-accent-secondary"
                        >
                          Read More
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </motion.a>
                      </div>
                    </motion.article>
                  ))}
                </AnimatePresence>
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center justify-center gap-2"
                >
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium bg-border-light dark:bg-border-dark disabled:opacity-40"
                  >
                    ← Prev
                  </button>

                  <div className="flex gap-1">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
                      <button
                        key={num}
                        onClick={() => handlePageChange(num)}
                        className={`w-8 h-8 rounded-lg text-xs font-bold transition-all ${
                          currentPage === num
                            ? 'bg-accent-primary text-white'
                            : 'bg-border-light dark:bg-border-dark hover:text-accent-primary'
                        }`}
                      >
                        {num}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium bg-border-light dark:bg-border-dark disabled:opacity-40"
                  >
                    Next →
                  </button>
                </motion.div>
              )}

              <p className="text-center text-xs text-text-muted-light dark:text-text-muted-dark mt-4">
                {articles.length} article{articles.length !== 1 ? 's' : ''}
              </p>
            </>
          )}

          {/* Empty State */}
          {!loading && !error && articles.length === 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
              <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark mb-3">No articles yet</p>
              <motion.a
                href={personalInfo.medium}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-2 text-xs font-bold text-accent-primary hover:text-accent-secondary"
              >
                Visit Medium Profile →
              </motion.a>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};
