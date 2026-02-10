import React, { useState } from 'react';
import BookingWidget from '../components/BookingWidget';
import ServicesList from '../components/Services'; // Renamed import to avoid conflict with page name

const Services = () => {
    const [locationMode, setLocationMode] = useState('shop');

    return (
        <div className="pt-20">
            <BookingWidget locationMode={locationMode} setLocationMode={setLocationMode} />
            <ServicesList locationMode={locationMode} />
        </div>
    );
};

export default Services;
