import { motion } from 'framer-motion'

import { useLang } from '../i18n'

export default function FeatureCard({ app }) {
  const { lang } = useLang()
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl bg-card border border-white/5 p-6 hover:shadow-glow-accent hover:-translate-y-1 transition-all"
    >
      <img src={app.icon} alt="" className="h-10 w-10" />
      <h3 className="mt-4 font-semibold text-white">{app.name}</h3>
      <p className="mt-2 text-sm text-white/60">{app.description[lang]}</p>
      <span className="mt-4 inline-block rounded-full bg-white/5 px-3 py-1 text-xs text-accent">
        {app.tag[lang]}
      </span>
    </motion.div>
  )
}
