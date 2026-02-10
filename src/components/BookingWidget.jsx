import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Home, Calendar as CalendarIcon, Clock, Check } from 'lucide-react';

const BookingWidget = ({ locationMode, setLocationMode }) => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    return (
        <section id="booking" className="py-20 bg-neutral-900 border-b border-gray-800">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto bg-brand-black border border-gray-800 rounded-2xl p-8 md:p-12 shadow-2xl">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                            Book Your <span className="text-brand-red">Service</span>
                        </h2>
                        <p className="text-gray-400">Select your preferred location and time.</p>
                    </div>

                    <div className="flex flex-col md:flex-row gap-8">
                        {/* Location Toggle */}
                        <div className="flex-1">
                            <label className="block text-gray-400 text-sm font-bold mb-4">
                                Service Location
                            </label>
                            <div className="grid grid-cols-2 gap-4">
                                <button
                                    onClick={() => setLocationMode('shop')}
                                    className={`flex flex-col items-center justify-center p-6 rounded-xl border-2 transition-all ${locationMode === 'shop'
                                        ? 'border-brand-red bg-brand-red/10 text-white'
                                        : 'border-gray-800 bg-transparent text-gray-500 hover:border-gray-600'
                                        }`}
                                >
                                    <MapPin size={32} className="mb-3" />
                                    <span className="font-semibold">Visit Our Shop</span>
                                    <span className="text-xs mt-1 text-gray-400">Kensington</span>
                                </button>
                                <button
                                    onClick={() => setLocationMode('house')}
                                    className={`flex flex-col items-center justify-center p-6 rounded-xl border-2 transition-all ${locationMode === 'house'
                                        ? 'border-brand-red bg-brand-red/10 text-white'
                                        : 'border-gray-800 bg-transparent text-gray-500 hover:border-gray-600'
                                        }`}
                                >
                                    <Home size={32} className="mb-3" />
                                    <span className="font-semibold">House Call</span>
                                    <span className="text-xs mt-1 text-gray-400">We come to you</span>
                                </button>
                            </div>
                        </div>

                        {/* Date & Time Selection */}
                        <div className="flex-1 space-y-6">
                            <div>
                                <label className="block text-gray-400 text-sm font-bold mb-2">
                                    Date
                                </label>
                                <div className="relative">
                                    <CalendarIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
                                    <input
                                        type="date"
                                        className="w-full bg-neutral-900 border border-gray-800 rounded-lg py-3 pl-12 pr-4 text-white focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red appearance-none" // appearance-none to hide default icon in some browsers, but keeping it simple
                                        onChange={(e) => setDate(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-gray-400 text-sm font-bold uppercase tracking-wider mb-2">
                                    Time
                                </label>
                                <div className="relative">
                                    <Clock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
                                    <select
                                        className="w-full bg-neutral-900 border border-gray-800 rounded-lg py-3 pl-12 pr-4 text-white focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red appearance-none"
                                        onChange={(e) => setTime(e.target.value)}
                                    >
                                        <option value="">Select a time</option>
                                        <option value="08:00">08:00</option>
                                        <option value="09:00">09:00</option>
                                        <option value="10:00">10:00</option>
                                        <option value="11:00">11:00</option>
                                        <option value="12:00">12:00</option>
                                        <option value="13:00">13:00</option>
                                        <option value="14:00">14:00</option>
                                        <option value="15:00">15:00</option>
                                        <option value="16:00">16:00</option>
                                    </select>
                                </div>
                            </div>

                            <button className="w-full bg-brand-red hover:bg-red-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-red-900/20 flex items-center justify-center gap-2">
                                <Check size={20} />
                                Confirm Booking
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookingWidget;
