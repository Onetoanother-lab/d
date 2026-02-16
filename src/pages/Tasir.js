import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import PageWrapper from '../components/PageWrapper';

const Tasir = () => {
  const navigate = useNavigate();

  const countries = [
    {
      name: 'Bangladesh',
      impact: 'Tez-tez suv toshqinlari',
      risk: 'Yuqori',
      stats: '30 million kishi xavf ostida',
      color: 'from-red-600 to-orange-600'
    },
    {
      name: 'Maldiv orollari',
      impact: 'Okean suvi ko\'tarilishi',
      risk: 'Ekzistensial xavf',
      stats: 'Orollar 2100-yilda suv ostida qolishi mumkin',
      color: 'from-red-500 to-red-700'
    },
    {
      name: 'Pokiston',
      impact: '2022-yilda katta toshqin',
      risk: 'O\'ta yuqori',
      stats: '33 million zarar ko\'rdi, $30 mlrd zarar',
      color: 'from-orange-600 to-red-600'
    },
    {
      name: 'Sahroi Kabroi Afrika',
      impact: 'Qurg\'oqchilik va ochlik',
      risk: 'Yuqori',
      stats: '250 million kishi 2030-yilda suv tanqisligiga duch keladi',
      color: 'from-yellow-600 to-orange-600'
    }
  ];

  return (
    <PageWrapper>
      <div className="min-h-screen relative pb-20 md:pb-8">
        {/* Background */}
        <div 
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1701925761041-66456b26350d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTJ8MHwxfHNlYXJjaHwyfHxmbG9vZCUyMHZpY3RpbXMlMjByZXNjdWUlMjBjbGltYXRlJTIwY2hhbmdlfGVufDB8fHx8MTc3MTI1NjIwMXww&ixlib=rb-4.1.0&q=85)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(2px)'
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-heading text-5xl md:text-7xl font-bold uppercase tracking-tight mb-4 text-center" data-testid="page-title">
              <span className="text-gradient-red">TA'SIR</span>
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary text-center mb-12 max-w-3xl mx-auto">
              Kim eng ko'p zarar ko'rmoqda?
            </p>
          </motion.div>

          {/* Countries Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, staggerChildren: 0.1 }}
          >
            {countries.map((country, index) => (
              <motion.div
                key={country.name}
                className="glass-card p-6 hover:bg-white/10 transition-all relative overflow-hidden"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.02, y: -5 }}
                data-testid={`country-card-${index}`}
              >
                <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${country.color}`} />
                
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-text-primary mb-3 ml-4">
                  {country.name}
                </h3>
                
                <div className="ml-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm uppercase tracking-wider text-text-secondary">Ta'sir:</span>
                    <span className="text-secondary-accent font-semibold">{country.impact}</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-sm uppercase tracking-wider text-text-secondary">Xavf darajasi:</span>
                    <span className="text-primary-accent font-bold">{country.risk}</span>
                  </div>
                  
                  <p className="text-text-secondary text-sm mt-4 pt-4 border-t border-white/10">
                    {country.stats}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Key Insight */}
          <motion.div
            className="glass-card p-8 mb-8 text-center border-2 border-primary-accent/30"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            data-testid="key-insight"
          >
            <p className="text-2xl md:text-3xl font-heading font-bold text-text-primary mb-4">
              Bu davlatlar iqlim inqirozining <span className="text-primary-accent">birinchi qurbonlari</span>
            </p>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Lekin ular iqlim o'zgarishiga qancha hissa qo'shgan? Javob sizni hayratga solishi mumkin.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <button
              className="button-primary"
              onClick={() => navigate('/adolatsizlik')}
              data-testid="next-button"
            >
              Adolatsizlikni ko'ring →
            </button>
          </motion.div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Tasir;