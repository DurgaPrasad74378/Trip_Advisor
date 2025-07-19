import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Features from './components/Features'
import Destinations from './components/Destinations'
import TripPlanner from './components/TripPlanner'
import BudgetCalculator from './components/BudgetCalculator'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <HeroSection />
        <Features />
        <Destinations />
        <TripPlanner />
        <BudgetCalculator />
        <Testimonials />  
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App