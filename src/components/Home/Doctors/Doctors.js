import React, { useEffect, useState } from 'react';
import DoctorsDetails from '../DoctorsDetails/DoctorsDetails';

const Doctors = () => {
    const [doctorData, setDoctorData] = useState([])
    useEffect( () => {
        fetch('https://morning-ravine-21847.herokuapp.com/doctor')
        .then(res => res.json())
        .then(data => {
            // console.log(data[0]);
            setDoctorData(data)
        })
    }, [])
    return (
        <section className="doctors">
            <div className="container">
                <h5 className="text-center  text-primary mb-5">Our Doctors</h5>
                <div className="row">
                    {
                        doctorData.map(doctor => <DoctorsDetails doctor={doctor}></DoctorsDetails>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Doctors;