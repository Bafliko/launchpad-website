import { useLang } from '../i18n'

export default function Nav() {
  const { t, toggle } = useLang()
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-bg/70 border-b border-white/5">
      <nav className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">
        <span className="font-semibold text-lg tracking-tight text-white">
          Launch<span className="text-accent">Pad</span>
        </span>
        <div className="flex items-center gap-6 text-sm text-white/70">
          <a href="#features" className="hover:text-accent transition-colors">
            {t.navFeatures}
          </a>
          <a href="#pricing" className="hover:text-accent transition-colors">
            {t.navPricing}
          </a>
          <button
            type="button"
            onClick={toggle}
            aria-label={t.switchTo}
            className="rounded-full border border-white/10 px-3 py-1 font-mono text-xs hover:text-accent hover:border-accent/40 transition-colors"
          >
            {t.switchLabel}
          </button>
        </div>
      </nav>
    </header>
  )
}
