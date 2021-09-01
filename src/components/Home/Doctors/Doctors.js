import React, { useEffect, useState } from 'react';
import DoctorsDetails from '../DoctorsDetails/DoctorsDetails';
import doctor from '../../../images/Doctor.png'

const Doctors = () => {
    const [doctorData, setDoctorData] = useState([])
    useEffect( () => {
        fetch('http://localhost:5000/doctor')
        .then(res => res.json())
        .then(data => {
            // console.log(data[0]);
            setDoctorData(data[0])
        })
    }, [])
    return (
        <section className="doctors">
            <div className="container">
                <h5 className="text-center  text-primary mb-5">Our Doctors</h5>
                <div className="row">
                    {
                        doctorData.map(doctor =><DoctorsDetails key={doctor._id} doctor={doctor} />)
                    }
                    
                </div>
            </div>
        </section>
    );
};

export default Doctors;