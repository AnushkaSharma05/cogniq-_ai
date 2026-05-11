import React from 'react'
import { ArrowRight } from 'lucide-react'

const CTASection = () => {
    return (
        <section id="contact" className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative rounded-3xl overflow-hidden">
                    {/* Background image */}
                    <img
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1400&q=80"
                        alt="Team collaborating"
                        className="w-full h-72 sm:h-80 object-cover"
                    />
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-dark/75" />

                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                        <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
                            Ready to transform Your Workflow?
                        </h2>
                        <p className="text-white/80 text-sm sm:text-base max-w-xl mb-8">
                            Let's build a clear, actionable roadmap to solve your biggest operational
                            challenges with AI
                        </p>
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-3.5 rounded-lg font-semibold text-sm transition-all duration-200 shadow-lg shadow-primary/30 hover:shadow-xl group"
                        >
                            Book a Strategy Call
                            <ArrowRight
                                size={16}
                                className="transition-transform duration-200 group-hover:translate-x-1"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CTASection