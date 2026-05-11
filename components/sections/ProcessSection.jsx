import React from 'react'

const steps = [
    {
        number: '01',
        title: 'Discovery & Strategy',
        description: 'Understand challenges and design a strategic AI roadmap.',
        image:
            'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&q=80',
    },
    {
        number: '02',
        title: 'Design & Prototype',
        description: 'Detailed wireframes and interactive prototypes.',
        image:
            'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=800&q=80',
    },
    {
        number: '03',
        title: 'Development & Testing',
        description: 'Rigorous testing and continuous collaboration.',
        image:
            'https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=800&q=80',
    },
    {
        number: '04',
        title: 'Launch & Growth',
        description: 'Deploy and optimize for continued success.',
        image:
            'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
    },
]

const ProcessCard = ({ number, title, description, image }) => (
    <div className="relative rounded-2xl overflow-hidden group cursor-pointer card-hover shadow-sm">
        {/* Background image */}
        <img
            src={image}
            alt={title}
            className="w-full h-64 object-cover brightness-75 group-hover:scale-105 transition-transform duration-500"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
        {/* Number badge */}
        <div className="absolute top-4 left-4">
            <div className="bg-white/90 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center shadow-md">
                <span className="text-xs font-bold text-[#1E1E2E]">{number}</span>
            </div>
        </div>
        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
            <h3 className="text-white font-bold text-xl mb-1">{title}</h3>
            <p className="text-white/75 text-sm leading-relaxed">{description}</p>
        </div>
    </div>
)

const ProcessSection = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-text-main uppercase tracking-wide mb-3">
                            Our Process
                        </h2>
                        <div className="w-10 h-1 bg-primary rounded-full" />
                    </div>
                    <p className="text-gray-400 text-base italic">
                        From concept to creation, seamlessly.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {steps.map((step) => (
                        <ProcessCard key={step.number} {...step} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProcessSection