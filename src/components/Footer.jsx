import React from 'react';
// Import both the social links data (now correctly named 'socialLinks') AND the SocialIcons object
import { socialLinks, SocialIcons } from '../data/siteData'; 

export const Footer = () => {
    return (
        <footer className="bg-slate-900 text-gray-400 py-8">
            <div className="container mx-auto px-6 text-center">
                <p>&copy; {new Date().getFullYear()} Lumen Digital. All Rights Reserved.</p>
                
                {/* Social Media Links Section */}
                <div className="flex justify-center space-x-6 my-4">
                    {socialLinks.map((link) => { // Use socialLinks from siteData.js
                        const IconComponent = SocialIcons[link.icon]; // Get the correct icon component from the imported SocialIcons object
                        return (
                            <a
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-cyan-400 transition-colors duration-300"
                                aria-label={link.name}
                            >
                                {IconComponent && <IconComponent />} {/* Render the icon if found */}
                            </a>
                        );
                    })}
                </div>

                <p className="text-sm mt-1">Made with ❤️ in Galle, Sri Lanka</p>
            </div>
        </footer>
    );
};