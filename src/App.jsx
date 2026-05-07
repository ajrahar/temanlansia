import TopNavBar from './components/TopNavBar'
import HeroSection from './components/HeroSection'
import ProblemSection from './components/ProblemSection'
import ServicesSection from './components/ServicesSection'
import WhyUsSection from './components/WhyUsSection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'

function App() {
  return (
    <div style={{ background: 'linear-gradient(0deg, #FDF9F4, #FDF9F4), #FFFFFF', minHeight: '100vh' }}>
      <TopNavBar />
      <HeroSection />
      <ProblemSection />
      <ServicesSection />
      <WhyUsSection />
      <CTASection />
      <Footer />
    </div>
  )
}

export default App
