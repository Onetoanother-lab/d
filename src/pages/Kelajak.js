import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import PageWrapper from '../components/PageWrapper';

const Kelajak = () => {
  const navigate = useNavigate();

  const solutions = [
    {
      title: "Qayta tiklanadigan energiya",
      description: "Quyosh, shamol, gidroenergetika - toza kelajak",
      progress: 85,
      color: "bg-success"
    },
    {
      title: "O'rmon ekish",
      description: "Har yili millionlab daraxt - CO₂ ni yutadi",
      progress: 60,
      color: "bg-success"
    },
    {
      title: "Iqlim moliyasi",
      description: "Boy davlatlardan kambag'al davlatlarga yordam",
      progress: 40,
      color: "bg-tertiary-accent"
    },
    {
      title: "Emissiyalarni kamaytirish",
      description: "Sanoat va transportni yangilash",
      progress: 55,
      color: "bg-secondary-accent"
    }
  ];

  const sdgPoints = [
    "Iqlim harakatlarini kuchaytirish",
    "Iqlim o'zgarishiga moslashish qobiliyatini oshirish",
    "Iqlim moliyasini mobilizatsiya qilish",
    "Ta'lim va xabardorlikni oshirish"
  ];

  return (
    <PageWrapper>
      <div className="min-h-screen relative pb-20 md:pb-8">
        {/* Background */}
        <div 
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1698752822107-69f8973936e4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2ODl8MHwxfHNlYXJjaHw0fHxyZW5ld2FibGUlMjBlbmVyZ3klMjB3aW5kJTIwdHVyYmluZXMlMjBzb2xhciUyMHBhbmVscyUyMHN1bnNldHxlbnwwfHx8fDE3NzEyNTYyMDJ8MA&ixlib=rb-4.1.0&q=85)',
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
              <span className="text-gradient-cyan">KELAJAK</span>
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto">
              Yechimlar va umid
            </p>
          </motion.div>

          {/* Hope Message */}
          <motion.div
            className="glass-card p-10 md:p-12 mb-12 text-center border-2 border-success/50"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            data-testid="hope-message"
          >
            <p className="text-3xl md:text-5xl font-heading font-bold text-text-primary mb-6 leading-tight">
              Kech emas!
            </p>
            <p className="text-xl md:text-2xl text-text-secondary max-w-2xl mx-auto">
              Biz <span className="text-success font-bold">o'zgartira olamiz</span>. Lekin harakatga o'tishimiz kerak.
            </p>
          </motion.div>

          {/* Solutions with Progress */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-center text-text-primary mb-8 uppercase">
              Yechimlar va taraqqiyot
            </h3>
            <div className="space-y-6">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  className="glass-card p-6"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                  data-testid={`solution-${index}`}
                >
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-heading text-xl font-bold text-text-primary">
                      {solution.title}
                    </h4>
                    <span className="text-text-secondary font-semibold">{solution.progress}%</span>
                  </div>
                  <p className="text-text-secondary mb-4">{solution.description}</p>
                  <div className="w-full h-3 bg-surface-highlight rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full ${solution.color} rounded-full`}
                      initial={{ width: 0 }}
                      animate={{ width: `${solution.progress}%` }}
                      transition={{ delay: 0.7 + index * 0.1, duration: 1, ease: 'easeOut' }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* SDG 13 Section */}
          <motion.div
            className="glass-card p-8 mb-12 border-2 border-secondary-accent/30"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            data-testid="sdg-section"
          >
            <div className="text-center mb-8">
              <div className="inline-block text-6xl mb-4">🌍</div>
              <h3 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-4 uppercase">
                BMT SDG 13
              </h3>
              <p className="text-xl text-secondary-accent font-semibold mb-2">
                Iqlim harakati
              </p>
              <p className="text-text-secondary max-w-2xl mx-auto">
                Birlashgan Millatlar Tashkilotining Barqaror Rivojlanish Maqsadi #13:
                Iqlim o'zgarishi va uning ta'siriga qarshi kurashish
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {sdgPoints.map((point, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 p-4 glass-card"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + index * 0.1, duration: 0.4 }}
                  data-testid={`sdg-point-${index}`}
                >
                  <div className="w-6 h-6 rounded-full bg-secondary-accent flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <p className="text-text-primary">{point}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Final Message */}
          <motion.div
            className="glass-card p-10 md:p-12 text-center border-2 border-primary-accent/30 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.6 }}
            data-testid="final-message"
          >
            <p className="text-3xl md:text-4xl font-heading font-bold text-text-primary mb-6 leading-tight">
              Bizning <span className="text-primary-accent">sayyoramiz</span>,
              <br />
              bizning <span className="text-secondary-accent">mas'uliyatimiz</span>,
              <br />
              bizning <span className="text-success">kelajagimiz</span>
            </p>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto mb-8">
              Iqlim adolati - bu insoniy huquq. Hamma uchun adolatli kelajak yaratish vaqti keldi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                className="button-primary"
                onClick={() => navigate('/references')}
                data-testid="references-button"
              >
                Manbalarni ko'rish
              </button>
              <button
                className="button-secondary"
                onClick={() => navigate('/')}
                data-testid="restart-button"
              >
                Boshidan boshlash
              </button>
            </div>
          </motion.div>

          {/* Thank You */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            <p className="text-text-secondary uppercase tracking-widest text-sm">
              Taqdimotni tomosha qilganingiz uchun rahmat
            </p>
          </motion.div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Kelajak;