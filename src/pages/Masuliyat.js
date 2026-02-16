import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import PageWrapper from '../components/PageWrapper';

const Masuliyat = () => {
  const navigate = useNavigate();

  const principles = [
    {
      title: "Ifloslantiradigan to'laydi",
      description: "Kim ko'proq CO₂ chiqarsa, o'sha ko'proq to'lashi kerak",
      icon: "🏭"
    },
    {
      title: "Tarixiy mas'uliyat",
      description: "Boy davlatlar 200 yil davomida ifloslantirib kelmoqdalar",
      icon: "📜"
    },
    {
      title: "Imkoniyatlar prinsipi",
      description: "Boy davlatlar yordam ko'rsatish imkoniyatiga ega",
      icon: "💰"
    },
    {
      title: "Umumiy, lekin farqlangan mas'uliyat",
      description: "Hammamiz javobgarmiz, lekin boy davlatlar ko'proq",
      icon: "🌍"
    }
  ];

  const actions = [
    "Iqlim moliyasini ko'paytirish ($100 mlrd/yil va undan ko'proq)",
    "Texnologiya transferi (qayta tiklanadigan energiya)",
    "Zarar va yo'qotishlar uchun kompensatsiya",
    "Emissiyalarni keskin kamaytirish (Net Zero 2050)"
  ];

  return (
    <PageWrapper>
      <div className="min-h-screen relative pb-20 md:pb-8">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="font-heading text-5xl md:text-7xl font-bold uppercase tracking-tight mb-4" data-testid="page-title">
              <span className="text-gradient-red">MAS'ULIYAT</span>
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto">
              Kim to'lashi kerak?
            </p>
          </motion.div>

          {/* Main Statement */}
          <motion.div
            className="glass-card p-10 md:p-12 mb-12 text-center border-2 border-primary-accent/50"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            data-testid="main-statement"
          >
            <p className="text-3xl md:text-5xl font-heading font-bold text-text-primary mb-6 leading-tight">
              <span className="text-primary-accent">BOY DAVLATLAR</span>
              <br />
              to'lashi kerak
            </p>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Chunki ular muammoni yaratgan va uni hal qilish imkoniyatiga ega
            </p>
          </motion.div>

          {/* Principles Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, staggerChildren: 0.1 }}
          >
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                className="glass-card p-6 hover:bg-white/10 transition-all"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.02, y: -5 }}
                data-testid={`principle-${index}`}
              >
                <div className="text-4xl mb-4">{principle.icon}</div>
                <h3 className="font-heading text-xl md:text-2xl font-bold text-text-primary mb-3">
                  {principle.title}
                </h3>
                <p className="text-text-secondary">{principle.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Actions Needed */}
          <motion.div
            className="glass-card p-8 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            data-testid="actions-needed"
          >
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-center text-text-primary mb-8 uppercase">
              Nima qilish kerak?
            </h3>
            <div className="space-y-4">
              {actions.map((action, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4 p-4 glass-card hover:bg-white/10 transition-all"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
                  whileHover={{ x: 10 }}
                  data-testid={`action-${index}`}
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-accent flex items-center justify-center font-bold text-white">
                    {index + 1}
                  </div>
                  <p className="text-lg text-text-primary flex-1">{action}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="glass-card p-8 text-center border-2 border-secondary-accent/30 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            data-testid="call-to-action"
          >
            <p className="text-2xl md:text-3xl font-heading font-bold text-text-primary mb-4">
              2024 COP29 sammitida
            </p>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Zaif davlatlar <span className="text-secondary-accent font-bold">$1.3 trillion/yil</span> iqlim moliyasini talab qilishdi.
              Boy davlatlar qanday javob berishdi?
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
          >
            <button
              className="button-primary"
              onClick={() => navigate('/kelajak')}
              data-testid="next-button"
            >
              Kelajakka qarash →
            </button>
          </motion.div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Masuliyat;