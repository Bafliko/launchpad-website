import { motion } from 'framer-motion'

export default function Hero() {
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
        The ultimate tool for everyday work
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mt-6 text-lg text-white/60 max-w-xl"
      >
        One launcher. Five offline tools. Everything you need to get things
        done, without the cloud, the accounts, or the clutter.
      </motion.p>
      <motion.a
        href="#"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-10 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 font-semibold text-bg shadow-glow-lg hover:shadow-glow-accent transition-shadow"
      >
        Download for Windows
      </motion.a>
      {/* ponytail: href is a placeholder ("#"); wire to the real installer/checkout URL later */}
    </section>
  )
}
