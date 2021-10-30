import React from 'react';
import { Col, Row } from 'react-bootstrap';

const MyOrder = (props) => {
    const id = props.item._id;
    const { img, name } = props?.item?.order;
    console.log(props.item);

    const deleteHandle = id => {
        const url = `http://localhost:5000/userOrders/${id}`;
        fetch(url, {
            method: "DELETE"
        })
            .then(res => res.json())
    }
    return (
        <Row className='my-2 pb-2 border-bottom border-2 mx-2'>
            <Col lg={3} sm={4} xs={4} className='column-style'>
                <img src={img} alt="" width='80' height='80' style={{ borderRadius: "10px" }} />

            </Col>
            <Col lg={7} sm={4} xs={4} className='column-style'>
                <h4 className='text-center mt-3'>{name}</h4>
            </Col>
            <Col lg={2} sm={4} xs={4} className='column-style mt-3'>
                <button className='btn btn-danger' onClick={() => deleteHandle(id)}>Remove</button>
            </Col>
        </Row>
    );
};

export default MyOrder;