import React from 'react';
import DoctorsDetails from '../DoctorsDetails/DoctorsDetails';
import doctor from '../../../images/Doctor.png'

const doctorsData = [
    {
        id:1,
        img: doctor,
        name: 'Dr. Caudi',
        phone: '+61 256 258 789'
    },
    {
        id:2,
        img: doctor,
        name: 'Dr. Caudi',
        phone: '+61 256 258 789'
    },
    {   
        id:3,
        img: doctor,
        name: 'Dr. Caudi',
        phone: '+61 256 258 789'
    },
]

const Doctors = () => {
    return (
        <section className="container my-5 py-5">
            <div className="text-center">
                <h5 style={{ color: '#1CC7C1' }}>Our Doctors</h5>
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75 row mt-5 pt-5">
                    {
                        doctorsData.map(doctors => <DoctorsDetails doctors={doctors} key={doctors.id}></DoctorsDetails>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Doctors;