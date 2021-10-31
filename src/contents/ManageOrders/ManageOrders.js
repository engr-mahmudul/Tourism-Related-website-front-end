import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import './ManageOrders.css'

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://enigmatic-ridge-45134.herokuapp.com/orders/allUsers')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    return (
        <div className='order-mangement'>
            <h2 className='fw-bolder text-center text-success py-4'> All User's Order Mangement </h2>
            {
                orders.map(item => <Row className='my-2  border-bottom border-2 mx-1 item-container pb-2' key={item._id} >

                    <Col lg={2} sm={12} xs={12} className='item-center'>

                        <img src={item?.order?.img} alt="" width='50' height='50' />

                    </Col>
                    <Col lg={3} sm={12} xs={12}> <h6 className='text-center'>{item?.order?.name}</h6></Col>
                    <Col lg={3} sm={12} xs={12}> <h6 className='text-center'>{item?.name}</h6></Col>
                    <Col lg={2} sm={12} xs={12}>  <p className='text-center'>Pending</p></Col>
                    <Col lg={2} sm={12} xs={12} className='text-center'>
                        <button type="button" className="btn btn-sm btn-outline-success">Confirm</button>
                    </Col>


                </Row>)
            }
        </div >
    );
};

export default ManageOrders;