import React from 'react'

const Logo = ({ className = '' }) => (
    <svg
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        {/* Center circle */}
        <circle cx="18" cy="18" r="2.5" fill="#4F35BE" />
        {/* Orbiting nodes */}
        <circle cx="18" cy="6" r="2" fill="#4F35BE" />
        <circle cx="18" cy="30" r="2" fill="#4F35BE" />
        <circle cx="6" cy="18" r="2" fill="#4F35BE" />
        <circle cx="30" cy="18" r="2" fill="#4F35BE" />
        {/* Diagonal nodes */}
        <circle cx="9.5" cy="9.5" r="1.5" fill="#4F35BE" />
        <circle cx="26.5" cy="26.5" r="1.5" fill="#4F35BE" />
        <circle cx="26.5" cy="9.5" r="1.5" fill="#4F35BE" />
        <circle cx="9.5" cy="26.5" r="1.5" fill="#4F35BE" />
        
        {/* Connection lines from center to NSEW */}
        <line x1="18" y1="18" x2="18" y2="8" stroke="#4F35BE" strokeWidth="1.2" opacity="0.8" />
        <line x1="18" y1="18" x2="18" y2="28" stroke="#4F35BE" strokeWidth="1.2" opacity="0.8" />
        <line x1="18" y1="18" x2="8" y2="18" stroke="#4F35BE" strokeWidth="1.2" opacity="0.8" />
        <line x1="18" y1="18" x2="28" y2="18" stroke="#4F35BE" strokeWidth="1.2" opacity="0.8" />
        
        {/* Connection lines between diagonals and NSEW to form network */}
        <path d="M18 6 L9.5 9.5 L6 18 M6 18 L9.5 26.5 L18 30 M18 30 L26.5 26.5 L30 18 M30 18 L26.5 9.5 L18 6" stroke="#4F35BE" strokeWidth="1" strokeDasharray="2 2" opacity="0.6" />
    </svg>
)

export default Logo