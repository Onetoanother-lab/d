import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import PageWrapper from '../components/PageWrapper';

const Muammo = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <PageWrapper>
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden pb-20 md:pb-8">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1761058841503-f938bc017299?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzR8MHwxfHNlYXJjaHwzfHxpbmR1c3RyaWFsJTIwc21va2UlMjBmYWN0b3J5JTIwcG9sbHV0aW9uJTIwZGFya3xlbnwwfHx8fDE3NzEyNTYyMDF8MA&ixlib=rb-4.1.0&q=85)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.4)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background z-0" />

        {/* Content */}
        <motion.div
          className="relative z-10 max-w-6xl mx-auto text-center px-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="font-heading text-6xl md:text-8xl lg:text-9xl font-bold uppercase tracking-tighter leading-none mb-6"
            variants={itemVariants}
            data-testid="main-heading"
          >
            <span className="text-gradient-red">IQLIM</span>
            <br />
            <span className="text-text-primary">O'ZGARISHI</span>
          </motion.h1>

          <motion.div
            className="h-1 w-32 bg-gradient-to-r from-primary-accent to-tertiary-accent mx-auto mb-8"
            variants={itemVariants}
          />

          <motion.p 
            className="font-body text-xl md:text-2xl text-text-secondary mb-6 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Bizning sayyoramiz <span className="text-primary-accent font-semibold">xavf ostida</span>.
            Har yili harorat ko'tariladi, muzliklar eriydi, okeanlar ko'tariladi.
          </motion.p>

          <motion.p 
            className="font-body text-lg md:text-xl text-text-secondary mb-12 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Lekin eng katta savol: <span className="text-secondary-accent font-semibold">Kim javobgar?</span> Va
            <span className="text-tertiary-accent font-semibold"> kim eng ko'p zarar ko'radi?</span>
          </motion.p>

          {/* Statistics Cards */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 max-w-4xl mx-auto"
            variants={containerVariants}
          >
            <motion.div 
              className="glass-card p-6 hover:bg-white/10 transition-all"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              data-testid="stat-temperature"
            >
              <div className="text-4xl font-bold text-primary-accent mb-2">+1.1°C</div>
              <div className="text-sm uppercase tracking-wider text-text-secondary">Global harorat o'sishi</div>
              <div className="text-xs text-text-secondary mt-2">(1880-2024)</div>
            </motion.div>

            <motion.div 
              className="glass-card p-6 hover:bg-white/10 transition-all"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              data-testid="stat-sea-level"
            >
              <div className="text-4xl font-bold text-secondary-accent mb-2">21 sm</div>
              <div className="text-sm uppercase tracking-wider text-text-secondary">Okean sathi ko'tarilishi</div>
              <div className="text-xs text-text-secondary mt-2">(1880-2024)</div>
            </motion.div>

            <motion.div 
              className="glass-card p-6 hover:bg-white/10 transition-all"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              data-testid="stat-co2"
            >
              <div className="text-4xl font-bold text-tertiary-accent mb-2">421 ppm</div>
              <div className="text-sm uppercase tracking-wider text-text-secondary">CO₂ darajasi (2024)</div>
              <div className="text-xs text-text-secondary mt-2">Tarixiy rekord</div>
            </motion.div>
          </motion.div>

          {/* CTA Button */}
          <motion.button
            className="button-primary text-lg"
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/tasir')}
            data-testid="next-button"
          >
            Davom ettirish →
          </motion.button>
        </motion.div>
      </div>
    </PageWrapper>
  );
};

export default Muammo;