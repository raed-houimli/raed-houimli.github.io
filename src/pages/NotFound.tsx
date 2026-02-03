import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const NotFound: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-surface-light to-background-light dark:from-surface-dark dark:to-background-dark"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center px-4"
      >
        <motion.h1
          className="text-9xl font-black bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent mb-6"
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          404
        </motion.h1>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Page Not Found</h2>
        <p className="text-text-secondary-light dark:text-text-secondary-dark mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist. Let's get you back on track.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.a
            href="/"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary px-8 py-3 inline-flex items-center justify-center"
          >
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0" />
            </svg>
            Go Home
          </motion.a>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary px-8 py-3 inline-flex items-center justify-center border-2 border-accent-primary text-accent-primary"
          >
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Contact Me
          </motion.a>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="mt-12"
        >
          <p className="text-sm text-text-muted-light dark:text-text-muted-dark">
            Helpful navigation
          </p>
          <div className="flex justify-center gap-6 mt-4 flex-wrap">
            {[
              { href: '/', label: 'Home' },
              { href: '/services', label: 'Services' },
              { href: '/projects', label: 'Projects' },
              { href: '/contact', label: 'Contact' },
            ].map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm text-accent-primary hover:underline font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
