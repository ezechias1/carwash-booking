import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Quote, Star, MessageSquarePlus } from 'lucide-react';

const Testimonials = () => {
    const [activeTestimonial, setActiveTestimonial] = useState(0);

    const testimonials = [
        {
            id: 1,
            name: "Sarah Jenkins",
            role: "Minibus Owner",
            content: "I've never seen my van look this clean since I bought it. The team at E'sServices is incredibly thorough. Worth every cent.",
            rating: 5
        },
        {
            id: 2,
            name: "Michael Xaba",
            role: "Luxury Sedan",
            content: "The house call service is a game changer. They came to my office and detailed my car while I worked. Professional and convenient.",
            rating: 5
        },
        {
            id: 3,
            name: "David Smith",
            role: "SUV Driver",
            content: "Excellent attention to detail. The executive valet package really brings the interior back to life. Highly recommended.",
            rating: 5
        }
    ];

    return (
        <section className="py-20 bg-neutral-900 border-t border-gray-800">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Client <span className="text-brand-red">Feedback</span>
                    </h2>
                    <p className="text-gray-400">See what our satisfied customers have to say.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
                    {/* Reviews Display */}
                    <div className="bg-brand-black p-8 rounded-2xl border border-gray-800 relative">
                        <Quote className="absolute top-8 right-8 text-gray-800 rotate-180" size={64} />

                        <div className="relative h-64">
                            {testimonials.map((t, index) => (
                                <motion.div
                                    key={t.id}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: activeTestimonial === index ? 1 : 0, display: activeTestimonial === index ? 'block' : 'none' }}
                                    transition={{ duration: 0.5 }}
                                    className="absolute inset-0"
                                >
                                    <div className="flex gap-1 mb-6">
                                        {[...Array(t.rating)].map((_, i) => (
                                            <Star key={i} size={20} className="text-brand-red fill-current" />
                                        ))}
                                    </div>
                                    <p className="text-lg text-gray-300 italic mb-8 leading-relaxed">"{t.content}"</p>
                                    <div>
                                        <h4 className="text-white font-bold text-xl">{t.name}</h4>
                                        <p className="text-gray-500 text-sm">{t.role}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="flex gap-2 mt-4">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveTestimonial(index)}
                                    className={`w-3 h-3 rounded-full transition-all ${activeTestimonial === index ? 'bg-brand-red w-8' : 'bg-gray-700 hover:bg-gray-600'}`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Leave a Comment */}
                    <div className="bg-gradient-to-br from-neutral-900 to-black p-8 rounded-2xl border border-gray-800">
                        <div className="flex items-center gap-3 mb-6">
                            <MessageSquarePlus className="text-brand-red" size={28} />
                            <h3 className="text-2xl font-bold text-white">Leave a Comment</h3>
                        </div>

                        <form className="space-y-4">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full bg-black/50 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red"
                            />
                            <textarea
                                placeholder="Share your experience..."
                                className="w-full bg-black/50 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red h-32 resize-none"
                            ></textarea>
                            <button
                                type="button"
                                className="bg-white text-black font-bold py-3 px-8 rounded-lg hover:bg-gray-200 transition-colors"
                            >
                                Submit Review
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
