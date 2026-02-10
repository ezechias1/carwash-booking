import React from 'react';
import { motion } from 'framer-motion';
import { Clock, ShieldCheck, Award, Users } from 'lucide-react';
import aboutImg from '../assets/about-hero.webp';

const About = () => {
    return (
        <section id="about" className="py-20 bg-neutral-950 border-t border-gray-900">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-16 mb-20">
                    <div className="md:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-800"
                        >
                            <div className="absolute inset-0 bg-brand-red/10 z-10 mix-blend-overlay"></div>
                            <img src={aboutImg} alt="Detailing Specialist" className="w-full h-auto object-cover" />
                        </motion.div>
                    </div>

                    <div className="md:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                More Than Just A <br /> <span className="text-brand-red">Car Wash.</span>
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                Founded on a passion for automotive excellence, E'sServices has grown from a humble mobile unit into Kensington's premier detailing destination. We understand that your vehicle is more than just a mode of transport; it's an investment and a statement.
                            </p>
                            <p className="text-gray-400 text-lg leading-relaxed mb-8">
                                **What We Do:** We specialize in high-end detailing, paint correction, and ceramic coating. Whether you visit our state-of-the-art shop or book our convenient house call service, our certified technicians use only premium, eco-friendly products to restore and protect your vehicle's finish. From daily drivers to exotic supercars, we treat every machine with the same level of meticulous care.
                            </p>

                            <div className="grid grid-cols-2 gap-6 mb-8">
                                <div className="flex items-center gap-3">
                                    <ShieldCheck className="text-brand-red" size={24} />
                                    <span className="text-white font-medium">Fully Insured</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Award className="text-brand-red" size={24} />
                                    <span className="text-white font-medium">Certified Pros</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Users className="text-brand-red" size={24} />
                                    <span className="text-white font-medium">Customer Focus</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Clock className="text-brand-red" size={24} />
                                    <span className="text-white font-medium">On Time</span>
                                </div>
                            </div>

                            <div className="bg-neutral-900 border border-gray-800 p-6 rounded-xl flex items-start gap-4">
                                <Clock className="text-brand-red shrink-0 mt-1" size={24} />
                                <div>
                                    <h4 className="text-white font-bold text-lg mb-2">Operating Hours</h4>
                                    <ul className="text-gray-400 space-y-1">
                                        <li className="flex justify-between w-48">
                                            <span>Monday - Saturday</span>
                                            <span className="text-white">08:00 – 17:00</span>
                                        </li>
                                        <li className="flex justify-between w-48">
                                            <span>Sundays</span>
                                            <span className="text-brand-red">Closed</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
