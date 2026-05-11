import React from 'react'
import { Lightbulb, Target, Sparkles as SparklesIcon } from 'lucide-react'

const HeroSection = () => {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center hero-grid overflow-hidden pt-20"
        >
            {/* Soft white gradient at the center behind text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[750px] w-[750px] bg-white rounded-full blur-[100px] pointer-events-none" />

            {/* Subtle decorative sparkles */}
            <Sparkle className="absolute left-[10%] top-[42%] text-primary/20 hidden sm:block" />
            <Sparkle className="absolute right-[12%] top-[40%] text-primary/20 hidden sm:block" />
            <Sparkle className="absolute left-[8%] bottom-[20%] text-primary/30 hidden sm:block" />
            <Sparkle className="absolute right-[14%] bottom-[25%] text-primary/25 hidden sm:block" />
            <Sparkle className="absolute left-[20%] top-[15%] text-primary/15 hidden sm:block scale-75" />
            <Sparkle className="absolute right-[22%] top-[18%] text-primary/15 hidden sm:block scale-75" />

            {/* Floating icon - left */}
            <div className="float-anim absolute left-[12%] top-[25%] hidden lg:block">
                <div className="bg-white rounded-full p-4 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-50/50">
                    <Lightbulb size={24} className="text-gray-500" strokeWidth={1.5} />
                </div>
            </div>

            {/* Floating icon - right top */}
            <div className="float-anim-2 absolute right-[12%] top-[30%] hidden lg:block">
                <div className="bg-white rounded-full p-4 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-50/50">
                    <Target size={24} className="text-[#6495ED]" strokeWidth={1.5} />
                </div>
            </div>

            {/* Floating icon - right bottom */}
            <div className="float-anim absolute right-[15%] bottom-[20%] hidden lg:block">
                <div className="bg-white rounded-full p-4 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-50/50">
                    <SparklesIcon size={24} className="text-primary" strokeWidth={1.5} />
                </div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6">
                <h1 className="text-5xl sm:text-6xl lg:text-[4.5rem] font-extrabold text-[#3a3f4e] leading-[1.1] tracking-tight mb-7">
                    Building <span className="text-[#6C4DFF]">Intelligent</span>, scalable AI
                    <br />
                    solutions for the <span className="text-[#6C4DFF]">Next</span>
                    <br />
                    Generation
                </h1>

                <p className="text-base sm:text-lg text-gray-500 font-medium max-w-2xl mx-auto mb-10 leading-relaxed">
                    Your premier AI & Software engineering partner - transforming ideas into
                    reliable, high-performance products.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                        href="#services"
                        className="w-full sm:w-auto px-8 py-3.5 text-[15px] font-bold text-[#6C4DFF] border border-[#6C4DFF] rounded transition-all duration-200 hover:bg-[#6C4DFF]/5 active:scale-95"
                    >
                        Explore our services
                    </a>
                    <a
                        href="#contact"
                        className="w-full sm:w-auto px-8 py-3.5 text-[15px] font-bold text-white bg-[#6C4DFF] rounded transition-all duration-200 hover:bg-[#5839E6] shadow-lg shadow-[#6C4DFF]/25 active:scale-95"
                    >
                        Book a Strategy Call
                    </a>
                </div>
            </div>
        </section>
    )
}

const Sparkle = ({ className }) => (
    <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
        aria-hidden="true"
    >
        <path d="M12 2l1.4 6.1L20 10l-6.6 1.9L12 18l-1.4-6.1L4 10l6.6-1.9L12 2z" />
    </svg>
)

export default HeroSection