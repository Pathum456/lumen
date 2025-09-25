import React from 'react';
import { motion } from 'framer-motion';
import { services } from '../data/siteData';

// Self-contained Icon components
const icons = {
  Code: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 mb-4 text-cyan-400"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>,
  Pos: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 mb-4 text-cyan-400"><path d="M1 4h16v10H1z"></path><path d="M17 14v2.5c0 .8-.7 1.5-1.5 1.5h-11c-.8 0-1.5-.7-1.5-1.5V14"></path><path d="M8 18h8"></path><path d="m12 14 4 4-4 4"></path></svg>,
  Mobile: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 mb-4 text-cyan-400"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>,
  Web: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 mb-4 text-cyan-400"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>,
  Marketing: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 mb-4 text-cyan-400"><path d="m3 11 18-5v12L3 14v-3z"></path><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"></path></svg>,
};

const cardVariants = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: { y: 0, opacity: 1, transition: { type: "spring", bounce: 0.4, duration: 0.8 } }
};

export const ServicesSection = () => {
    return (
        <section id="services" className="py-20 bg-slate-800">
            <div className="container mx-auto px-6">
                <motion.div 
                    className="text-center mb-12"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-4xl font-bold text-white">Our Services</h2>
                    <p className="text-gray-400 mt-2">We offer a complete spectrum of digital solutions.</p>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => {
                        const Icon = icons[service.icon];
                        return (
                            <motion.div
                                key={index}
                                className="bg-slate-900 p-8 rounded-lg shadow-lg transform transition-all duration-500 hover:-translate-y-2 hover:shadow-cyan-500/20"
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: true, amount: 0.5 }}
                                variants={cardVariants}
                            >
                                <div className="flex justify-center md:justify-start">{Icon && <Icon />}</div>
                                <h3 className="text-2xl font-bold text-white mb-3 text-center md:text-left">{service.title}</h3>
                                <p className="text-gray-400 text-center md:text-left">{service.description}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

