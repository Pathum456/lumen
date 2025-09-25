import React from 'react';
import { motion } from 'framer-motion';
import lumenLogo from '../assets/images/logo/lumen_logo.png';
export const AboutSection = () => {
    return (
        <section id="about" className="py-20 bg-slate-800 overflow-hidden">
            <motion.div 
                className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8 }}
            >
                <div>
                    {/* --- THIS IS THE CORRECTED LINE --- */}
                    <img 
                        src={lumenLogo}
                        alt="Lumen Digital Team Vision" 
                        className="rounded-lg shadow-2xl"
                    />
                </div>
                <div>
                    <h2 className="text-4xl font-bold text-white mb-4">Who We Are</h2>
                    <p className="text-gray-400 mb-4 text-lg">
                        Founded in the vibrant city of Galle, Lumen Digital was born from the shared vision of two passionate technologists, Pathum and Hiemth. We believe in the power of technology to solve real-world problems and create meaningful digital experiences.
                    </p>
                    <p className="text-gray-400 text-lg">
                        Our mission is to be more than just a service provider; we aim to be your trusted digital partner, guiding you through the complexities of the tech landscape and delivering solutions that generate tangible results.
                    </p>
                </div>
            </motion.div>
        </section>
    );
};

