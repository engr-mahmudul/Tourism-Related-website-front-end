import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import './Booking.css'

const Booking = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [service, setService] = useState({});
    const { bookingId } = useParams();
    const { user } = useAuth();
    useEffect(() => {
        fetch(`https://enigmatic-ridge-45134.herokuapp.com/services/${bookingId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    const onSubmit = data => {
        data.order = service;
        data.status = "pending"
        console.log(data);
        fetch('https://enigmatic-ridge-45134.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Bookked Successfully');

                    reset();
                }
            })
    };

    return (
        <Container >
            {/* <p>{bookingId}</p> */}
            <Row className='details-page-style'>
                <Col lg={6} sm={12} xs={12} className='details'>
                    <img src={service.img} alt="" />
                </Col>
                <Col lg={6} sm={12} xs={12} className='details' >
                    <div >
                        <h3> <span style={{ fontWeight: '800' }}>{service.name}</span></h3>
                        <p style={{ padding: '20px 40px', textAlign: 'justify' }}> {service.description}</p>
                        <h5>We are available: {service.seasion}</h5>


                    </div>
                </Col>
                <Col lg={12} sm={12} xs={12} className='my-4 border border-3'>
                    <h3 style={{ fontWeight: "800", padding: '10px', textAlign: "center" }}>Provide Your Info For Shipping</h3>
                </Col>
                <Col lg={12} sm={12} xs={12} className='shipping-form-container'>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>

                            <input defaultValue={user.displayName} {...register("name")} />

                            <input defaultValue={user.email} {...register("email", { required: true })} />
                            {errors.email && <span className="error">This field is required</span>}
                            <input placeholder="Address" defaultValue="" {...register("address")} />
                            <input placeholder="City" defaultValue="" {...register("city")} />
                            <input placeholder="phone number" defaultValue="" {...register("phone")} />

                            <input type="submit" style={{ backgroundColor: 'green', color: 'white' }} />
                        </form>
                    </div>
                </Col>

                <div className='details'>
                    <Link to='/'><button className='btn px-5 mt-3 btn-warning '>Go Back Home ?</button></Link>
                </div>
            </Row>

        </Container>

    );
};

export default Booking;