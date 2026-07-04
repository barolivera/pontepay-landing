import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Problem from './components/Problem'
import HowItWorks from './components/HowItWorks'
import Features from './components/Features'
import LatamBridge from './components/LatamBridge'
import TechStack from './components/TechStack'
import FinalCta from './components/FinalCta'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="relative flex flex-col bg-[#F5F5F5] min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <Features />
        <LatamBridge />
        <TechStack />
        <FinalCta />
      </main>
      <Footer />
    </div>
  )
}
