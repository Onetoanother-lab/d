import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import PageWrapper from '../components/PageWrapper';

const Adolatsizlik = () => {
  const navigate = useNavigate();

  const comparisons = [
    {
      country: 'AQSh',
      emissions: '15.0 t/kishi',
      vulnerability: 'Past',
      type: 'high'
    },
    {
      country: 'Xitoy',
      emissions: '8.0 t/kishi',
      vulnerability: 'O\'rta',
      type: 'high'
    },
    {
      country: 'Yevropa Ittifoqi',
      emissions: '6.7 t/kishi',
      vulnerability: 'Past',
      type: 'high'
    },
    {
      country: 'Bangladesh',
      emissions: '0.7 t/kishi',
      vulnerability: 'O\'ta yuqori',
      type: 'low'
    },
    {
      country: 'Pokiston',
      emissions: '1.0 t/kishi',
      vulnerability: 'O\'ta yuqori',
      type: 'low'
    },
    {
      country: 'Efiopiya',
      emissions: '0.1 t/kishi',
      vulnerability: 'Yuqori',
      type: 'low'
    }
  ];

  return (
    <PageWrapper>
      <div className="min-h-screen relative pb-20 md:pb-8">
        {/* Background */}
        <div 
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1766946636633-8229ef3414e5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNTl8MHwxfHNlYXJjaHw0fHxjbGltYXRlJTIwY2hhbmdlJTIwZHJvdWdodCUyMGNyYWNrZWQlMjBlYXJ0aHxlbnwwfHx8fDE3NzEyNTYyMDB8MA&ixlib=rb-4.1.0&q=85)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="font-heading text-5xl md:text-7xl font-bold uppercase tracking-tight mb-4" data-testid="page-title">
              <span className="text-gradient-red">ADOLATSIZLIK</span>
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto">
              Kam emissiya, katta zarar
            </p>
          </motion.div>

          {/* Main Message */}
          <motion.div
            className="glass-card p-8 md:p-12 mb-12 border-2 border-primary-accent/30"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            data-testid="main-message"
          >
            <p className="text-3xl md:text-4xl font-heading font-bold text-center text-text-primary mb-6 leading-tight">
              Eng ko'p <span className="text-primary-accent">ifloslantiradigan</span> davlatlar
              <br />
              eng kam <span className="text-secondary-accent">zarar ko'rmoqda</span>
            </p>
            <p className="text-xl text-text-secondary text-center max-w-2xl mx-auto">
              Va aksincha: eng kam ifloslantiradigan davlatlar eng ko'p zarar ko'rmoqda.
            </p>
          </motion.div>

          {/* Comparison Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* High Emitters */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-primary-accent mb-6 text-center uppercase">
                Yuqori emissiya
              </h3>
              <div className="space-y-4">
                {comparisons.filter(c => c.type === 'high').map((item, index) => (
                  <motion.div
                    key={item.country}
                    className="glass-card p-4 border-l-4 border-primary-accent hover:bg-white/10 transition-all"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    data-testid={`high-emitter-${index}`}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-bold text-lg text-text-primary">{item.country}</h4>
                        <p className="text-sm text-text-secondary">CO₂: <span className="text-primary-accent font-semibold">{item.emissions}</span></p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs uppercase tracking-wider text-text-secondary mb-1">Zaiflik</p>
                        <p className="text-success font-semibold">{item.vulnerability}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Low Emitters */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-secondary-accent mb-6 text-center uppercase">
                Past emissiya
              </h3>
              <div className="space-y-4">
                {comparisons.filter(c => c.type === 'low').map((item, index) => (
                  <motion.div
                    key={item.country}
                    className="glass-card p-4 border-l-4 border-secondary-accent hover:bg-white/10 transition-all"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    data-testid={`low-emitter-${index}`}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-bold text-lg text-text-primary">{item.country}</h4>
                        <p className="text-sm text-text-secondary">CO₂: <span className="text-secondary-accent font-semibold">{item.emissions}</span></p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs uppercase tracking-wider text-text-secondary mb-1">Zaiflik</p>
                        <p className="text-primary-accent font-semibold">{item.vulnerability}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Key Stat */}
          <motion.div
            className="glass-card p-8 text-center mb-8 border-2 border-tertiary-accent/30"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            data-testid="key-stat"
          >
            <p className="text-5xl md:text-6xl font-heading font-bold text-tertiary-accent mb-4">21x</p>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              AQSh fuqarosi Bangladeshlik fuqaroga qaraganda <span className="text-tertiary-accent font-bold">21 marta ko'proq</span> CO₂ chiqaradi
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
              onClick={() => navigate('/dalillar')}
              data-testid="next-button"
            >
              Dalillarni ko'ring →
            </button>
          </motion.div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Adolatsizlik;