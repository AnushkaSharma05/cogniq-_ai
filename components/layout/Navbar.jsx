import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Logo from '../ui/Logo'

const navLinks = [
    { label: 'Home', href: '#home', active: true },
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Our Lab', href: '#lab' },
    { label: 'Blogs', href: '#blogs' },
]

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100'
                    : 'bg-white/95'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <a href="#home" className="flex items-center gap-2 group">
                        <Logo className="w-9 h-9" />
                        <span className="text-lg font-bold text-text-main">
                            Cogniq <span className="text-primary">AI</span>
                        </span>
                    </a>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className={`text-sm font-medium transition-colors duration-200 ${link.active
                                        ? 'text-primary'
                                        : 'text-gray-600 hover:text-primary'
                                    }`}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <a
                            href="#contact"
                            className="bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-primary-dark transition-all duration-200 hover:shadow-lg hover:shadow-primary/25"
                        >
                            Contact Us
                        </a>
                    </div>

                    {/* Mobile toggle */}
                    <button
                        className="md:hidden text-gray-700 p-2"
                        onClick={() => setMobileOpen(!mobileOpen)}
                    >
                        {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
                    <div className="px-4 pt-3 pb-5 space-y-2">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className={`block py-2.5 px-3 rounded-md text-sm font-medium transition-colors ${link.active
                                        ? 'text-primary bg-primary/5'
                                        : 'text-gray-700 hover:text-primary hover:bg-primary/5'
                                    }`}
                                onClick={() => setMobileOpen(false)}
                            >
                                {link.label}
                            </a>
                        ))}
                        <div className="pt-2">
                            <a
                                href="#contact"
                                className="block text-center bg-primary text-white py-2.5 px-4 rounded-lg text-sm font-semibold hover:bg-primary-dark transition-colors"
                                onClick={() => setMobileOpen(false)}
                            >
                                Contact Us
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar