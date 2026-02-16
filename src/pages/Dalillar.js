import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import PageWrapper from '../components/PageWrapper';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';
import { Bar, Line, Doughnut } from 'react-chartjs-2';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const Dalillar = () => {
  const navigate = useNavigate();

  // CO2 Emissions Per Capita Data (tons per person, 2023 data)
  const emissionsData = {
    labels: ['AQSh', 'Xitoy', 'Yevropa', 'Pokiston', 'Bangladesh', 'Efiopiya'],
    datasets: [
      {
        label: 'CO₂ emissiyasi (t/kishi)',
        data: [15.0, 8.0, 6.7, 1.0, 0.7, 0.1],
        backgroundColor: [
          'rgba(239, 68, 68, 0.8)',   // Red
          'rgba(249, 115, 22, 0.8)',  // Orange
          'rgba(245, 158, 11, 0.8)',  // Amber
          'rgba(6, 182, 212, 0.8)',   // Cyan
          'rgba(34, 197, 94, 0.8)',   // Green
          'rgba(59, 130, 246, 0.8)'   // Blue
        ],
        borderColor: [
          'rgba(239, 68, 68, 1)',
          'rgba(249, 115, 22, 1)',
          'rgba(245, 158, 11, 1)',
          'rgba(6, 182, 212, 1)',
          'rgba(34, 197, 94, 1)',
          'rgba(59, 130, 246, 1)'
        ],
        borderWidth: 2
      }
    ]
  };

  // Climate Vulnerability Index (Higher = More Vulnerable)
  const vulnerabilityData = {
    labels: ['Bangladesh', 'Pokiston', 'Maldiv', 'Efiopiya', 'AQSh', 'Xitoy'],
    datasets: [
      {
        label: 'Zaiflik indeksi',
        data: [9.2, 8.8, 9.5, 8.5, 3.2, 5.1],
        fill: true,
        backgroundColor: 'rgba(239, 68, 68, 0.2)',
        borderColor: 'rgba(239, 68, 68, 1)',
        tension: 0.4,
        pointRadius: 6,
        pointHoverRadius: 8,
        pointBackgroundColor: 'rgba(239, 68, 68, 1)',
        pointBorderColor: '#fff',
        pointBorderWidth: 2
      }
    ]
  };

  // Economic Loss Due to Climate Change (% of GDP)
  const economicLossData = {
    labels: ['Bangladesh', 'Pokiston', 'Maldiv', 'Afrika', 'Global o\'rtacha'],
    datasets: [
      {
        label: 'YaIMning %',
        data: [2.0, 1.8, 3.5, 1.5, 0.5],
        backgroundColor: [
          'rgba(239, 68, 68, 0.8)',
          'rgba(245, 158, 11, 0.8)',
          'rgba(249, 115, 22, 0.8)',
          'rgba(234, 88, 12, 0.8)',
          'rgba(6, 182, 212, 0.8)'
        ],
        borderColor: '#fff',
        borderWidth: 2
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          color: '#ededed',
          font: {
            size: 12,
            family: 'Manrope, sans-serif'
          }
        }
      },
      tooltip: {
        backgroundColor: 'rgba(23, 23, 23, 0.95)',
        titleColor: '#ededed',
        bodyColor: '#a3a3a3',
        borderColor: 'rgba(255, 255, 255, 0.1)',
        borderWidth: 1,
        padding: 12,
        displayColors: true
      }
    },
    scales: {
      y: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
          drawBorder: false
        },
        ticks: {
          color: '#a3a3a3',
          font: {
            size: 11
          }
        }
      },
      x: {
        grid: {
          color: 'rgba(255, 255, 255, 0.05)',
          drawBorder: false
        },
        ticks: {
          color: '#a3a3a3',
          font: {
            size: 11
          }
        }
      }
    }
  };

  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: '#ededed',
          padding: 15,
          font: {
            size: 12
          }
        }
      },
      tooltip: {
        backgroundColor: 'rgba(23, 23, 23, 0.95)',
        titleColor: '#ededed',
        bodyColor: '#a3a3a3',
        borderColor: 'rgba(255, 255, 255, 0.1)',
        borderWidth: 1,
        padding: 12
      }
    }
  };

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
              <span className="text-gradient-red">DALILLAR</span>
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto">
              Statistika va grafiklar
            </p>
          </motion.div>

          {/* Chart 1: CO2 Emissions */}
          <motion.div
            className="glass-card p-6 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            data-testid="chart-emissions"
          >
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-text-primary mb-4 uppercase">
              CO₂ emissiyasi (Kishi boshiga)
            </h3>
            <p className="text-sm text-text-secondary mb-6 uppercase tracking-wider">
              Manba: World Bank, 2023
            </p>
            <div className="h-80">
              <Bar data={emissionsData} options={chartOptions} />
            </div>
            <p className="text-text-secondary mt-4 text-center">
              <span className="text-primary-accent font-bold">21 marta farq</span> AQSh va Bangladesh o'rtasida
            </p>
          </motion.div>

          {/* Chart 2 & 3: Grid Layout */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Vulnerability Index */}
            <motion.div
              className="glass-card p-6"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              data-testid="chart-vulnerability"
            >
              <h3 className="font-heading text-xl md:text-2xl font-bold text-text-primary mb-4 uppercase">
                Zaiflik indeksi
              </h3>
              <p className="text-xs text-text-secondary mb-4 uppercase tracking-wider">
                Manba: ND-GAIN Index, 2023
              </p>
              <div className="h-64">
                <Line data={vulnerabilityData} options={chartOptions} />
              </div>
              <p className="text-text-secondary mt-4 text-sm text-center">
                Yuqori qiymat = Yuqori zaiflik
              </p>
            </motion.div>

            {/* Economic Loss */}
            <motion.div
              className="glass-card p-6"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              data-testid="chart-economic-loss"
            >
              <h3 className="font-heading text-xl md:text-2xl font-bold text-text-primary mb-4 uppercase">
                Iqtisodiy zarar (YaIMning %)
              </h3>
              <p className="text-xs text-text-secondary mb-4 uppercase tracking-wider">
                Manba: IPCC, World Bank
              </p>
              <div className="h-64 flex items-center justify-center">
                <Doughnut data={economicLossData} options={doughnutOptions} />
              </div>
              <p className="text-text-secondary mt-4 text-sm text-center">
                Kambag'al davlatlar nisbatan ko'proq yo'qotadi
              </p>
            </motion.div>
          </div>

          {/* Key Statistics */}
          <motion.div
            className="glass-card p-8 mb-8 border-2 border-primary-accent/30"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            data-testid="key-statistics"
          >
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-center mb-8 text-text-primary uppercase">
              Asosiy faktlar
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-accent mb-2">10%</div>
                <div className="text-sm text-text-secondary uppercase tracking-wider">Eng boy davlatlar</div>
                <div className="text-xs text-text-secondary mt-2">Global emissiyaning 50% dan mas'ul</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-tertiary-accent mb-2">$100 mlrd</div>
                <div className="text-sm text-text-secondary uppercase tracking-wider">Yillik iqlim moliyasi</div>
                <div className="text-xs text-text-secondary mt-2">Boy davlatlarning va'dasi (2020)</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary-accent mb-2">2050</div>
                <div className="text-sm text-text-secondary uppercase tracking-wider">Maqsad yili</div>
                <div className="text-xs text-text-secondary mt-2">Net-zero emissiyalar</div>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <button
              className="button-primary"
              onClick={() => navigate('/axloq')}
              data-testid="next-button"
            >
              Davom ettirish →
            </button>
          </motion.div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Dalillar;