const POINTS = [
  {
    title: 'Offline-first',
    body: 'Every tool runs locally. No cloud, no accounts, nothing leaves your machine.',
  },
  {
    title: 'One license',
    body: 'A single subscription unlocks the whole toolkit — no per-app purchases.',
  },
  {
    title: 'Always current',
    body: 'LaunchPad and every app inside it update themselves automatically.',
  },
]

export default function WhyLaunchPad() {
  return (
    <section className="px-6 py-24 max-w-5xl mx-auto grid gap-8 sm:grid-cols-3">
      {POINTS.map((point) => (
        <div key={point.title}>
          <h3 className="font-semibold text-white">{point.title}</h3>
          <p className="mt-2 text-sm text-white/60">{point.body}</p>
        </div>
      ))}
    </section>
  )
}
