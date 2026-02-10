import React from 'react';
import { Send, MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-brand-black relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-red/5 blur-3xl rounded-full transform translate-x-1/2"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Get In <span className="text-brand-red">Touch</span>
                    </h2>
                    <p className="text-gray-400">Have specific requirements? Let us know.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div className="bg-neutral-900/50 p-8 rounded-2xl border border-gray-800 hover:border-brand-red/50 transition-colors">
                            <h3 className="text-2xl font-bold text-white mb-6">Contact Info</h3>
                            <ul className="space-y-6">
                                <li className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center shrink-0">
                                        <MapPin className="text-brand-red" size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold">Visit Us</h4>
                                        <p className="text-gray-400">20 Nyman Street, Kensington</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center shrink-0">
                                        <Phone className="text-brand-red" size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold">Call Us</h4>
                                        <p className="text-gray-400">+27 12 345 6789</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center shrink-0">
                                        <Mail className="text-brand-red" size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold">Email Us</h4>
                                        <p className="text-gray-400">info@esservices.co.za</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form className="bg-neutral-900 p-8 rounded-2xl border border-gray-800 space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-gray-400 text-sm font-bold mb-2">Name</label>
                                <input
                                    type="text"
                                    className="w-full bg-black/50 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-400 text-sm font-bold mb-2">Email</label>
                                <input
                                    type="email"
                                    className="w-full bg-black/50 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-gray-400 text-sm font-bold mb-2">Message</label>
                            <textarea
                                className="w-full bg-black/50 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all h-32 resize-none"
                                placeholder="How can we help you?"
                            ></textarea>
                        </div>
                        <button
                            type="button"
                            className="w-full bg-brand-red text-white font-bold py-4 rounded-lg hover:bg-red-700 transition-all flex items-center justify-center gap-2"
                        >
                            <Send size={18} />
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
