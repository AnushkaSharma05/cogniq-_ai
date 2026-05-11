import React from 'react'
import { Instagram, Twitter, Linkedin } from 'lucide-react'
import Logo from '../ui/Logo'

const footerLinks = {
    Company: ['About us', 'Careers', 'Blogs'],
    'AI Solutions': ['Custom AI Agents', 'Voice AI', 'Customer Support AI'],
    Services: ['Workflow Automation', 'Predictive Analytics', 'All Services →'],
    Products: ['All Products', 'JobMail AI', 'PostGenius AI'],
}

const Footer = () => {
    return (
        <footer className="bg-dark text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
                {/* Top section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-2 mb-2">
                            <Logo className="w-8 h-8" />
                            <span className="text-lg font-bold text-accent">Cogniq AI</span>
                        </div>
                        <p className="text-gray-500 text-xs mb-4 italic">A Cogniq Labs Division</p>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Building intelligent AI apps that transform how you interact with
                            technology.
                        </p>

                        {/* Social links */}
                        <div className="flex items-center gap-3">
                            {[Instagram, Twitter, Linkedin].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="border border-gray-600 rounded-lg w-9 h-9 flex items-center justify-center text-gray-400 hover:border-primary hover:text-primary transition-all duration-200 hover:bg-primary/10"
                                >
                                    <Icon size={16} strokeWidth={1.8} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category}>
                            <h4 className="text-white font-semibold text-sm mb-5">{category}</h4>
                            <ul className="space-y-3">
                                {links.map((link) => (
                                    <li key={link}>
                                        <a
                                            href="#"
                                            className="text-gray-400 text-sm hover:text-white transition-colors duration-200"
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Divider */}
                <div className="border-t border-gray-700/50 pt-6">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                        <p className="text-gray-500 text-xs">
                            © 2026 Cogniq AI. All Rights Reserved.
                        </p>
                        <div className="flex items-center gap-4">
                            <a href="#" className="text-gray-500 text-xs hover:text-gray-300 transition-colors">
                                Terms of service
                            </a>
                            <span className="text-gray-600">•</span>
                            <a href="#" className="text-gray-500 text-xs hover:text-gray-300 transition-colors">
                                Privacy Policy
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer