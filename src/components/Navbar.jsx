import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-[999] transition-all duration-300 ${isScrolled ? 'bg-brand-black/95 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <a href="#" className="text-2xl font-bold tracking-tighter text-white">
                    E's<span className="text-brand-red">Services</span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`transition-colors text-sm font-medium ${location.pathname === link.path ? 'text-brand-red' : 'text-gray-300 hover:text-brand-red'
                                } `}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        to="/services"
                        className="bg-brand-red text-white px-6 py-2 rounded-full font-medium text-sm hover:bg-red-700 transition-colors flex items-center gap-2"
                    >
                        <Calendar size={16} />
                        Book Now
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-brand-black border-t border-gray-800 overflow-hidden"
                    >
                        <div className="flex flex-col p-6 space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`text - lg font - medium ${location.pathname === link.path ? 'text-brand-red' : 'text-gray-300 hover:text-brand-red'
                                        } `}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                to="/services"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="bg-brand-red text-center text-white px-6 py-3 rounded-md font-medium hover:bg-red-700 transition-colors"
                            >
                                Book Now
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
