import React from 'react'

const HeroSection = () => {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
            style={{
                backgroundImage: "url('https://cogniqai.ai/HomePage/HeroSectionBG.svg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            {/* Floating icon - left */}
            <div className="absolute left-[10%] top-[25%] hidden lg:block animate-float">
                <img src="https://cogniqai.ai/HomePage/IdeaIconHero.svg" alt="Idea Icon" className="w-[72px] h-[72px]" />
            </div>

            {/* Floating icon - right */}
            <div className="absolute right-[10%] top-[25%] hidden lg:block animate-float-delay">
                <img src="https://cogniqai.ai/HomePage/BullsEyeHero.svg" alt="Target Icon" className="w-[72px] h-[72px]" />
            </div>

            {/* Floating icon - bottom right */}
            <div className="absolute right-[15%] bottom-[25%] hidden lg:block animate-float">
                <img src="https://cogniqai.ai/HomePage/MagicSparklesHero.svg" alt="Sparkle Icon" className="w-[72px] h-[72px]" />
            </div>

            {/* Main Content */}
            <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-text-main leading-[1.05] tracking-tight mb-8">
                    Building <span className="text-primary">Intelligent</span>, scalable
                    <br />
                    AI solutions for the <span className="text-primary">Next</span>
                    <br />
                    Generation
                </h1>

                <p className="text-base sm:text-lg text-text-muted max-w-3xl mx-auto mb-12 leading-relaxed">
                    Your premier AI & Software engineering partner - transforming ideas into
                    reliable, high-performance products.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                        href="#services"
                        className="w-full sm:w-auto btn-outline text-center px-8 py-3.5 text-sm font-semibold"
                    >
                        Explore our services
                    </a>
                    <a
                        href="#contact"
                        className="w-full sm:w-auto btn-primary text-center px-8 py-3.5 text-sm font-semibold shadow-lg shadow-primary/25"
                    >
                        Book a Strategy Call
                    </a>
                </div>
            </div>
        </section>
    )
}

export default HeroSection