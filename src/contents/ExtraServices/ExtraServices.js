import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import ExtraService from '../ExtraService/ExtraService';

const ExtraServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://enigmatic-ridge-45134.herokuapp.com/extraServices')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='mx-3'>
            <h1 className='fw-bolder text-success text-center pb-4'>Our Extra Services</h1>
            <Row>
                {
                    services.map(item => <ExtraService key={item._id} item={item}></ExtraService>)
                }
            </Row>
        </div>
    );
};

export default ExtraServices;