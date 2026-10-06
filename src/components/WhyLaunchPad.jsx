import { useLang } from '../i18n'

export default function WhyLaunchPad() {
  const { t } = useLang()
  return (
    <section className="px-6 py-24 max-w-5xl mx-auto grid gap-8 sm:grid-cols-3">
      {t.points.map((point) => (
        <div key={point.title}>
          <h3 className="font-semibold text-white">{point.title}</h3>
          <p className="mt-2 text-sm text-white/60">{point.body}</p>
        </div>
      ))}
    </section>
  )
}
