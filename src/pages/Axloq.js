import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import PageWrapper from '../components/PageWrapper';

const Axloq = () => {
  const navigate = useNavigate();

  const questions = [
    "Agar siz muammoni yaratmagan bo'lsangiz, nega uni hal qilish uchun pul to'laysiz?",
    "Boy davlatlar 200 yil davomida CO₂ chiqarib kelmoqdalar. Adolatli emasmi?",
    "Kambag'al davlatlar rivojlanish huquqiga ega emasmi?",
    "Okean ostida qolayotgan orol davlati qanday his qiladi?"
  ];

  return (
    <PageWrapper>
      <div className="min-h-screen relative pb-20 md:pb-8 flex items-center">
        <div className="max-w-5xl mx-auto px-4 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="font-heading text-5xl md:text-7xl font-bold uppercase tracking-tight mb-4" data-testid="page-title">
              <span className="text-gradient-red">AXLOQIY SAVOL</span>
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto">
              Nega bu adolatsiz?
            </p>
          </motion.div>

          {/* Questions */}
          <motion.div
            className="space-y-8 mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, staggerChildren: 0.15 }}
          >
            {questions.map((question, index) => (
              <motion.div
                key={index}
                className="glass-card p-8 border-l-4 border-primary-accent hover:bg-white/10 transition-all"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.15, duration: 0.6 }}
                whileHover={{ scale: 1.02, x: 10 }}
                data-testid={`question-${index}`}
              >
                <p className="text-2xl md:text-3xl font-heading font-semibold text-text-primary leading-relaxed">
                  {question}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Core Message */}
          <motion.div
            className="glass-card p-10 md:p-12 text-center border-2 border-primary-accent/50 mb-12"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            data-testid="core-message"
          >
            <p className="text-3xl md:text-5xl font-heading font-bold text-text-primary mb-6 leading-tight">
              Bu <span className="text-primary-accent">GLOBAL</span>
              <br />
              <span className="text-secondary-accent">ADOLATSIZLIK</span>
            </p>
            <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Muammoni yaratganlar to'lamaydi.
              <br />
              Muammoni ko'rganlar <span className="text-primary-accent font-bold">azoblanmoqda</span>.
            </p>
          </motion.div>

          {/* Quote */}
          <motion.div
            className="glass-card p-8 mb-12 bg-white/5"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            data-testid="quote"
          >
            <blockquote className="text-xl md:text-2xl italic text-text-secondary text-center">
              "Biz iqlim inqirozini yaratmadik, lekin uning eng og'ir oqibatlarini boshdan kechiryapmiz."
            </blockquote>
            <p className="text-center mt-4 text-sm text-text-secondary uppercase tracking-wider">
              — Maldiv Respublikasi Prezidenti
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
          >
            <button
              className="button-primary"
              onClick={() => navigate('/masuliyat')}
              data-testid="next-button"
            >
              Mas'uliyatni aniqlang →
            </button>
          </motion.div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Axloq;