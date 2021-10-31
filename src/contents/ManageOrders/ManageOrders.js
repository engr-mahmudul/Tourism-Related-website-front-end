import React, { useEffect, useState } from 'react';
import { Col, Row, Spinner } from 'react-bootstrap';
import './ManageOrders.css'

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    const [changed, setChanged] = useState(false);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('https://enigmatic-ridge-45134.herokuapp.com/orders/allUsers')
            .then(res => res.json())
            .then(data => {
                setOrders(data);
                setLoading(false);
            })
    }, [changed]);
    const updateStatus = (id) => {
        const url = `https://enigmatic-ridge-45134.herokuapp.com/userOrders/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({})
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert("Order has been Confirmed");
                    setChanged(true);

                }
            })

    }
    const deleteHandle = id => {
        const procced = window.confirm("Are you sure to remove this service?");
        if (procced) {
            const url = `https://enigmatic-ridge-45134.herokuapp.com/userOrders/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('Deleted Successfully');
                        const remaining = orders.filter(order => order._id !== id);
                        setOrders(remaining);
                    }
                })

        }

    }
    if (loading) {
        return <div >
            <Spinner style={{ margin: "100px 50%" }} animation="border" variant="danger" />
        </div>
    }
    return (
        <div className='order-mangement'>
            <h2 className='fw-bolder text-center text-success py-4'> All User's Order Mangement </h2>
            {
                orders.map(item => <Row className='my-2  border-bottom border-2 mx-1 item-container pb-2' key={item._id} >

                    <Col lg={2} sm={12} xs={12} className='item-center'>

                        <img src={item?.order?.img} alt="" width='50' height='50' />

                    </Col>
                    <Col lg={3} sm={12} xs={12}> <h6 className='text-center'>Package: <span className='fw-bolder'>{item?.order?.name}</span></h6></Col>
                    <Col lg={3} sm={12} xs={12}> <h6 className='text-center '>Ordered by: <span style={{ color: '#8C39B3' }}>{item?.name}</span></h6></Col>
                    <Col lg={1} sm={12} xs={12}>  <p className='text-center fw-bolder border border-success p-1'>{item.status}</p></Col>
                    <Col lg={3} sm={12} xs={12} className='text-center'>
                        {
                            item?.status == 'pending' &&
                            <button type="button" className="btn btn-sm btn-success mx-1"
                                onClick={() => updateStatus(item._id)}
                            >Confirm</button>

                        }
                        <button type="button" className="btn btn-sm btn-danger mx-1"
                            onClick={() => deleteHandle(item._id)}
                        >Remove</button>

                    </Col>


                </Row>)
            }
        </div >
    );
};

export default ManageOrders;