import React from 'react'
import { ArrowRight, Zap } from 'lucide-react'

const CTABanner = () => {
    return (
        <section className="py-12 bg-bg-light">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 py-4">
                    {/* Left */}
                    <div className="flex items-center gap-4">
                        <div className="bg-primary rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/25">
                            <Zap size={22} className="text-white" strokeWidth={2} />
                        </div>
                        <div>
                            <h3 className="font-bold text-text-main text-lg">
                                Unlock AI Potential
                            </h3>
                            <p className="text-gray-500 text-sm">
                                Discover how we can transform your operations
                            </p>
                        </div>
                    </div>

                    {/* Right */}
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 border-2 border-primary text-primary px-6 py-3 rounded-lg text-sm font-semibold hover:bg-primary hover:text-white transition-all duration-200 group whitespace-nowrap"
                    >
                        Explore Solutions
                        <ArrowRight
                            size={16}
                            className="transition-transform duration-200 group-hover:translate-x-1"
                        />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default CTABanner