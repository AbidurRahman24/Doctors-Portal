import React from 'react';
import { faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons'
import CardInfo from '../CardInfo/CardInfo';
const infosData = [
    {
        title: 'Opening Hours',
        description: 'We are open 7 days',
        icon: faClock,
        background: 'primary'
    },
    {
        title: 'Visit Our Location',
        description: 'Brooklyn, NY 10003 USA',
        icon: faMapMarker,
        background: 'dark'
    },
    {
        title: 'Call us now',
        description: '+15697854124',
        icon: faPhone,
        background: 'primary'
    }
]
const BusinessInfo = () => {
    return (
        <section className='d-flex justify-content-center'>
            <div className='row w-75'>
            {
                infosData.map(info => <CardInfo info={info}></CardInfo> )
            }
        </div>
        </section>
    );
};

export default BusinessInfo;