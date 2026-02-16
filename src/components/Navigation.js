import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const pages = [
    { path: '/', label: '1', title: 'Muammo' },
    { path: '/tasir', label: '2', title: "Ta'sir" },
    { path: '/adolatsizlik', label: '3', title: 'Adolatsizlik' },
    { path: '/dalillar', label: '4', title: 'Dalillar' },
    { path: '/axloq', label: '5', title: 'Axloqiy savol' },
    { path: '/masuliyat', label: '6', title: "Mas'uliyat" },
    { path: '/kelajak', label: '7', title: 'Kelajak' },
    { path: '/references', label: 'R', title: 'Manbalar' },
  ];

  const currentIndex = pages.findIndex(page => page.path === location.pathname);
  const progress = ((currentIndex + 1) / pages.length) * 100;

  return (
    <>
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-white/10 z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-primary-accent to-tertiary-accent"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>

      {/* Navigation Dots */}
      <nav className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 hidden md:flex flex-col gap-3" data-testid="navigation-menu">
        {pages.map((page, index) => (
          <button
            key={page.path}
            onClick={() => navigate(page.path)}
            className="group relative"
            data-testid={`nav-button-${page.label}`}
            aria-label={page.title}
          >
            <motion.div
              className={`w-3 h-3 rounded-full border-2 transition-all ${
                location.pathname === page.path
                  ? 'bg-primary-accent border-primary-accent scale-125'
                  : 'bg-transparent border-white/30 hover:border-white/60'
              }`}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
            />
            {/* Tooltip */}
            <div className="absolute right-6 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              <div className="bg-surface-highlight text-text-primary px-3 py-1 rounded text-sm whitespace-nowrap border border-white/10">
                {page.label}. {page.title}
              </div>
            </div>
          </button>
        ))}
      </nav>

      {/* Mobile Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-surface/95 backdrop-blur-md border-t border-white/10 p-4 z-50 md:hidden" data-testid="mobile-navigation">
        <div className="flex justify-between items-center max-w-2xl mx-auto">
          {pages.map((page) => (
            <button
              key={page.path}
              onClick={() => navigate(page.path)}
              className={`flex flex-col items-center gap-1 transition-colors ${
                location.pathname === page.path
                  ? 'text-primary-accent'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
              data-testid={`mobile-nav-${page.label}`}
            >
              <div className={`w-2 h-2 rounded-full ${
                location.pathname === page.path ? 'bg-primary-accent' : 'bg-white/30'
              }`} />
              <span className="text-xs font-medium">{page.label}</span>
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navigation;