import React from 'react';
import FeaturedService from '../FeaturedService/FeaturedService';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Appointment from '../Appointment/Appointment'
import Testimonial from '../Testimonial/Testimonial';
import Blog from '../Blog/Blog';
import Doctors from '../Doctors/Doctors';
const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <FeaturedService></FeaturedService>
            <Appointment></Appointment>
            <Testimonial></Testimonial>
            <Blog></Blog>
            <Doctors></Doctors>
        </div>
    );
};

export default Home;