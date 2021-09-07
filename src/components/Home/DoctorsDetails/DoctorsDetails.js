import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
const DoctorsDetails = ({doctor}) => {
    console.log(doctor);
    return (
        <div className="col-md-4 text-center">
            <img className="img-fluid mb-3" src={`data:image/png;base64,${doctor.image.img}`} alt=""/>
            <h4>Dr. Coudi</h4>
            <p> <FontAwesomeIcon className="text-primary" icon={faPhoneAlt}/> +258 5685 544</p>
        </div>
    );
};

export default DoctorsDetails;