import React from 'react'
import Navbar from './components/layout/Navbar.jsx'
import HeroSection from './components/sections/HeroSection.jsx'
import AboutSection from './components/sections/AboutSection.jsx'
import ServicesSection from './components/sections/ServicesSection.jsx'
import WhyChooseUs from './components/sections/WhyChooseUs.jsx'
import ProcessSection from './components/sections/ProcessSection.jsx'
import CTABanner from './components/sections/CTABanner.jsx'
import CTASection from './components/sections/CTASection.jsx'
import Footer from './components/layout/Footer.jsx'

function App() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <main>
                <HeroSection />
                <AboutSection />
                <ServicesSection />
                <WhyChooseUs />
                <ProcessSection />
                <CTABanner />
                <CTASection />
            </main>
            <Footer />
        </div>
    )
}

export default App