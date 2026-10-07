import { motion } from 'framer-motion'

import { useLang } from '../i18n'
import BouncyButton from './BouncyButton'

export default function Hero() {
  const { t } = useLang()
  return (
    <section className="relative isolate flex flex-col items-center justify-center min-h-screen px-6 pt-24 text-center overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_30%,rgba(0,212,255,0.15),transparent_60%)]"
      />
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-6xl font-semibold tracking-tight text-white max-w-3xl"
      >
        {t.heroTitle}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mt-6 text-lg text-white/60 max-w-xl"
      >
        {t.heroSub}
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-10"
      >
        <BouncyButton
          href="https://github.com/Bafliko/launchpad-releases/releases/latest/download/LaunchPad-Setup.exe"
          className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 font-semibold text-bg shadow-glow-lg hover:shadow-glow-accent transition-shadow"
        >
          {t.download}
        </BouncyButton>
      </motion.div>
    </section>
  )
}
