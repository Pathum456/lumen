// Centralized data for easy management.
// Replace placeholders with your actual content.
import kaleeshaImg from '../assets/images/team/kaleesha.png';
import himethImg from '../assets/images/team/himeth.png';
export const navLinks = [
    { title: 'Services', href: '#services' },
    { title: 'About', href: '#about' },
    { title: 'Team', href: '#team' },
    { title: 'Contact', href: '#contact' },
];

export const services = [
    { title: 'Software Development', description: 'Custom software solutions tailored to your business needs, enhancing efficiency and growth.', icon: 'Code' },
    { title: 'POS Systems', description: 'Modern, reliable Point of Sale systems for retail and hospitality to streamline your operations.', icon: 'Pos' },
    { title: 'Mobile Applications', description: 'Engaging and intuitive iOS and Android applications to connect with your users on the go.', icon: 'Mobile' },
    { title: 'Web Applications', description: 'Powerful, scalable web applications that deliver complex functionality with a simple user experience.', icon: 'Web' },
    { title: 'Digital Marketing', description: 'Data-driven marketing strategies to boost your online presence, from SEO to social media.', icon: 'Marketing' },
];

export const teamMembers = [
    { name: 'Pathum Kaleesha', role: 'Co-Founder & Lead Developer',image: kaleeshaImg },
    { name: 'Hiemth Nethmina', role: 'Co-Founder & Project Manager', image: himethImg },
    { name: 'Asha Perera', role: 'UI/UX Designer', image: 'https://placehold.co/400x400/0A192F/E6F1FF?text=AP' },
    { name: 'Sahan Fernando', role: 'Marketing Strategist', image: 'https://placehold.co/400x400/0A192F/E6F1FF?text=SF' },
];

export const testimonials = [
    { quote: 'Lumen Digital transformed our business. Their custom software solution increased our productivity by 50%!', name: 'Ravi Sharma', company: 'CEO, Eco Imports' },
    { quote: 'The mobile app they developed is flawless. It has a fantastic user interface and has received amazing feedback from our customers.', name: 'Fathima Riyaz', company: 'Manager, Cafe Ceylon' },
    { quote: 'Their digital marketing campaign was a game-changer. We saw a 300% increase in online leads within three months.', name: 'David Johnson', company: 'Owner, Galle Tours Co.' },
];

export const socialLinks = [ 
    { name: 'LinkedIn', url: 'https://linkedin.com/in/pathumkaleesha', icon: 'Linkedin' },
    { name: 'GitHub', url: 'https://github.com/hiemthnethmina', icon: 'Github' },
    { name: 'X', url: 'https://x.com/yourprofile', icon: 'Twitter' },
    { name: 'Facebook', url: 'https://facebook.com/yourprofile', icon: 'Facebook' },
];

// This object contains the *components* for each icon
export const SocialIcons = {
    Linkedin: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>
        </svg>
    ),
    Github: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
    ),
    Twitter: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
        </svg>
    ),
    Facebook: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
        </svg>
    ),
};