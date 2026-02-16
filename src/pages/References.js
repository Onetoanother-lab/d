import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import PageWrapper from '../components/PageWrapper';

const References = () => {
  const navigate = useNavigate();

  const references = [
    {
      category: "Iqlim ma'lumotlari",
      sources: [
        {
          title: "IPCC (Intergovernmental Panel on Climate Change)",
          url: "https://www.ipcc.ch",
          description: "Iqlim o'zgarishi bo'yicha ilmiy hisobotlar"
        },
        {
          title: "NASA Climate",
          url: "https://climate.nasa.gov",
          description: "Global harorat va CO₂ darajasi ma'lumotlari"
        },
        {
          title: "World Bank Climate Data",
          url: "https://data.worldbank.org/topic/climate-change",
          description: "CO₂ emissiyalari va iqtisodiy ta'sir ma'lumotlari"
        }
      ]
    },
    {
      category: "Zaiflik indekslari",
      sources: [
        {
          title: "ND-GAIN Index",
          url: "https://gain.nd.edu",
          description: "Global moslashuv indeksi"
        },
        {
          title: "Climate Risk Index (Germanwatch)",
          url: "https://www.germanwatch.org/en/cri",
          description: "Iqlim xavfi reytingi"
        }
      ]
    },
    {
      category: "Iqlim moliyasi",
      sources: [
        {
          title: "UNFCCC (UN Climate Change)",
          url: "https://unfccc.int",
          description: "COP sammitlari va iqlim shartnomasi"
        },
        {
          title: "Green Climate Fund",
          url: "https://www.greenclimate.fund",
          description: "Iqlim moliyasi mexanizmlari"
        }
      ]
    },
    {
      category: "SDG va BMT",
      sources: [
        {
          title: "UN SDG 13: Climate Action",
          url: "https://sdgs.un.org/goals/goal13",
          description: "Barqaror rivojlanish maqsadi #13"
        },
        {
          title: "UN Environment Programme",
          url: "https://www.unep.org",
          description: "Atrof-muhit va iqlim dasturlari"
        }
      ]
    },
    {
      category: "Mamlakat ma'lumotlari",
      sources: [
        {
          title: "Climate Watch",
          url: "https://www.climatewatchdata.org",
          description: "Mamlakatlar bo'yicha taqqoslash"
        },
        {
          title: "World Resources Institute",
          url: "https://www.wri.org",
          description: "Iqlim va resurslar tahlili"
        }
      ]
    }
  ];

  return (
    <PageWrapper>
      <div className="min-h-screen relative pb-20 md:pb-8">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="font-heading text-5xl md:text-7xl font-bold uppercase tracking-tight mb-4" data-testid="page-title">
              <span className="text-gradient-cyan">MANBALAR</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Barcha ma'lumotlar ishonchli manbalarga asoslangan
            </p>
          </motion.div>

          {/* References by Category */}
          <div className="space-y-8 mb-12">
            {references.map((section, sectionIndex) => (
              <motion.div
                key={sectionIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + sectionIndex * 0.1, duration: 0.6 }}
                data-testid={`reference-section-${sectionIndex}`}
              >
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-primary-accent mb-4 uppercase">
                  {section.category}
                </h3>
                <div className="space-y-3">
                  {section.sources.map((source, sourceIndex) => (
                    <motion.div
                      key={sourceIndex}
                      className="glass-card p-5 hover:bg-white/10 transition-all"
                      whileHover={{ scale: 1.01, x: 5 }}
                      data-testid={`reference-${sectionIndex}-${sourceIndex}`}
                    >
                      <h4 className="font-bold text-lg text-text-primary mb-2">
                        {source.title}
                      </h4>
                      <p className="text-sm text-text-secondary mb-2">
                        {source.description}
                      </p>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-secondary-accent hover:text-tertiary-accent transition-colors text-sm break-all"
                      >
                        {source.url} ↗
                      </a>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            className="glass-card p-8 mb-8 border-2 border-white/10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            data-testid="additional-info"
          >
            <h3 className="font-heading text-xl md:text-2xl font-bold text-text-primary mb-4 text-center uppercase">
              E'tibor bering
            </h3>
            <p className="text-text-secondary text-center max-w-3xl mx-auto leading-relaxed">
              Ushbu taqdimotdagi barcha statistik ma'lumotlar rasmiy xalqaro tashkilotlar (IPCC, BMT, Jahon Banki, NASA) tomonidan e'lon qilingan hisobotlarga asoslangan. Ma'lumotlar 2023-2024 yillar holatiga mos keladi.
            </p>
          </motion.div>

          {/* Credits */}
          <motion.div
            className="glass-card p-6 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            data-testid="credits"
          >
            <h3 className="font-heading text-xl font-bold text-text-primary mb-3 text-center uppercase">
              Taqdimot haqida
            </h3>
            <div className="text-center text-text-secondary text-sm space-y-2">
              <p>
                <span className="font-semibold text-text-primary">Mavzu:</span> Iqlim o'zgarishi uchun kim to'laydi?
              </p>
              <p>
                <span className="font-semibold text-text-primary">Maqsad:</span> 9-sinf o'quvchilari uchun iqlim adolati mavzusini tushuntirish
              </p>
              <p>
                <span className="font-semibold text-text-primary">Texnologiya:</span> React + Tailwind CSS + Chart.js + Framer Motion
              </p>
              <p className="pt-4 border-t border-white/10 mt-4">
                <span className="font-semibold text-text-primary">Rasmlar:</span> Unsplash (Erik Mclean, NOAA, Akil Mazumder, va boshqalar)
              </p>
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <button
              className="button-primary"
              onClick={() => navigate('/')}
              data-testid="home-button"
            >
              Boshiga qaytish
            </button>
            <button
              className="button-secondary"
              onClick={() => navigate('/kelajak')}
              data-testid="back-button"
            >
              ← Kelajak sahifasiga
            </button>
          </motion.div>

          {/* Footer */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
          >
            <p className="text-text-secondary text-xs uppercase tracking-widest">
              © 2024 | Iqlim Adolati Taqdimoti | BMT SDG 13
            </p>
          </motion.div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default References;