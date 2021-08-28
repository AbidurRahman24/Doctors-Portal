import React, { useState } from 'react';
import chair from '../../../images/chair.png'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const AppoinmentHeader = ({handleOnChange}) => {
    
    return (
        <div>
             <main style={{height:'600px'}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
            <h1 style={{color: '#3A4256'}}>Appoinment</h1>
            <Calendar
        onChange={handleOnChange}
        value={new Date()}
      />
            </div>
            <div className="col-md-6">
                <img src={chair} className='img-fluid' alt="" />
            </div>
        </main>
        </div>
    );
};

export default AppoinmentHeader;