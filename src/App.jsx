import Nav from './components/Nav'
import Hero from './components/Hero'
import Features from './components/Features'
import WhyLaunchPad from './components/WhyLaunchPad'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-bg text-white min-h-screen">
      <Nav />
      <Hero />
      <Features />
      <WhyLaunchPad />
      <Pricing />
      <Footer />
    </div>
  )
}
