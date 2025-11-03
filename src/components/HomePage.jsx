import { motion } from 'framer-motion'

const colors = {
  bg: '#FAFAF7',
  text: '#333333',
  accent: '#C66C5D',
  muted: '#7D7D7D',
}

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

function SoftArrow() {
  return (
    <div className="mt-10 flex justify-center" aria-hidden>
      <div className="animate-bounce text-[28px]" style={{ color: colors.accent }}>⌄</div>
    </div>
  )
}

function TensionIllustration() {
  // Minimal flat illustration of a person silhouette with highlighted neck/back/shoulders
  return (
    <svg viewBox="0 0 200 200" className="mx-auto w-56 h-56" aria-hidden>
      <circle cx="100" cy="60" r="24" fill="#EAE7E2" />
      <rect x="86" y="84" width="28" height="48" rx="12" fill="#EAE7E2" />
      <rect x="58" y="92" width="24" height="12" rx="6" fill="#EAE7E2" />
      <rect x="118" y="92" width="24" height="12" rx="6" fill="#EAE7E2" />
      <rect x="84" y="132" width="32" height="40" rx="10" fill="#EAE7E2" />
      {/* Highlights */}
      <circle cx="100" cy="88" r="6" fill={colors.accent} opacity="0.85" />
      <rect x="62" y="94" width="16" height="6" rx="3" fill={colors.accent} opacity="0.75" />
      <rect x="122" y="94" width="16" height="6" rx="3" fill={colors.accent} opacity="0.75" />
      <rect x="92" y="112" width="16" height="6" rx="3" fill={colors.accent} opacity="0.6" />
    </svg>
  )
}

export default function HomePage() {
  return (
    <main className="w-full" style={{ backgroundColor: colors.bg, color: colors.text }}>
      {/* PAGE 1 — HERO */}
      <section className="min-h-[88vh] flex items-center">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-3xl sm:text-5xl leading-[1.3] font-semibold"
            style={{ color: colors.text }}
          >
            تمرین واقعی برای آدم‌های واقعی.
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-20% 0px' }}
            className="mt-4 text-base sm:text-lg"
            style={{ color: colors.muted }}
          >
            برنامه‌های تمرینی قابل اجرا در خانه، مناسب افراد پرمشغله، با پشتیبانی انسانی.
          </motion.p>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-8 flex justify-center"
          >
            <a
              href="#/assessment"
              className="px-6 py-3 rounded-md text-white text-sm sm:text-base"
              style={{ backgroundColor: colors.accent }}
            >
              مشاوره رایگان ۱۰ دقیقه‌ای
            </a>
          </motion.div>
          <SoftArrow />
        </div>
      </section>

      {/* PAGE 2 — PROBLEM */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6 grid sm:grid-cols-2 gap-10 items-center">
          <div>
            {['روزهای طولانی پشت میز…', 'سنگینی بدن…', 'کاهش انرژی…', 'بی‌حالی ذهن…'].map((t, i) => (
              <motion.p
                key={t}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="text-lg sm:text-xl mb-3"
                style={{ color: colors.text }}
              >
                {t}
              </motion.p>
            ))}
            <p className="text-sm sm:text-base" style={{ color: colors.muted }}>
              ما این واقعیت‌ها را می‌بینیم و برنامه را بر اساس زندگی واقعی شما می‌چینیم.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <TensionIllustration />
          </motion.div>
        </div>
      </section>

      {/* PAGE 3 — STORY */}
      <section className="py-20" style={{ backgroundColor: '#F7F3F0' }}>
        <div className="mx-auto max-w-6xl px-6">
          <motion.h2
            className="text-2xl sm:text-3xl mb-8"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ color: colors.text }}
          >
            مسیر نازگل
          </motion.h2>
          <div className="overflow-x-auto">
            <div className="flex items-center gap-4 sm:gap-8 min-w-[700px]">
              {['برنامه‌نویس', 'آسیب ورزشی', 'تصمیم', 'دانشگاه الزهرا (فیزیولوژی ورزشی)', 'مربی تخصصی حرکت و اصلاح فرم'].map((step, i) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="shrink-0 rounded-xl px-4 py-6 text-center border"
                  style={{ borderColor: '#EAE7E2', backgroundColor: 'white', color: colors.text }}
                >
                  <div className="text-sm sm:text-base">{step}</div>
                </motion.div>
              ))}
            </div>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 text-base sm:text-lg"
            style={{ color: colors.muted }}
          >
            نازگل این مسیر را برای این آغاز کرد که ورزش، حال آدم را بهتر کند، نه بدتر.
          </motion.p>
        </div>
      </section>

      {/* PAGE 4 — SOLUTION */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <motion.h2
            className="text-2xl sm:text-3xl mb-8"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ color: colors.text }}
          >
            روش ما
          </motion.h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { title: 'تمرین در خانه', text: 'کوتاه، مؤثر، بدون تجهیزات' },
              { title: 'پشتیبانی انسانی', text: 'بررسی ماهانه + همراهی واقعی، نه پیام‌های خودکار' },
              { title: 'تغذیه قابل انجام', text: 'بدون رژیم‌های سخت، فقط عادت‌های قابل اجرا' },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="rounded-2xl p-6 border shadow-sm"
                style={{ borderColor: '#EFEDE9', backgroundColor: 'white' }}
              >
                <div className="text-lg font-medium" style={{ color: colors.text }}>{card.title}</div>
                <p className="mt-2 text-sm" style={{ color: colors.muted }}>{card.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PAGE 5 — HOW IT WORKS */}
      <section className="py-20" style={{ backgroundColor: '#F8F7F3' }}>
        <div className="mx-auto max-w-6xl px-6">
          <motion.h2
            className="text-2xl sm:text-3xl mb-8"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ color: colors.text }}
          >
            چطور کار می‌کند
          </motion.h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              'تکمیل فرم ارزیابی',
              'دریافت برنامه تمرینی اختصاصی',
              'شروع + پشتیبانی',
            ].map((step, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="rounded-xl p-6 border bg-white"
                style={{ borderColor: '#ECEAE6' }}
              >
                <div className="text-sm text-zinc-500">گام {i + 1}</div>
                <div className="text-base sm:text-lg mt-1" style={{ color: colors.text }}>{step}</div>
              </motion.div>
            ))}
          </div>
          <div className="mt-8">
            <a
              href="#/assessment"
              className="inline-flex items-center px-5 py-3 rounded-md text-white"
              style={{ backgroundColor: colors.accent }}
            >
              شروع ارزیابی
            </a>
          </div>
        </div>
      </section>

      {/* PAGE 6 — CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-xl sm:text-2xl"
            style={{ color: colors.text }}
          >
            اگه می‌خوای کم‌کم حالِ زندگی‌ت رو بهتر کنی، از همینجا شروع می‌کنیم 🌿
          </motion.p>
          <a
            href="#/assessment"
            className="mt-6 inline-block px-6 py-3 rounded-md text-white"
            style={{ backgroundColor: colors.accent }}
          >
            شروع
          </a>
        </div>
      </section>
    </main>
  )
}
