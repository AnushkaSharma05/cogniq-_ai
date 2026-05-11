import React from 'react'
import { ArrowUpRight } from 'lucide-react'

const AboutSection = () => {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left - Image with purple bar */}
                    <div className="relative flex items-stretch">
                        {/* Purple vertical bar */}
                        <div className="w-5 rounded-sm bg-gradient-to-b from-primary via-accent to-primary/60 mr-4 flex-shrink-0" />

                        {/* Image */}
                        <div className="flex-1 rounded-2xl overflow-hidden shadow-xl">
                            <img
                                src="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80"
                                alt="AI Robot Hand"
                                className="w-full h-full object-cover"
                                style={{ minHeight: '320px', maxHeight: '420px' }}
                            />
                        </div>
                    </div>

                    {/* Right - Content */}
                    <div>
                        <span className="section-tag mb-5 inline-block">About Us</span>

                        <p className="text-base font-bold text-[#1E1E2E] mb-3">
                            Engineering Trust.{' '}
                            <span className="text-primary">Delivering Intelligence.</span>
                        </p>

                        <h2 className="text-3xl sm:text-4xl font-extrabold text-text-main mb-5">
                            At Cogniq AI
                        </h2>

                        <p className="text-gray-500 text-base leading-relaxed mb-8">
                            we don't just develop features, we build{' '}
                            <span className="text-primary font-semibold">full-scale</span> AI systems
                            designed for clarity, transparency, and long-term growth. From
                            startups to enterprises, we partner with teams that want to
                            innovate without compromising on{' '}
                            <span className="font-bold text-text-main">quality</span>.
                        </p>

                        <a
                            href="#about"
                            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-primary-dark transition-all duration-200 hover:shadow-lg hover:shadow-primary/25 group"
                        >
                            Know more about Us
                            <ArrowUpRight
                                size={16}
                                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection