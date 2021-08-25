import React from 'react';
import doctor from '../../../images/Doctor.png'
import './Appointment.css'

const Appointment = () => {
    return (
        <section className='appointment-container '>
            <div className="container">
            <div className="row mb-5">
                <div className="col-md-5  d-none d-md-block">
                    <img className="img-fluid" src={doctor} alt="" />
                </div>
                <div className="col-md-7 text-white text-index py-5">
                        <h5 className="text-primary text-uppercase ">Appointment</h5>
                        <h1 className="my-4">Make an Appointment <br/> Today</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque magnam ad consequuntur assumenda saepe hic amet nemo ea facere a!</p>
                        <button className="btn btn-primary">Learn More</button>
                    </div>
            </div>
            </div>
        </section>
    );
};

export default Appointment;