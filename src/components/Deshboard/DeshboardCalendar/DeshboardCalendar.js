import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


const DeshboardCalendar = () => {
    const [seletedDate, setSeletedDate] = useState(new Date())
    const handleOnChange = (date) =>{
        setSeletedDate(date)
    }
    return (
        <div>
            <Calendar
        onChange={handleOnChange}
        value={new Date()}
      />
        </div>
    );
};

export default DeshboardCalendar;