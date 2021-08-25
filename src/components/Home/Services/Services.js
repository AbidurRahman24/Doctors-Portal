import React from 'react';
import Fluorida from '../../../images/fluorida.png'
import Cavity from '../../../images/cavidy.png'
import Tooth from '../../../images/tooth.png'
import ServicesCard from '../ServicesCard/ServicesCard';
const Service = [
    {
        title: 'Fluorida Treadment',
        img: Fluorida
    },
    {
        title: 'Cavity Filling',
        img: Cavity
    },
    {
        title: 'Teeth Whitening',
        img: Tooth
    },
]

const Services = () => {
    return (
        <section className="services-container mt-5">
            <div className="text-center">
                <h5 style={{color: '#1CC7C1'}}>OUR SERVICES</h5>
                <h2>Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center">
            <div className="w-75 row mt-5 pt-5">
                {
                    Service.map(service => <ServicesCard service={service} key={service.name}></ServicesCard>)
                }
            </div>
        </div>
        </section>
    );
};

export default Services;