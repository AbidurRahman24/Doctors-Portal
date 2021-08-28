import React, { useState } from 'react';
import Navbar from '../../Home/Navbar/Navbar';
import Footer from '../../Shared/Footer/Footer';
import AppoinmentHeader from '../AppoinmentHeader/AppoinmentHeader';
import BookApponiment from '../BookAppoinment/BookApponiment';

const Appoinment = () => {
    const [seletedDate, setSeletedDate] = useState(new Date())
    const handleOnChange = (date) =>{
        setSeletedDate(date)
    }
    return (
        <div>
            <Navbar></Navbar>
            <AppoinmentHeader handleOnChange={handleOnChange}></AppoinmentHeader>
            <BookApponiment seletedDate={seletedDate}></BookApponiment>
            <Footer></Footer>
        </div>
    );
};

export default Appoinment;