import React, { useContext, useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { UserContext } from '../../../App';
import AppointmentByDate from '../AppointmentByDate/AppointmentByDate';
import Sitebar from '../Sitebar/Sitebar';

const Deshboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [seletedDate, setSeletedDate] = useState(new Date())
    const [appointments, setAppointments] = useState([]);

    const handleOnChange = (date) => {
        setSeletedDate(date)
    }

    useEffect(() => {
        fetch('http://localhost:5000/appointmentsByDate', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ date: seletedDate, email: loggedInUser.email})
        })
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [seletedDate])
    return (
        <div>
            <div className="container-fluet row">
                <div className="col-md-2">
                    <Sitebar></Sitebar>
                </div>
                <div className="col-md-5">
                    <Calendar
                        onChange={handleOnChange}
                        value={new Date()}
                    />
                </div>
                <div className="col-md-5">
                    <AppointmentByDate appointments={appointments}></AppointmentByDate>
                </div>
            </div>
        </div>
    );
};

export default Deshboard;