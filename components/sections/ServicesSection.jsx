import React from 'react'
import { ArrowRight, Headphones, Calendar, BarChart3, Puzzle } from 'lucide-react'

const services = [
    {
        icon: Headphones,
        title: 'AI-Powered Customer Service',
        description:
            'Automate 80% of routine queries and turn your support center into a revenue driver.',
    },
    {
        icon: Calendar,
        title: 'Automated Scheduling & Operations',
        description:
            'Eliminate no-shows and recover thousands in lost revenue with intelligent automation.',
    },
    {
        icon: BarChart3,
        title: 'Intelligent Inventory Management',
        description:
            'Prevent stockouts and make data-driven decisions with predictive forecasting.',
    },
    {
        icon: Puzzle,
        title: 'Micro Tools & Extensions',
        description: 'Lightweight tools powered by AI to boost productivity.',
    },
]

const ServiceCard = ({ icon: Icon, title, description }) => (
    <div className="bg-bg-light rounded-2xl p-7 card-hover border border-transparent hover:border-primary/10 group cursor-pointer">
        <div className="bg-primary rounded-xl w-12 h-12 flex items-center justify-center mb-5 group-hover:bg-primary-dark transition-colors duration-200 shadow-md shadow-primary/20">
            <Icon size={22} className="text-white" strokeWidth={1.8} />
        </div>
        <h3 className="text-text-main font-bold text-lg mb-2.5 group-hover:text-primary transition-colors duration-200">
            {title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
    </div>
)

const ServicesSection = () => {
    return (
        <section id="services" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-12">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-text-main uppercase tracking-wide mb-3">
                        Our Services
                    </h2>
                    <div className="w-10 h-1 bg-primary rounded-full mb-5" />
                    <p className="text-gray-500 text-base">
                        Solve your biggest challenges with end-to-end AI solutions.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
                    {services.map((service) => (
                        <ServiceCard key={service.title} {...service} />
                    ))}
                </div>

                {/* View all link */}
                <div className="text-center">
                    <a
                        href="#services"
                        className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all duration-200 group"
                    >
                        View all Services
                        <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default ServicesSection