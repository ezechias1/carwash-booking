import React from 'react';
import { MapPin, Instagram, Mail, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-neutral-950 border-t border-gray-900 text-white pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Info */}
                    <div>
                        <h3 className="text-3xl font-bold mb-6 tracking-tight">
                            E's<span className="text-brand-red">Services</span>
                        </h3>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Experience the pinnacle of automotive care. Whether at our premium facility or your doorstep, we deliver perfection in every detail.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-brand-red transition-all duration-300 group">
                                <Instagram size={20} className="text-gray-400 group-hover:text-white transition-colors" />
                            </a>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white">Our Services</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li><a href="#" className="hover:text-brand-red transition-colors">Hatchback / Sedan Detailing</a></li>
                            <li><a href="#" className="hover:text-brand-red transition-colors">SUV / 4x4 Deep Clean</a></li>
                            <li><a href="#" className="hover:text-brand-red transition-colors">Minibus / Van Wash</a></li>
                            <li><a href="#" className="hover:text-brand-red transition-colors">Executive Valet</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white">Contact Us</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li className="flex items-start gap-3 group">
                                <MapPin className="text-brand-red shrink-0 mt-1 group-hover:text-white transition-colors" size={18} />
                                <span>20 Nyman Street,<br />Kensington, South Africa</span>
                            </li>
                            <li className="flex items-center gap-3 group">
                                <Phone className="text-brand-red shrink-0 group-hover:text-white transition-colors" size={18} />
                                <span>+27 12 345 6789</span>
                            </li>
                            <li className="flex items-center gap-3 group">
                                <Mail className="text-brand-red shrink-0 group-hover:text-white transition-colors" size={18} />
                                <span>info@esservices.co.za</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white">Stay Updated</h4>
                        <div className="flex flex-col gap-4">
                            <p className="text-gray-400 text-sm">Subscribe to receive exclusive offers and maintenance tips.</p>
                            <form className="flex flex-col gap-2">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="bg-gray-900 border border-gray-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all placeholder:text-gray-600"
                                />
                                <button className="bg-brand-red text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} E'sServices. All rights reserved.</p>
                    <div className="flex space-x-6">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-colors">Sitemap</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
