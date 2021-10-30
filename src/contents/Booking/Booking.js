import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Booking.css'

const Booking = () => {
    const [service, setService] = useState({});
    const { bookingId } = useParams();
    const { user } = useAuth();
    useEffect(() => {
        fetch(`https://enigmatic-ridge-45134.herokuapp.com/services/${bookingId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    return (
        <Container >
            {/* <p>{bookingId}</p> */}
            <Row className='details-page-style'>
                <Col lg={6} sm={12} xs={12} className='details'>
                    <img src={service.img} alt="" />
                </Col>
                <Col lg={6} sm={12} xs={12} className='details' >
                    <div >
                        <h3>Service Name: <span style={{ fontWeight: '800' }}>{service.name}</span></h3>
                        <h5>Description: <span style={{ fontWeight: '800' }}>{service.description}</span> </h5>
                        <h5>We are available: <span style={{ fontWeight: '800' }}>{service.seasion}</span> </h5>
                        <h5>Booking Procedure: <span style={{ fontWeight: '800' }}>{ }</span> </h5>

                    </div>
                </Col>

                <div className='details'>
                    <Link to='/'><button className='btn px-5 mt-3 btn-success '>Go Back Home</button></Link>
                </div>
            </Row>
        </Container>

    );
};

export default Booking;