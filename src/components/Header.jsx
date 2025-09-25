import React, { useState, useEffect } from 'react';
import { navLinks } from '../data/siteData';

const MenuIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
    </svg>
);
const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a
                    href="/"
                    onClick={(e) => {
                        // prevent full reload if not using a router
                        e.preventDefault();
                    }}
                    className="text-2xl font-bold text-white tracking-wider"
                >
                    LUMEN
                     {/* <span className="text-cyan-400"></span> */}
                </a>
                <nav className="hidden md:flex space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.title}
                            href={link.href}
                            className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                        >
                            {link.title}
                        </a>
                    ))}
                </nav>
                <a
                    href="#contact"
                    className="hidden md:inline-block bg-cyan-500 text-white font-semibold py-2 px-6 rounded-md hover:bg-cyan-600 transition-all duration-300 transform hover:scale-105"
                >
                    Get a Quote
                </a>
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none" aria-label="Toggle Menu">
                        {isOpen ? <CloseIcon /> : <MenuIcon />}
                    </button>
                </div>
            </div>
            {/* Mobile Menu */}
            <div className={`md:hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden bg-slate-900`}>
                <nav className="flex flex-col items-center py-4 space-y-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.title}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium text-lg"
                        >
                            {link.title}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        onClick={() => setIsOpen(false)}
                        className="bg-cyan-500 text-white font-semibold py-2 px-6 rounded-md hover:bg-cyan-600 transition-all duration-300 transform hover:scale-105"
                    >
                        Get a Quote
                    </a>
                </nav>
            </div>
        </header>
    );
};

