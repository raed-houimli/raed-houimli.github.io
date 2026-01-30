import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { QuoteBanner } from './QuoteBanner';
import { ScrollProgress } from './ScrollProgress';
import { BackToTop } from './BackToTop';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark text-text-primary-light dark:text-text-primary-dark">
      <ScrollProgress />
      <Header />
      <QuoteBanner />
      <main className="flex-grow w-full">
        {children}
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};
