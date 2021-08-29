import React from 'react';
import DeshboardCalendar from '../DeshboardCalendar/DeshboardCalendar';
import Sitebar from '../Sitebar/Sitebar';

const Deshboard = () => {
    return (
        <div>
            <div className="container-fluet row">
                <div className="col-md-2">
                    <Sitebar></Sitebar>
                </div>
                <div className="col-md-5">
                    <DeshboardCalendar></DeshboardCalendar>
                </div>
                    <div className="col-md-5">

                    </div>
                </div>
            </div>
    );
};

export default Deshboard;