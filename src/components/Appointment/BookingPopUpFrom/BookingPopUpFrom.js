import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";
import './BookingPopUpFrom.css'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        width: '50%',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');

const BookingPopUpFrom = ({ modalIsOpen, closeModal, appointmentOn,seletedDate }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.service = appointmentOn;
        data.date = seletedDate;
        data.created = new Date();
        
        fetch('https://morning-ravine-21847.herokuapp.com/addAppointment', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(success => {
            closeModal()
        })
    };

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}

                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2 className='text-center' style={{ color: '#1CC7C1' }}>{appointmentOn}</h2>
                <p className='text-center' style={{ color: '#1CC7C1' }}>{seletedDate.toDateString()}</p>

                <form onSubmit={handleSubmit(onSubmit)} className=' m-5'>

                    <div class="form-group">
                        <label >Name</label>
                        <br />
                        <input className='from-control from-container' {...register("name", { required: true })} />
                        {errors.name && <span>This field is required</span>}
                    </div>
                    <br />

                    <div class="form-group ">
                        <label >Email</label>
                        <br />
                        <input className='from-control from-container' {...register("email", { required: true })} />
                        {errors.email && <span>This field is required</span>}
                    </div>
                    <br />

                    <div class="form-group ">
                        <label >Phone</label>
                        <br />
                        <input className='from-control from-container' {...register("phone", { required: true })} />
                        {errors.phone && <span>This field is required</span>}
                    </div>
                    <br />

                    <div className="form-group row">
                        <div className="col-4">

                            <select className="form-control" name="gender" {...register("gender", { required: true })} >
                                <option disabled={true} value="Not set">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Not set">Other</option>
                            </select>
                            {errors.gender && <span className="text-danger">This field is required</span>}

                        </div>
                        <div className="col-4">
                        <input className='from-control from-container' {...register("age", { required: true })} name="age" placeholder="Your age" type="number" />
                        {errors.age && <span>This field is required</span>}
                        </div>
                        <div className="col-4">
                        <input className='from-control from-container' {...register("wight", { required: true })} name="wight" placeholder="Your wight" type="number" />
                        {errors.wight && <span>This field is required</span>}
                        </div>
                    </div>

                    <div className="form-group text-right">
                        <button type="submit" className="btn btn-primary send-button">Send</button>
                    </div>
                </form>
            </Modal>
        </div >
    );
};

export default BookingPopUpFrom;