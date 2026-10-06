import { useLang } from '../i18n'
import BouncyButton from './BouncyButton'

export default function Pricing() {
  const { t } = useLang()
  return (
    <section id="pricing" className="px-6 py-24 max-w-2xl mx-auto text-center">
      <h2 className="text-3xl font-semibold text-white">{t.pricingTitle}</h2>
      <p className="mt-4 text-white/60">{t.pricingSub}</p>
      <div className="mt-10 rounded-2xl bg-card border border-white/5 p-10">
        <p className="text-5xl font-semibold text-white">
          ₪9.99<span className="text-base text-white/50">{t.perMonth}</span>
        </p>
        <div className="mt-8">
          <BouncyButton
            href="#"
            className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-3 font-semibold text-bg shadow-glow-accent hover:shadow-glow-lg transition-shadow"
          >
            {t.trial}
          </BouncyButton>
        </div>
        {/* ponytail: href is a placeholder ("#"); wire to the Lemon Squeezy checkout later */}
      </div>
    </section>
  )
}
