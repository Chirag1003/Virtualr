// import React from 'react'
import Navbar from './components/Navbar'
import Herosection from './components/Herosection'
import FeatureSection from './components/FeatureSection'
import Workflow from './components/Workflow'
import Pricing from './components/Pricing'
import Footer from './components/Footer'
const App = () => {
  return (
    <div>
      <Navbar />
      <Herosection />
      <FeatureSection />
      <Workflow />
      <Pricing />
      <Footer />
    </div>
  )
}

export default App