import React from 'react';

export const HeroSection = () => {
    return (
        <section className="min-h-screen bg-slate-900 text-white flex items-center justify-center relative overflow-hidden">
            {/* Background glowing shapes */}
            <div className="absolute top-0 left-0 -translate-x-1/3 -translate-y-1/3 w-96 h-96 bg-cyan-500/20 rounded-full filter blur-3xl animate-blob"></div>
            <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>

            <div className="container mx-auto px-6 text-center z-10">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight tracking-tight animate-fade-in-down">
                    Illuminating Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">Digital</span> Future
                </h1>
                <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 animate-fade-in-up animation-delay-500">
                    We craft bespoke software, powerful applications, and effective marketing strategies to propel your business forward. Based in Galle, serving the world.
                </p>
                <a href="#contact" className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-3 px-10 rounded-lg text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-110 animate-fade-in-up animation-delay-1000">
                    Let's Build Together
                </a>
            </div>
        </section>
    );
};

