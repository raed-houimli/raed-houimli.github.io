import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const quotes = [
  { text: "Infrastructure is not just about servers—it's about enabling dreams at scale.", author: "DevOps Philosophy" },
  { text: "Automate everything you can, so you can focus on what truly matters.", author: "Efficiency Mindset" },
  { text: "The best code is the code that solves real problems for real people.", author: "Purpose-Driven Engineering" },
  { text: "Security is not a feature—it's a foundation.", author: "DevSecOps Principle" },
  { text: "Every deployment should be boring. Excitement belongs in innovation, not production.", author: "Reliability First" },
  { text: "Measure twice, deploy once, monitor forever.", author: "SRE Wisdom" },
  { text: "The cloud is not a destination—it's a journey of continuous improvement.", author: "Cloud Native Thinking" },
  { text: "Great infrastructure is invisible until it's needed.", author: "Silent Excellence" },
  { text: "Documentation is love letters to your future self.", author: "Engineering Empathy" },
  { text: "Scale is not just about handling more—it's about handling better.", author: "Scalability Mindset" },
];

export const QuoteBanner = () => {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <motion.div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="bg-gradient-to-r from-accent-primary/10 via-accent-secondary/10 to-accent-primary/10 border-b border-accent-primary/20 dark:border-accent-primary/10 overflow-hidden relative cursor-pointer"
    >
      {/* Animated background shimmer */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
        animate={{ x: ['-100%', '100%'] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
      />
      
      <div className="container-custom py-1 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuote}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="text-center"
          >
            <p className="text-xs font-medium text-text-primary-light dark:text-text-primary-dark">
              <span className="text-accent-primary mr-1">"</span>
              {quotes[currentQuote].text}
              <span className="text-accent-primary ml-1">"</span>
            </p>
            <p className="text-xs text-text-muted-light dark:text-text-muted-dark mt-0.5 italic">
              — {quotes[currentQuote].author}
            </p>
          </motion.div>
        </AnimatePresence>
        
        {/* Progress indicator dots */}
        <div className="flex justify-center gap-0.5 mt-0.5">
          {quotes.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentQuote(index)}
              whileHover={{ scale: 1.2 }}
              className={`h-0.5 rounded-full transition-all duration-300 ${
                index === currentQuote 
                  ? 'w-6 bg-accent-primary' 
                  : 'w-0.5 bg-accent-primary/30 hover:bg-accent-primary/50'
              }`}
              aria-label={`Go to quote ${index + 1}`}
            />
          ))}
        </div>
        
        {/* Pause indicator */}
        {isPaused && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute top-1 right-4 text-xs text-accent-primary flex items-center gap-1"
          >
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" />
            </svg>
            Paused
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};
