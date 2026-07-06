import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import BuiltDifferent from './components/BuiltDifferent'
import Stats from './components/Stats'
import Waitlist from './components/Waitlist'
import TechStack from './components/TechStack'
import FinalCta from './components/FinalCta'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="relative flex flex-col bg-[#F5F5F5] min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <BuiltDifferent />
        <Stats />
        <Waitlist />
        <TechStack />
        <FinalCta />
      </main>
      <Footer />
    </div>
  )
}
