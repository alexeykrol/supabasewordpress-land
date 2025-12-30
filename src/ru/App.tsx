import { motion } from 'framer-motion';
import {
  Database,
  Zap,
  TrendingUp,
  Clock,
  AlertTriangle,
  BarChart3,
  Users,
  Lock,
  Github,
  BookOpen,
  Download,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Activity,
  Menu,
  X,
  Globe,
} from 'lucide-react';
import { useState } from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-slate-50 to-teal-50 text-gray-900">
      <Navigation />
      <Hero />
      <Problem />
      <Solution />
      <SocialProof />
      <Manifesto />
      <Statistics />
      <DevelopmentStory />
      <DualCTA />
      <Footer />
    </div>
  );
}

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const switchLanguage = (lang: 'en' | 'ru') => {
    localStorage.setItem('language', lang);
    window.location.reload();
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-emerald-100/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <Database className="w-8 h-8 text-emerald-600" />
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-900 to-teal-700">Supabase WordPress Bridge</span>
          </motion.div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-700 hover:text-emerald-600 transition-colors">
              Возможности
            </a>
            <a href="#case-study" className="text-gray-700 hover:text-emerald-600 transition-colors">
              Кейс
            </a>
            <a href="#manifesto" className="text-gray-700 hover:text-emerald-600 transition-colors">
              Больше выгод
            </a>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 bg-gray-50/80 backdrop-blur-sm border border-gray-200/50 rounded-lg p-1">
              <button
                onClick={() => switchLanguage('en')}
                className="px-3 py-1.5 rounded hover:bg-gray-100 font-medium text-2xl transition-all"
                aria-label="Переключить на английский"
              >
                🇺🇸
              </button>
              <button
                onClick={() => switchLanguage('ru')}
                className="px-3 py-1.5 rounded bg-emerald-100 border-2 border-emerald-500 font-medium text-2xl transition-all"
                aria-label="Переключить на русский"
              >
                🇷🇺
              </button>
            </div>

            <motion.a
              href="#download"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden md:block bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-6 py-2 rounded-lg font-medium transition-all shadow-lg whitespace-nowrap"
            >
              Скачать бесплатно
            </motion.a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-900 hover:text-emerald-600 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-xl border-t border-gray-100"
        >
          <div className="px-4 py-4 space-y-3">
            <div className="flex items-center gap-2 bg-gray-50/80 backdrop-blur-sm border border-gray-200/50 rounded-lg p-1 mb-3">
              <button
                onClick={() => switchLanguage('en')}
                className="flex-1 px-3 py-2.5 rounded hover:bg-gray-100 font-medium text-3xl transition-all"
                aria-label="Switch to English"
              >
                🇺🇸
              </button>
              <button
                onClick={() => switchLanguage('ru')}
                className="flex-1 px-3 py-2.5 rounded bg-emerald-100 border-2 border-emerald-500 font-medium text-3xl transition-all"
                aria-label="Switch to Russian"
              >
                🇷🇺
              </button>
            </div>
            <a
              href="#features"
              onClick={() => setIsOpen(false)}
              className="block text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 px-4 py-3 rounded-lg transition-colors"
            >
              Возможности
            </a>
            <a
              href="#case-study"
              onClick={() => setIsOpen(false)}
              className="block text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 px-4 py-3 rounded-lg transition-colors"
            >
              Кейс
            </a>
            <a
              href="#roi"
              onClick={() => setIsOpen(false)}
              className="block text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 px-4 py-3 rounded-lg transition-colors"
            >
              ROI
            </a>
            <a
              href="#master"
              onClick={() => setIsOpen(false)}
              className="block text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 px-4 py-3 rounded-lg transition-colors"
            >
              Обучение
            </a>
            <a
              href="#download"
              onClick={() => setIsOpen(false)}
              className="block bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-6 py-3 rounded-lg font-medium transition-all shadow-lg text-center"
            >
              Скачать плагин
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-bold mb-6 leading-tight">
              <span className="block text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-emerald-900 to-teal-700">
                Хватит тратить время на борьбу с WordPress в вашей Онлайн школе.
              </span>
              <span className="block text-4xl md:text-5xl text-red-600">
                Начните, наконец, привлекать клиентов и поднимите конверсию.
              </span>
            </h1>
            <p className="text-xl text-slate-700 mb-8 leading-relaxed">
              Превратите WordPress в гибкую маркетинговую платформу с помощью Supabase. Автоматические воронки,
              регистрация в 1 клик и аналитика в реальном времени. Без ежемесячной платы. Open Source.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#download"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all flex items-center gap-2 shadow-lg"
              >
                <Download className="w-5 h-5" />
                Скачать бесплатно
              </motion.a>
              <motion.a
                href="#master"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/80 backdrop-blur-sm border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-50/80 px-8 py-4 rounded-lg font-semibold text-lg transition-all flex items-center gap-2 shadow-lg"
              >
                <Sparkles className="w-5 h-5" />
                Узнать больше
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white/80 backdrop-blur-sm border border-emerald-100/50 rounded-2xl p-8 shadow-2xl">
              <div className="space-y-6">
                <div className="bg-emerald-50/80 backdrop-blur-sm rounded-lg p-6 border border-emerald-200/50">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-700">Активных студентов</span>
                    <TrendingUp className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div className="text-4xl font-bold text-emerald-600">+150</div>
                </div>
                <div className="bg-emerald-50/80 backdrop-blur-sm rounded-lg p-6 border border-emerald-200/50">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-700">Конверсия</span>
                    <BarChart3 className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div className="text-4xl font-bold text-emerald-600">+125%</div>
                </div>
                <div className="bg-teal-50/80 backdrop-blur-sm rounded-lg p-6 border border-teal-200/50">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-700">Статус воронки</span>
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div className="text-2xl font-semibold text-emerald-600">Активна</div>
                </div>
              </div>
            </div>
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-emerald-200/30 to-teal-200/30 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Problem() {
  const problems = [
    {
      icon: AlertTriangle,
      title: 'Хаос в воронках',
      description:
        "WordPress не связывает лендинги с конкретными курсами автоматически. Вы тратите часы на ручную выдачу доступов.",
    },
    {
      icon: Users,
      title: 'Стена регистрации',
      description:
        'Стандартные формы WP убивают 50% конверсии. Пользователи ненавидят создавать пароли и подтверждать email. Вы теряете клиентов.',
    },
    {
      icon: BarChart3,
      title: 'Слепая аналитика',
      description:
        "Вы не знаете, какой лендинг привёл платящего студента. Вы не можете оптимизировать ROI. Ваш бизнес слеп!",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">Ловушка роста на WordPress</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/90 backdrop-blur-sm border border-emerald-100/50 rounded-xl p-8 shadow-2xl hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] transition-all hover:bg-white flex flex-col justify-center min-h-[280px]"
            >
              <h3 className="text-2xl font-bold mb-4 text-gray-900 text-center">{problem.title}</h3>
              <p className="text-xl text-slate-700 leading-relaxed text-center">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Solution() {
  const solutions = [
    {
      icon: Zap,
      title: 'Воронки на автопилоте',
      description:
        'Привязать Лендинг A → Курс A. Привязать Лендинг B → VIP Программа. Настроить один раз — работает вечно. Теперь вы можете масштабироваться до тысяч лендингов, мембершипов и курсов. Ваш бизнес растёт автоматически.',
      image: 'left',
    },
    {
      icon: Lock,
      title: 'Вход без трения',
      description:
        'Вход через Google/Facebook или Magic Link. Конверсия мгновенно растёт с 4% до 9%. Вы перестаёте терять пользователей. Пользователи больше не испытывают раздражения и мгновенно попадают на ваш сайт без усилий. Максимальная безопасность аутентификации.',
      image: 'right',
    },
    {
      icon: BarChart3,
      title: 'Прозрачность данных',
      description:
        'SQL-аналитика в реальном времени через Supabase. Знайте точно, откуда приходит каждый рубль. Вы знаете, какие сегменты и кампании работают лучше всего, какие масштабировать, а какие отключать. Какие лендинги лучше всего конвертируют вашу аудиторию. Эффективность рекламы растёт на 47%.',
      image: 'left',
    },
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-900 to-teal-700">Мост к эффективности</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto"></div>
        </motion.div>

        <div className="space-y-24">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                <div className="bg-emerald-50/80 backdrop-blur-sm w-16 h-16 rounded-xl flex items-center justify-center mb-6 border border-emerald-200/50">
                  <solution.icon className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-gray-900">{solution.title}</h3>
                <p className="text-xl text-slate-700 leading-relaxed">{solution.description}</p>
              </div>
              <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                {index === 0 && (
                  <div className="bg-gradient-to-br from-emerald-400 to-teal-500 backdrop-blur-sm border border-emerald-100/50 rounded-xl p-4 h-80 flex items-center justify-center shadow-xl overflow-hidden relative">
                    <svg className="w-11/12 h-11/12" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="80" cy="150" r="30" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.4)" strokeWidth="2" />
                      <circle cx="200" cy="80" r="35" fill="rgba(255,255,255,0.25)" stroke="rgba(255,255,255,0.5)" strokeWidth="2" />
                      <circle cx="200" cy="220" r="35" fill="rgba(255,255,255,0.25)" stroke="rgba(255,255,255,0.5)" strokeWidth="2" />
                      <circle cx="320" cy="150" r="30" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.4)" strokeWidth="2" />

                      <line x1="110" y1="150" x2="170" y2="95" stroke="rgba(255,255,255,0.6)" strokeWidth="3" strokeLinecap="round" />
                      <line x1="110" y1="150" x2="170" y2="205" stroke="rgba(255,255,255,0.6)" strokeWidth="3" strokeLinecap="round" />
                      <line x1="230" y1="95" x2="290" y2="140" stroke="rgba(255,255,255,0.6)" strokeWidth="3" strokeLinecap="round" />
                      <line x1="230" y1="205" x2="290" y2="160" stroke="rgba(255,255,255,0.6)" strokeWidth="3" strokeLinecap="round" />

                      <circle cx="80" cy="150" r="12" fill="white" opacity="0.8" />
                      <circle cx="200" cy="80" r="14" fill="white" opacity="0.8" />
                      <circle cx="200" cy="220" r="14" fill="white" opacity="0.8" />
                      <circle cx="320" cy="150" r="12" fill="white" opacity="0.8" />

                      <circle cx="80" cy="150" r="40" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1">
                        <animate attributeName="r" from="40" to="60" dur="2s" repeatCount="indefinite" />
                        <animate attributeName="opacity" from="0.3" to="0" dur="2s" repeatCount="indefinite" />
                      </circle>
                      <circle cx="320" cy="150" r="40" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1">
                        <animate attributeName="r" from="40" to="60" dur="2s" begin="1s" repeatCount="indefinite" />
                        <animate attributeName="opacity" from="0.3" to="0" dur="2s" begin="1s" repeatCount="indefinite" />
                      </circle>
                    </svg>
                  </div>
                )}
                {index === 1 && (
                  <div className="bg-gradient-to-br from-teal-400 to-cyan-500 backdrop-blur-sm border border-emerald-100/50 rounded-xl p-4 h-80 flex items-center justify-center shadow-xl overflow-hidden relative">
                    <svg className="w-11/12 h-11/12" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M 100 150 Q 100 50, 200 50 Q 300 50, 300 150 Q 300 250, 200 250 Q 100 250, 100 150"
                            fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.4)" strokeWidth="3" />

                      <rect x="180" y="120" width="40" height="80" rx="20" fill="rgba(255,255,255,0.25)" stroke="rgba(255,255,255,0.5)" strokeWidth="2" />

                      <circle cx="200" cy="145" r="8" fill="white" opacity="0.9" />

                      <path d="M 150 150 L 170 150" stroke="rgba(255,255,255,0.6)" strokeWidth="3" strokeLinecap="round">
                        <animate attributeName="d" from="M 150 150 L 170 150" to="M 150 150 L 185 150" dur="1.5s" repeatCount="indefinite" />
                        <animate attributeName="opacity" from="0.6" to="0" dur="1.5s" repeatCount="indefinite" />
                      </path>
                      <path d="M 230 150 L 250 150" stroke="rgba(255,255,255,0.6)" strokeWidth="3" strokeLinecap="round">
                        <animate attributeName="d" from="M 215 150 L 230 150" to="M 215 150 L 250 150" dur="1.5s" repeatCount="indefinite" />
                        <animate attributeName="opacity" from="0.6" to="0" dur="1.5s" repeatCount="indefinite" />
                      </path>

                      <circle cx="130" cy="150" r="6" fill="white" opacity="0.7">
                        <animate attributeName="cx" from="130" to="250" dur="3s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0;0.7;0.7;0" keyTimes="0;0.1;0.9;1" dur="3s" repeatCount="indefinite" />
                      </circle>
                      <circle cx="110" cy="160" r="5" fill="white" opacity="0.6">
                        <animate attributeName="cx" from="110" to="260" dur="3.5s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0;0.6;0.6;0" keyTimes="0;0.1;0.9;1" dur="3.5s" repeatCount="indefinite" />
                      </circle>
                      <circle cx="120" cy="140" r="5" fill="white" opacity="0.6">
                        <animate attributeName="cx" from="120" to="270" dur="3.2s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0;0.6;0.6;0" keyTimes="0;0.1;0.9;1" dur="3.2s" repeatCount="indefinite" />
                      </circle>
                    </svg>
                  </div>
                )}
                {index === 2 && (
                  <div className="bg-gradient-to-br from-cyan-400 to-sky-500 backdrop-blur-sm border border-emerald-100/50 rounded-xl p-4 h-80 flex items-center justify-center shadow-xl overflow-hidden relative">
                    <svg className="w-11/12 h-11/12" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="80" cy="80" r="4" fill="rgba(255,255,255,0.4)" />
                      <circle cx="120" cy="100" r="4" fill="rgba(255,255,255,0.4)" />
                      <circle cx="100" cy="130" r="4" fill="rgba(255,255,255,0.4)" />
                      <circle cx="140" cy="70" r="4" fill="rgba(255,255,255,0.4)" />
                      <circle cx="160" cy="120" r="4" fill="rgba(255,255,255,0.4)" />
                      <circle cx="180" cy="90" r="4" fill="rgba(255,255,255,0.4)" />
                      <circle cx="70" cy="150" r="4" fill="rgba(255,255,255,0.4)" />
                      <circle cx="130" cy="160" r="4" fill="rgba(255,255,255,0.4)" />

                      <line x1="80" y1="80" x2="200" y2="150" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="2,2">
                        <animate attributeName="stroke-opacity" from="0.2" to="0.6" dur="2s" repeatCount="indefinite" />
                      </line>
                      <line x1="120" y1="100" x2="200" y2="150" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="2,2">
                        <animate attributeName="stroke-opacity" from="0.2" to="0.6" dur="2s" begin="0.3s" repeatCount="indefinite" />
                      </line>
                      <line x1="100" y1="130" x2="200" y2="150" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="2,2">
                        <animate attributeName="stroke-opacity" from="0.2" to="0.6" dur="2s" begin="0.6s" repeatCount="indefinite" />
                      </line>
                      <line x1="140" y1="70" x2="200" y2="150" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="2,2">
                        <animate attributeName="stroke-opacity" from="0.2" to="0.6" dur="2s" begin="0.9s" repeatCount="indefinite" />
                      </line>

                      <rect x="160" y="130" width="80" height="60" rx="8" fill="rgba(255,255,255,0.25)" stroke="rgba(255,255,255,0.5)" strokeWidth="2" />

                      <rect x="170" y="145" width="20" height="35" rx="2" fill="white" opacity="0.6" />
                      <rect x="195" y="155" width="20" height="25" rx="2" fill="white" opacity="0.7" />
                      <rect x="220" y="150" width="10" height="30" rx="2" fill="white" opacity="0.8" />

                      <circle cx="200" cy="150" r="50" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="2">
                        <animate attributeName="r" from="50" to="80" dur="3s" repeatCount="indefinite" />
                        <animate attributeName="opacity" from="0.4" to="0" dur="3s" repeatCount="indefinite" />
                      </circle>
                    </svg>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SocialProof() {
  return (
    <section id="case-study" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute top-0 left-0 text-9xl text-emerald-100 font-serif">"</div>
          <blockquote className="relative bg-white/80 backdrop-blur-sm border-2 border-red-500 rounded-xl p-12 shadow-[0_20px_25px_-5px_rgba(0,0,0,0.15),0_8px_10px_-6px_rgba(0,0,0,0.15)]">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Раньше я тратил 3 часа в день на ручное управление доступами для 5 курсов. После создания
              Supabase Bridge я управляю более чем 50 продуктами и сэкономил 90 часов в первый месяц. Конверсия выросла на
              125%.
            </p>
            <footer className="flex items-center gap-4">
              <div className="w-16 h-16 bg-emerald-50/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-emerald-200/50">
                <Users className="w-8 h-8 text-emerald-600" />
              </div>
              <div>
                <div className="font-bold text-lg text-gray-900">Алексей К.</div>
                <div className="text-gray-600">Основатель AI-Dev School</div>
              </div>
            </footer>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}

function Statistics() {
  return (
    <section id="roi" className="pt-10 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-emerald-50/80 backdrop-blur-sm border border-emerald-200/50 rounded-xl p-8 md:p-12 text-center shadow-xl mb-12"
        >
          <p className="text-xl text-gray-700 leading-relaxed">
            Я выступал в роли <span className="text-emerald-600 font-semibold">Product Owner и QA</span>{' '}
            (60% времени). AI писал код (безопасность, база данных, API). Результат:{' '}
            <span className="text-emerald-600 font-semibold">
              Корпоративное качество по цене кофе.
            </span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">Проверка реальностью разработки</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Вы могли подумать, что это корпоративное решение стоило $50k и его разрабатывала команда 3 месяца.{' '}
            <span className="text-emerald-600 font-semibold">Вы ошибаетесь.</span>
          </p>
        </motion.div>

        <div className="bg-white/80 backdrop-blur-sm border border-emerald-100/50 rounded-2xl px-12 pt-32 pb-4 mb-12 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
          <div className="flex items-end justify-center gap-16 md:gap-24 h-[400px] mb-8">
            <div className="flex flex-col items-center gap-4">
              <div className="text-center mb-4">
                <div className="text-4xl md:text-5xl font-bold text-red-600 mb-2">$86,000</div>
                <div className="text-xl text-gray-700">90 дней · 3 Dev + QA</div>
              </div>
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: '300px' }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
                className="w-32 bg-red-500 rounded-t-xl shadow-lg"
              />
              <div className="text-xl font-bold text-gray-700 mt-4">Обычная команда</div>
            </div>

            <div className="flex flex-col items-center gap-4">
              <div className="text-center mb-4">
                <div className="text-4xl md:text-5xl font-bold text-emerald-600 mb-2">$300</div>
                <div className="text-xl text-gray-700">15 дней · 1 Owner + AI</div>
              </div>
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: '10px' }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: 'easeOut', delay: 0.3 }}
                className="w-32 bg-emerald-500 rounded-t-xl shadow-lg"
              />
              <div className="text-xl font-bold text-emerald-600 mt-4">Я + AI (Claude)</div>
            </div>
          </div>

          <div className="h-2 bg-emerald-100 rounded-full w-full mt-12"></div>
        </div>
      </div>
    </section>
  );
}

function Manifesto() {
  return (
    <section id="manifesto" className="pt-20 pb-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/90 backdrop-blur-sm border-2 border-emerald-200/50 rounded-2xl p-10 shadow-2xl"
        >
          <Sparkles className="w-16 h-16 text-emerald-600 mx-auto mb-8" />
          <p className="text-3xl md:text-4xl font-bold leading-relaxed mb-6 text-gray-900">
            Я создал это, чтобы решить свою проблему.
          </p>
          <div className="text-2xl md:text-3xl font-bold text-gray-700 leading-relaxed space-y-4">
            <p>Но это доказывает более важную мысль:</p>
            <p className="text-red-600 font-semibold">
              Вам больше не нужна команда разработчиков, чтобы создавать сложное ПО.
            </p>
            <p>Вам нужен правильный подход.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function DevelopmentStory() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-50/50 to-teal-50/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-900 to-teal-700">
            Как создавался этот лендинг
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Этот лендинг был создан за <span className="text-emerald-600 font-semibold">3 часа</span> одним человеком с помощью AI (Claude), демонстрируя возможности AI-ассистированной разработки.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-3xl font-bold text-center mb-8 text-gray-900">Сравнение стоимости</h3>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="bg-white/80 backdrop-blur-sm border border-red-200/50 rounded-xl p-8 shadow-xl">
              <h4 className="text-2xl font-bold text-red-600 mb-4">Найм команды</h4>
              <div className="space-y-3 text-gray-700">
                <p className="text-xl"><span className="font-semibold">Время:</span> 5-7 дней</p>
                <p className="text-xl"><span className="font-semibold">Стоимость:</span> $2,500 - $3,500</p>
                <p className="text-xl"><span className="font-semibold">Команда:</span> UI/UX дизайнер + Frontend Dev + QA</p>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm border border-orange-200/50 rounded-xl p-8 shadow-xl">
              <h4 className="text-2xl font-bold text-orange-600 mb-4">Фриланс</h4>
              <div className="space-y-3 text-gray-700">
                <p className="text-xl"><span className="font-semibold">Время:</span> 3-5 дней</p>
                <p className="text-xl"><span className="font-semibold">Стоимость:</span> $1,500 - $2,500</p>
                <p className="text-xl"><span className="font-semibold">Команда:</span> 1 Full-stack разработчик</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-50/90 to-teal-50/90 backdrop-blur-sm border-2 border-emerald-200/50 rounded-xl p-8 shadow-2xl">
              <h4 className="text-2xl font-bold text-emerald-600 mb-4">С помощью AI</h4>
              <div className="space-y-3 text-gray-700">
                <p className="text-xl"><span className="font-semibold">Время:</span> 3 часа</p>
                <p className="text-xl"><span className="font-semibold">Стоимость:</span> ~$10</p>
                <p className="text-xl"><span className="font-semibold">Команда:</span> 1 Product Owner + Claude</p>
              </div>
            </div>
          </div>

          <div className="bg-emerald-50/80 backdrop-blur-sm border border-emerald-200/50 rounded-xl p-6 text-center">
            <p className="text-2xl md:text-3xl font-bold text-emerald-600">
              Экономия: снижение стоимости на 99.6%, скорость выше в 40 раз
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-sm border border-emerald-100/50 rounded-xl p-8 shadow-xl"
          >
            <h4 className="text-2xl font-bold text-emerald-600 mb-6 flex items-center gap-2">
              <CheckCircle2 className="w-8 h-8" />
              Что сделал AI:
            </h4>
            <ul className="space-y-3 text-xl text-gray-700">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                <span>Сгенерировал полную кодовую базу на React/TypeScript</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                <span>Реализовал адаптивный дизайн с Tailwind CSS</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                <span>Создал плавные анимации с Framer Motion</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                <span>Провел комплексный аудит безопасности</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                <span>Исправил все уязвимости и оптимизировал производительность</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                <span>Сгенерировал профессиональную документацию</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-sm border border-emerald-100/50 rounded-xl p-8 shadow-xl"
          >
            <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Users className="w-8 h-8 text-gray-700" />
              Что сделал человек:
            </h4>
            <ul className="space-y-3 text-xl text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-2xl flex-shrink-0">🎯</span>
                <span>Определил требования и пользовательский опыт</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl flex-shrink-0">🎨</span>
                <span>Утвердил дизайнерские решения</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl flex-shrink-0">🔍</span>
                <span>Проверил и валидировал результат</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl flex-shrink-0">✅</span>
                <span>Протестировал финальный результат</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/90 backdrop-blur-sm border-2 border-emerald-200/50 rounded-2xl p-10 text-center shadow-2xl"
        >
          <p className="text-2xl md:text-3xl font-bold text-gray-900 leading-relaxed">
            Это доказывает, что вам больше не нужна команда разработчиков или дорогие фрилансеры для создания профессиональных веб-проектов.{' '}
            <span className="text-emerald-600">Вам нужен правильный подход и AI-инструменты.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function DualCTA() {
  return (
    <section id="download" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-sm border border-emerald-100/50 rounded-2xl p-10 shadow-xl"
          >
            <Download className="w-12 h-12 text-gray-700 mb-6" />
            <h3 className="text-3xl font-bold mb-4 text-gray-900">Нужен только инструмент?</h3>
            <h4 className="text-2xl font-semibold text-emerald-600 mb-6">Получите Supabase Bridge</h4>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Бесплатно, Open Source (MIT License). Идеально для владельцев школ, которые хотят исправить свои воронки уже сегодня.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-white/80 backdrop-blur-sm hover:bg-emerald-50/80 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all flex items-center justify-center gap-2 border-2 border-emerald-300 shadow-lg"
            >
              <Download className="w-5 h-5" />
              Скачать плагин
            </motion.button>
          </motion.div>

          <motion.div
            id="master"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-br from-emerald-50/90 to-teal-50/90 backdrop-blur-sm border border-emerald-200/50 rounded-2xl p-10 shadow-xl"
          >
            <Sparkles className="w-12 h-12 text-emerald-600 mb-6" />
            <h3 className="text-3xl font-bold mb-4 text-gray-900">Хотите получить суперсилу?</h3>
            <h4 className="text-2xl font-semibold text-emerald-600 mb-6">
              Курс: AI-ассистированная разработка
            </h4>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Узнайте, как я создал это с нуля за 15 дней, не написав код вручную. Перестаньте зависеть от
              ограничений SaaS. Создавайте свои собственные активы.
            </p>
            <div className="space-y-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                <ArrowRight className="w-5 h-5" />
                Начать бесплатный пробный период
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-white/80 backdrop-blur-sm border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-50/80 px-8 py-4 rounded-lg font-semibold text-lg transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                <BookOpen className="w-5 h-5" />
                Просмотреть программу
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-white/60 backdrop-blur-sm border-t border-emerald-100/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <Database className="w-8 h-8 text-emerald-600" />
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-900 to-teal-700">Supabase WordPress Bridge</span>
          </div>

          <div className="flex items-center gap-8">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-emerald-600 transition-colors flex items-center gap-2"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-emerald-600 transition-colors flex items-center gap-2"
            >
              <BookOpen className="w-5 h-5" />
              Документация
            </a>
            <a
              href="#master"
              className="text-gray-700 hover:text-emerald-600 transition-colors flex items-center gap-2"
            >
              <Sparkles className="w-5 h-5" />
              Курс
            </a>
          </div>

          <div className="text-gray-700">
            Создано с <span className="text-emerald-600 font-semibold">Vibe Coding</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default App;
