import React from 'react';
import { Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const { _id, name, description, img, seasion } = props.service;
    // console.log(props.service)
    return (
        <Col lg={4} md={6} sm={12} xs={12} >
            <div className='mx-1 my-2  card-style'>
                <div>
                    <img src={img} alt="" style={{ width: "100%", height: "250px", borderRadius: '10px', border: '1px solid green' }} />
                </div>
                <div>
                    <h4 style={{ textAlign: 'center', fontWeight: '700' }} className='pt-3'>{name}</h4>
                    <div className='p-3'>
                        <p className='description-p'>{description} </p>
                    </div>
                    <h6 style={{ textAlign: 'center', color: 'green' }}>Available : {seasion}</h6>

                </div>
                <div className="button-class">
                    <Link to={`/service/${_id}`}>
                        <Button variant='success' className='px-3 single-button mt-3'>Book {name.toLowerCase()}</Button>
                    </Link>
                </div>
            </div>

        </Col>
    );
};

export default Service;