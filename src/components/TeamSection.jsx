import React from 'react';
import { motion } from 'framer-motion';
import { teamMembers } from '../data/siteData';

const cardVariants = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: { y: 0, opacity: 1 }
};

export const TeamSection = () => {
    return (
        <section id="team" className="py-20 bg-slate-800">
            <div className="container mx-auto px-6">
                <motion.div 
                    className="text-center mb-12"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-4xl font-bold text-white">Meet Our Core Team</h2>
                    <p className="text-gray-400 mt-2">The architects of your digital success.</p>
                </motion.div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {teamMembers.map((member, index) => (
                        <motion.div 
                            key={index} 
                            className="text-center"
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={cardVariants}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="relative group">
                                <img src={member.image} alt={member.name} className="w-full h-auto rounded-lg shadow-lg mx-auto mb-4 transition-all duration-500 transform group-hover:scale-105" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="absolute bottom-4 left-4 text-left transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                     <h3 className="text-xl font-bold text-white">{member.name}</h3>
                                     <p className="text-cyan-400">{member.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

