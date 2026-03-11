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
    } catch {
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

  return (
    <section id="articles" className="section-shell">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-header">
            <p className="kicker mb-2">Publications</p>
            <h2 className="section-title">Recent Articles</h2>
            <p className="section-subtitle">Recent writing on DevSecOps, cybersecurity, MLOps, and applied AI engineering.</p>

            <motion.button
              onClick={loadArticles}
              disabled={isRefreshing}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 border border-border text-accent rounded-md font-medium text-xs hover:border-accent/50 disabled:opacity-50"
            >
              <motion.svg
                animate={isRefreshing ? { rotate: 360 } : {}}
                transition={{ duration: 1, repeat: isRefreshing ? Infinity : 0, ease: 'linear' }}
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

          {loading && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-10">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="card h-40 animate-pulse"></div>
              ))}
            </div>
          )}

          {!loading && error && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-10 p-4 border border-orange-500/30 rounded-md max-w-md text-center text-xs">
              <p className="text-orange-600 font-medium">{error}</p>
            </motion.div>
          )}

          {!loading && articles.length > 0 && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                <AnimatePresence mode="wait">
                  {currentArticles.map((article, idx) => (
                    <motion.article
                      key={article.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3, delay: idx * 0.05 }}
                      className="card p-4"
                    >
                      <div className="flex items-center justify-between gap-2 mb-2 text-xs text-text-muted">
                        <span>{formatDate(article.pubDate)}</span>
                        {article.readTime && <span>{article.readTime}</span>}
                      </div>

                      <h3 className="text-base mb-2 line-clamp-2 leading-tight">{article.title}</h3>

                      <p className="text-sm text-text-secondary mb-3 line-clamp-2">{article.description}</p>

                      {article.categories.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mb-3">
                          {article.categories.slice(0, 2).map((cat, i) => (
                            <span key={i} className="tech-badge text-xs">{cat}</span>
                          ))}
                        </div>
                      )}

                      <a href={article.link} target="_blank" rel="noopener noreferrer" className="text-sm text-accent hover:underline">
                        Read article
                      </a>
                    </motion.article>
                  ))}
                </AnimatePresence>
              </div>

              {totalPages > 1 && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center justify-center gap-2">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-3 py-1.5 rounded-md text-xs font-medium border border-border disabled:opacity-40"
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
                            ? 'bg-accent text-white'
                            : 'border border-border text-text-secondary hover:text-accent'
                        }`}
                      >
                        {num}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-3 py-1.5 rounded-md text-xs font-medium border border-border disabled:opacity-40"
                  >
                    Next →
                  </button>
                </motion.div>
              )}

              <p className="text-center text-xs text-text-muted mt-4">
                {articles.length} article{articles.length !== 1 ? 's' : ''}
              </p>
            </>
          )}

          {!loading && !error && articles.length === 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
              <p className="text-sm text-text-secondary mb-3">No articles yet</p>
              <motion.a
                href={personalInfo.medium}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-2 text-xs font-bold text-accent"
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
