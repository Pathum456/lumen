import React from 'react';
import { motion } from 'framer-motion';
import { technologies } from '../data/siteData';
import { TechIcons } from '../data/siteData'; 

// Animation for the entire section title and description
const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut"
        }
    }
};

// Animation for individual technology cards
const cardVariants = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8
        }
    }
};

export const TechnologiesSection = () => {
    return (
        <section id="technologies" className="py-20 bg-slate-800">
            <div className="container mx-auto px-6">
                <motion.div
                    className="text-center mb-12"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={sectionVariants}
                >
                    <h2 className="text-4xl font-bold text-white">Technologies We Use</h2>
                    <p className="text-gray-400 mt-2">Leveraging the best tools for modern digital solutions.</p>
                </motion.div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 text-center">
                    {technologies.map((tech, index) => {
                        const Icon = TechIcons[tech.icon];
                        return (
                            <motion.div
                                key={index}
                                className="bg-slate-900 py-6 px-4 rounded-lg flex flex-col items-center justify-center 
                                           transition-all duration-300 hover:bg-slate-700 hover:scale-105 group" // Added group for hover effects
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: true, amount: 0.3 }} // Trigger earlier for smaller cards
                                variants={cardVariants}
                                transition={{ delay: index * 0.08 }} // Staggered delay for each card
                                whileHover={{ scale: 1.07 }} // Scale up on hover
                            >
                                <div className="h-12 w-12 text-gray-300 transition-colors duration-300 group-hover:text-cyan-400">
                                    {Icon && <Icon />}
                                </div>
                                <p className="text-white font-semibold mt-4 transition-colors duration-300 group-hover:text-cyan-200">
                                    {tech.name}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};