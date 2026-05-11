import React from 'react'
import { ShieldCheck, Maximize2, Brain, MousePointer2 } from 'lucide-react'

const features = [
    {
        icon: ShieldCheck,
        title: 'High-Trust Engineering',
        description: 'Research-backed methods with transparent communication.',
    },
    {
        icon: Maximize2,
        title: 'Built for Scale',
        description: 'Your product grows without breaking.',
    },
    {
        icon: Brain,
        title: 'Gen AI Expertise',
        description: 'Deep experience with LLMs and custom AI.',
    },
    {
        icon: MousePointer2,
        title: 'User-Centered Design',
        description: 'Every feature is intuitive and purposeful.',
    },
]

const FeatureCard = ({ icon: Icon, title, description }) => (
    <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm card-hover group">
        <div className="flex items-start gap-4">
            <div className="bg-primary rounded-xl w-11 h-11 flex items-center justify-center flex-shrink-0 shadow-md shadow-primary/20">
                <Icon size={20} className="text-white" strokeWidth={1.8} />
            </div>
            <div>
                <h3 className="font-bold text-[#1E1E2E] text-sm mb-1.5 group-hover:text-primary transition-colors">
                    {title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed">{description}</p>
            </div>
        </div>
    </div>
)

const WhyChooseUs = () => {
    return (
        <section className="py-20 bg-bg-section">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16 items-start">
                    {/* Left text */}
                    <div className="lg:col-span-1">
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-text-main uppercase tracking-wide mb-3">
                            Why Choose Us
                        </h2>
                        <div className="w-10 h-1 bg-primary rounded-full mb-5" />
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Passion for precision, commitment to quality.
                        </p>
                    </div>

                    {/* Right grid */}
                    <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {features.map((feature) => (
                            <FeatureCard key={feature.title} {...feature} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyChooseUs