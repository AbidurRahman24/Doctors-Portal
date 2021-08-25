import React from 'react';
import './CardInfo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const CardInfo = ({info}) => {
    return (
        <div className="col-md-4 text-white info-card">
            <div className={`d-flex justify-content-center ms-3 info-container info-${info.background}`}>
                <div className="ms-3 icon-padding">
                    <FontAwesomeIcon className="info-icon" icon={info.icon}></FontAwesomeIcon>
                </div>
                <div>
                    <h6>{info.title}</h6>
                    <small>{info.description}</small>
                </div>
            </div>
        </div>
    );
};

export default CardInfo;