import Nav from './components/Nav'
import Hero from './components/Hero'
import Features from './components/Features'
import WhyLaunchPad from './components/WhyLaunchPad'
import Pricing from './components/Pricing'
import Footer from './components/Footer'
import { LangProvider } from './i18n'

export default function App() {
  return (
    <LangProvider>
      <div className="bg-bg text-white min-h-screen">
        <Nav />
        <Hero />
        <Features />
        <WhyLaunchPad />
        <Pricing />
        <Footer />
      </div>
    </LangProvider>
  )
}
