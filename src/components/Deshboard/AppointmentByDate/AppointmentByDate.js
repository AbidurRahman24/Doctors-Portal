import React from 'react';
import AppointmentList from '../AppointmentList/AppointmentList';

const AppointmentByDate = ({appointments}) => {
    return (
        <div>
            <h2 className="text-brand text-center">Appointments</h2>
            {
                appointments.length ?
                 <AppointmentList appointments={appointments} ></AppointmentList>
                :
                <div className="p-5">
                    <h4 className="lead text-center">No Appointments for this Date</h4>
                </div>
            }
        </div>
    );
};

export default AppointmentByDate;