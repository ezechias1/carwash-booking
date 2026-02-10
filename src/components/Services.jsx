import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import sedanImg from '../assets/service-sedan.webp';
import suvImg from '../assets/service-suv.webp';
import vanImg from '../assets/service-van.webp';

// Placeholder for Valet image if not yet generated or reused
import valetImg from '../assets/hero-bg.webp'; // Temporary fallback or use hero

const servicesData = [
    {
        id: 'sedan',
        title: 'Hatchback / Sedan',
        image: sedanImg,
        priceShop: 150,
        priceHouse: 250,
        features: ['Full Exterior Wash', 'Wheel Cleaning', 'Vacuum Interior', 'Window Cleaning'],
    },
    {
        id: 'suv',
        title: 'SUV / 4x4',
        image: suvImg,
        priceShop: 200,
        priceHouse: 320,
        features: ['Full Exterior Wash', 'Mud Removal', 'Wheel & Arch Cleaning', 'Vacuum Interior', 'Dash Wipe Down'],
    },
    {
        id: 'van',
        title: 'Minibus / Van',
        image: vanImg,
        priceShop: 300,
        priceHouse: 450,
        features: ['Heavy Duty Wash', 'Interior Vacuum', 'Mat Cleaning', 'Window Cleaning', 'Tyre Polish'],
    },
    {
        id: 'valet',
        title: 'Executive Valet',
        image: valetImg, // Will replace with service-valet.webp when moved
        priceShop: 850,
        priceHouse: 1100,
        features: ['Deep Leather Clean', 'Engine Bay Wash', 'Polymer Wave', 'Odor Elimination', 'Full Interior Shampoo'],
        isPremium: true,
    },
];

const Services = ({ locationMode }) => {
    return (
        <section id="pricing" className="py-24 bg-brand-black">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Our <span className="text-brand-red">Services</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Meticulous detailing for every vehicle type. Prices shown for{' '}
                        <span className="text-white font-semibold">
                            {locationMode === 'shop' ? 'Shop Visit' : 'House Call'}
                        </span>
                        .
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {servicesData.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`bg-neutral-900 rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-2 group ${service.isPremium ? 'border-brand-red/50 shadow-brand-red/10 shadow-lg' : 'border-gray-800 hover:border-gray-700'
                                }`}
                        >
                            {/* Image */}
                            <div className="h-48 overflow-hidden relative">
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all z-10" />
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                {service.isPremium && (
                                    <div className="absolute top-4 right-4 z-20 bg-brand-red text-white text-xs font-bold px-3 py-1 rounded-full">
                                        Premium
                                    </div>
                                )}
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>

                                <div className="flex items-baseline gap-1 mb-6">
                                    <span className="text-sm font-medium text-gray-400">R</span>
                                    <span className="text-3xl font-bold text-brand-red">
                                        {locationMode === 'shop' ? service.priceShop : service.priceHouse}
                                    </span>
                                </div>

                                <ul className="space-y-3 mb-6">
                                    {service.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                                            <CheckCircle2 className="text-brand-red shrink-0" size={16} />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <button className={`w-full py-3 rounded-lg font-semibold transition-colors ${service.isPremium
                                    ? 'bg-brand-red text-white hover:bg-red-700'
                                    : 'bg-gray-800 text-white hover:bg-gray-700'
                                    }`}>
                                    Select
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
