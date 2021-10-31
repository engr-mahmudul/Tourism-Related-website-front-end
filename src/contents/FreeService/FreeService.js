import React from 'react';
import { Container, Row } from 'react-bootstrap';
import background from '../../images/freeService/treatment.jpg';
import './FreeService.css'

const FreeService = () => {
    return (
        <div>
            <h1 className='text-center text-success fw-bolder text-center my-5'>Free Service</h1>

            <Row className='mt-3 mx-2' style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '80vh', }}>
                <div className='free-service'>

                    <h1 className=''>During these Tour Packages all the Medical Services are totally <span className=''>Free</span></h1>


                </div>
            </Row>
        </div>
    );
};

export default FreeService;