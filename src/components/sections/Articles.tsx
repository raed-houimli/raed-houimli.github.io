import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fetchMediumArticles, type MediumArticle } from '../../utils/mediumRss';
import { personalInfo } from '../../data/content';

export const Articles = () => {
  const [articles, setArticles] = useState<MediumArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 3;

  useEffect(() => {
    const loadArticles = async () => {
      const username = personalInfo.medium.split('@')[1];
      const data = await fetchMediumArticles(username);
      setArticles(data);
      setLoading(false);
    };

    loadArticles();
  }, []);

  // Pagination
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
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  // Gradient colors for article cards
  const gradients = [
    'from-blue-500/20 via-cyan-500/20 to-blue-500/20',
    'from-purple-500/20 via-pink-500/20 to-purple-500/20',
    'from-green-500/20 via-emerald-500/20 to-green-500/20',
  ];

  return (
    <section id="articles" className="section-shell relative overflow-hidden bg-gradient-to-b from-surface-light to-background-light dark:from-surface-dark dark:to-background-dark">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(14,165,233,0.08),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.06),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, type: "spring" }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 mb-6"
            >
              <svg className="w-8 h-8 text-accent-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </motion.div>
            <p className="kicker mb-4">Latest Insights</p>
            <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-primary bg-clip-text text-transparent">
              Technical Articles
            </h2>
            <p className="text-lg md:text-xl text-text-secondary-light dark:text-text-secondary-dark max-w-3xl mx-auto leading-relaxed">
              Deep dives into <span className="text-accent-primary font-semibold">DevOps, Infrastructure, and Cloud Architecture</span> on Medium
            </p>
            <div className="section-divider-glow mt-10 max-w-md mx-auto"></div>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="enterprise-card overflow-hidden animate-pulse">
                  <div className="w-full h-56 bg-gradient-to-br from-accent-primary/10 to-accent-secondary/10 rounded-t-xl"></div>
                  <div className="p-6">
                    <div className="h-4 bg-surface-light dark:bg-surface-dark rounded w-3/4 mb-4"></div>
                    <div className="h-3 bg-surface-light dark:bg-surface-dark rounded w-full mb-2"></div>
                    <div className="h-3 bg-surface-light dark:bg-surface-dark rounded w-5/6"></div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Articles Grid */}
          {!loading && articles.length > 0 && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <AnimatePresence mode="wait">
                  {currentArticles.map((article, idx) => (
                    <motion.article
                      key={article.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -30 }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      whileHover={{ y: -8 }}
                      className="group relative"
                    >
                      {/* Card Glow Effect */}
                      <div className={`absolute -inset-1 bg-gradient-to-br ${gradients[idx % 3]} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                      
                      {/* Card */}
                      <div className="relative h-full enterprise-card overflow-hidden border-2 border-border-light/50 dark:border-border-dark/50 group-hover:border-accent-primary/30 transition-all">
                        {/* Thumbnail or Gradient Placeholder */}
                        <div className="relative w-full h-56 overflow-hidden">
                          {article.thumbnail ? (
                            <img 
                              src={article.thumbnail} 
                              alt={article.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                              onError={(e) => {
                                // Fallback to gradient if image fails to load
                                e.currentTarget.style.display = 'none';
                                e.currentTarget.parentElement!.querySelector('.gradient-fallback')!.classList.remove('hidden');
                              }}
                            />
                          ) : null}
                          
                          {/* Gradient Fallback */}
                          <div className={`gradient-fallback absolute inset-0 bg-gradient-to-br ${gradients[idx % 3]} flex items-center justify-center ${article.thumbnail ? 'hidden' : ''}`}>
                            <motion.div
                              whileHover={{ scale: 1.1, rotate: 5 }}
                              className="w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center"
                            >
                              <svg className="w-10 h-10 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                              </svg>
                            </motion.div>
                          </div>

                          {/* Overlay Gradient */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                          
                          {/* Read Time Badge */}
                          {article.readTime && (
                            <div className="absolute top-4 right-4 px-3 py-1.5 bg-black/60 backdrop-blur-md text-white rounded-lg text-xs font-bold flex items-center gap-1.5 shadow-lg">
                              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              {article.readTime}
                            </div>
                          )}
                        </div>

                        {/* Content */}
                        <div className="p-6">
                          {/* Meta Info */}
                          <div className="flex items-center gap-3 mb-4 text-xs text-text-muted-light dark:text-text-muted-dark">
                            <span className="flex items-center gap-1.5 px-2 py-1 bg-accent-primary/10 text-accent-primary rounded-md font-medium">
                              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                              {formatDate(article.pubDate)}
                            </span>
                          </div>

                          {/* Title */}
                          <h3 className="text-xl font-bold mb-3 leading-tight group-hover:text-accent-primary transition-colors line-clamp-2 min-h-[3.5rem]">
                            {article.title}
                          </h3>

                          {/* Description */}
                          <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark mb-4 leading-relaxed line-clamp-3 min-h-[4rem]">
                            {article.description}
                          </p>

                          {/* Categories */}
                          {article.categories.length > 0 && (
                            <div className="flex flex-wrap gap-2 mb-5">
                              {article.categories.slice(0, 2).map((category, i) => (
                                <span 
                                  key={i}
                                  className="px-2.5 py-1 bg-gradient-to-r from-accent-primary/10 to-accent-secondary/10 text-accent-primary rounded-lg text-xs font-semibold border border-accent-primary/20"
                                >
                                  #{category}
                                </span>
                              ))}
                              {article.categories.length > 2 && (
                                <span className="px-2.5 py-1 text-xs text-text-muted-light dark:text-text-muted-dark">
                                  +{article.categories.length - 2}
                                </span>
                              )}
                            </div>
                          )}

                          {/* Read More Link */}
                          <motion.a
                            href={article.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ x: 4 }}
                            className="inline-flex items-center gap-2 text-sm font-bold text-accent-primary hover:text-accent-secondary transition-colors group/link"
                          >
                            Read on Medium
                            <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </motion.a>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </AnimatePresence>
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center justify-center gap-3"
                >
                  <motion.button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    whileHover={{ scale: currentPage === 1 ? 1 : 1.05 }}
                    whileTap={{ scale: currentPage === 1 ? 1 : 0.95 }}
                    className="px-5 py-2.5 rounded-xl font-bold text-sm transition-all disabled:opacity-40 disabled:cursor-not-allowed bg-gradient-to-r from-accent-primary/10 to-accent-secondary/10 border border-accent-primary/20 text-accent-primary hover:border-accent-primary/40 hover:shadow-lg"
                  >
                    ← Previous
                  </motion.button>

                  <div className="flex gap-2">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                      <motion.button
                        key={pageNum}
                        onClick={() => handlePageChange(pageNum)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className={`w-11 h-11 rounded-xl font-bold text-sm transition-all ${
                          currentPage === pageNum
                            ? 'bg-gradient-to-r from-accent-primary to-accent-secondary text-white shadow-xl shadow-accent-primary/30'
                            : 'bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark text-text-secondary-light dark:text-text-secondary-dark hover:border-accent-primary/30 hover:text-accent-primary'
                        }`}
                      >
                        {pageNum}
                      </motion.button>
                    ))}
                  </div>

                  <motion.button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    whileHover={{ scale: currentPage === totalPages ? 1 : 1.05 }}
                    whileTap={{ scale: currentPage === totalPages ? 1 : 0.95 }}
                    className="px-5 py-2.5 rounded-xl font-bold text-sm transition-all disabled:opacity-40 disabled:cursor-not-allowed bg-gradient-to-r from-accent-primary/10 to-accent-secondary/10 border border-accent-primary/20 text-accent-primary hover:border-accent-primary/40 hover:shadow-lg"
                  >
                    Next →
                  </motion.button>
                </motion.div>
              )}

              {/* Results Info */}
              <div className="text-center mt-6">
                <p className="text-xs text-text-muted-light dark:text-text-muted-dark font-medium">
                  Showing <span className="text-accent-primary font-bold">{indexOfFirstArticle + 1}-{Math.min(indexOfLastArticle, articles.length)}</span> of <span className="text-accent-primary font-bold">{articles.length}</span> articles
                </p>
              </div>
            </>
          )}

          {/* Empty State */}
          {!loading && articles.length === 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center py-20"
            >
              <div className="relative inline-block mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full blur-2xl opacity-20"></div>
                <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 flex items-center justify-center border-2 border-accent-primary/20">
                  <svg className="w-12 h-12 text-accent-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3">No Articles Yet</h3>
              <p className="text-text-secondary-light dark:text-text-secondary-dark mb-6 max-w-md mx-auto">
                Check back soon for technical insights, tutorials, and deep dives into DevOps and infrastructure topics
              </p>
              <motion.a
                href={personalInfo.medium}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary inline-flex items-center gap-2"
              >
                Visit Medium Profile
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </motion.a>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};
