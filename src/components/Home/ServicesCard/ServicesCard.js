import React from 'react';

const ServicesCard = ({service}) => {
    return (
            <div className="col-md-4 text-center">
                <img style={{height:'50px'}} src={service.img} alt="" />
                <h5 className="mt-3 mb-3">{service.title}</h5>
                <small>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, aperiam!</small>
            </div>
    );
};

export default ServicesCard;