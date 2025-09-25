import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonials } from '../data/siteData';

export const TestimonialsSection = () => {
    const [current, setCurrent] = useState(0);

    const next = () => setCurrent(current === testimonials.length - 1 ? 0 : current + 1);
    const prev = () => setCurrent(current === 0 ? testimonials.length - 1 : current - 1);

    return (
        <section id="testimonials" className="py-20 bg-slate-900 overflow-hidden">
            <motion.div 
                className="container mx-auto px-6 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-4xl font-bold text-white mb-12">What Our Clients Say</h2>
                <div className="relative max-w-3xl mx-auto h-64 flex items-center justify-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="absolute inset-0"
                        >
                           <blockquote className="text-xl md:text-2xl text-gray-300 italic mb-4">"{testimonials[current].quote}"</blockquote>
                           <p className="text-lg font-semibold text-white">{testimonials[current].name}</p>
                           <p className="text-cyan-400">{testimonials[current].company}</p>
                        </motion.div>
                    </AnimatePresence>
                </div>
                 <div className="flex justify-center mt-8 space-x-3">
                    <button onClick={prev} className="bg-slate-700/50 p-2 rounded-full text-white hover:bg-slate-600/50 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                    </button>
                    <button onClick={next} className="bg-slate-700/50 p-2 rounded-full text-white hover:bg-slate-600/50 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                    </button>
                </div>
            </motion.div>
        </section>
    );
};

