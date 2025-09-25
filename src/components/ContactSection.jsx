import React from 'react';
import { motion } from 'framer-motion';

export const ContactSection = () => {
    return (
        <section id="contact" className="py-20 bg-slate-800">
            <motion.div 
                className="container mx-auto px-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
            >
                <div className="text-center">
                    <h2 className="text-4xl font-bold text-white">Let's Create Something Amazing</h2>
                    <p className="text-gray-400 mt-2 mb-12">Have a project in mind? We'd love to hear about it.</p>
                </div>
                <div className="max-w-4xl mx-auto bg-slate-900 rounded-lg shadow-xl p-8 grid md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-2xl text-white font-bold mb-4">Get in Touch</h3>
                        <p className="text-gray-400 mb-4">Fill out the form and our team will get back to you within 24 hours.</p>
                        <div className="space-y-4 text-gray-300">
                           <p><strong>Email:</strong> hello@lumendigital.lk</p>
                           <p><strong>Phone:</strong> +94 77 123 4567</p>
                           <p><strong>Location:</strong> 123 Sea Street, Galle, Southern Province, Sri Lanka</p>
                        </div>
                    </div>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div className="mb-4">
                            <input type="text" placeholder="Your Name" required className="w-full bg-slate-800 border border-slate-700 rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-shadow" />
                        </div>
                        <div className="mb-4">
                            <input type="email" placeholder="Your Email" required className="w-full bg-slate-800 border border-slate-700 rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-shadow" />
                        </div>
                        <div className="mb-4">
                            <textarea placeholder="Your Message" rows="5" required className="w-full bg-slate-800 border border-slate-700 rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-shadow"></textarea>
                        </div>
                        <button type="submit" className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                            Send Message
                        </button>
                    </form>
                </div>
            </motion.div>
        </section>
    );
};

