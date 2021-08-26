import React from 'react';
import doctor1 from '../../../images/Ellipse 1.png'
import doctor2 from '../../../images/Ellipse 2.png'
import doctor3 from '../../../images/Ellipse 3.png'
import TestimonialsDetails from '../TestimonialsDetails/TestimonialsDetails';

const testInfo = [
    {
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, velit reprehenderit. Molestias ipsa quae soluta, hic quo quisquam eius aut exercitationem praesentium maiores illum quis assumenda ratione voluptate ducimus sunt',
        img: doctor1,
        name: 'Winson Herry',
        address: 'california'
    },
    {
        details: 'Lorem ipsum dolor sit amet elit. Aliquam vitae quas molestiae dolores repudiandae ad unde neque veritatis, magnam quidem architecto sequi repellendus voluptates temporibus accusantium, incidunt distinctio. Ut, laboriosam',
        img: doctor2,
        name: 'Robinson',
        address: 'california'
    },
    {
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa illo deserunt, corporis, repudiandae saepe, error fugit in molestiae dolorum blanditiis officia magnam recusandae temporibus ullam at repellendus. Alias, nobis quos',
        img: doctor3,
        name: 'Devid Walton',
        address: 'california'
    },
]

const Testimonial = () => {
    return (
        <section className="testimonial-container my-5 py-5">
            <div className="text-center">
                <h5 style={{ color: '#1CC7C1' }}>TESTIMONIAL</h5>
                <h2>What's Our Patients Says</h2>
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75 row mt-5 pt-5">
                    {
                        testInfo.map(testimonial => <TestimonialsDetails testimonial={testimonial} key={testimonial.name}></TestimonialsDetails>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonial;