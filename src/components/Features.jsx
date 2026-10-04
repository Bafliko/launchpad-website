import { APPS } from '../data/apps'
import FeatureCard from './FeatureCard'

export default function Features() {
  return (
    <section id="features" className="px-6 py-24 max-w-6xl mx-auto">
      <h2 className="text-3xl font-semibold text-white text-center">
        Five tools, one license
      </h2>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {APPS.map((app) => (
          <FeatureCard key={app.id} app={app} />
        ))}
      </div>
    </section>
  )
}
