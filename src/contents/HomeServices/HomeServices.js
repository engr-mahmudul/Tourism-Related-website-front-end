import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import Service from '../Service/Service';

const HomeServices = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('https://enigmatic-ridge-45134.herokuapp.com/services')
            .then(res => res.json())
            .then(data => {
                setServices(data);
                setLoading(false)
            })
    }, [])
    if (loading) {
        return <div >
            <Spinner style={{ margin: "100px 50%" }} animation="border" variant="danger" />
        </div>
    }
    return (
        <div id='services' className='my-5 mx-3'>
            <h1 className='fw-bolder text-success text-center'>Our Main Services</h1>
            <Row className="mt-5">

                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }

            </Row>

        </div>
    );
};

export default HomeServices;