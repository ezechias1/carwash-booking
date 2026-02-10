import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ChevronDown } from 'lucide-react';
import heroBg from '../assets/hero-bg.webp'; // We will ensure this file exists

const Hero = () => {
    return (
        <section id="home" className="relative h-screen w-full overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full">
                <img
                    src={heroBg}
                    alt="Luxury Car Detail"
                    className="w-full h-full object-cover object-center"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-brand-black"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center items-start pt-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                        Premium Care For <br />
                        <span className="text-brand-red">Your Machine.</span>
                    </h1>
                    <p className="text-gray-300 text-lg md:text-xl max-w-lg mb-10 font-light">
                        E'sServices brings professional car wash and detailing excellence directly to you, or visit our premium facility.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href="#booking"
                            className="bg-brand-red text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-red-700 transition-all transform hover:scale-105 shadow-lg shadow-red-900/30 flex items-center justify-center gap-2"
                        >
                            <Calendar />
                            Book Appointment
                        </a>
                        <a
                            href="#pricing"
                            className="bg-transparent border border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all flex items-center justify-center"
                        >
                            View Services
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ duration: 1.5, delay: 1, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/50"
            >
                <ChevronDown size={32} />
            </motion.div>
        </section>
    );
};

export default Hero;
