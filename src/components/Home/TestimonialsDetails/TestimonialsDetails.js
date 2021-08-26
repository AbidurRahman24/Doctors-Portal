import React from 'react';

const TestimonialsDetails = ({ testimonial }) => {
    return (
        <div className='col-md-4 shadow-sm' >
            <p>{testimonial.details}</p>
            <div className='d-flex align-items-center '>
                <img style={{ height: '50px' }} src={testimonial.img} alt="" />
                <div className='m-3'>
                    <h6>{testimonial.name}</h6>
                    <small>{testimonial.address}</small>
                </div>
            </div>
        </div>
    );
};

export default TestimonialsDetails;