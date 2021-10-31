import React from 'react';
import { Col } from 'react-bootstrap';

const ExtraService = (props) => {
    const { name, img, procedure } = props.item;
    return (
        <Col lg={3} md={6} sm={12} xs={12} className='my-2' >
            <div className='card-style pb-4 ' style={{ backgroundColor: 'rgb(234, 234, 255)' }}>
                <div>
                    <img src={img} alt="" style={{ width: "100%", height: "250px", borderRadius: '10px', border: '1px solid green' }} />
                </div>
                <div >
                    <h4 style={{ textAlign: 'center', fontWeight: '700' }} className='pt-3'>{name}</h4>

                    <h6 className='mt-3' style={{ textAlign: 'center', color: 'green' }}>Procedure: {procedure}</h6>

                </div>

            </div>


        </Col>
    );
};

export default ExtraService;