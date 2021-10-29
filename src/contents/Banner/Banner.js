import React from 'react';
import './Banner.css'
import { Carousel } from 'react-bootstrap';
import banner1 from '../../images/banner/1.jpg'
import banner2 from '../../images/banner/2.jpg'
import banner3 from '../../images/banner/3.jpg'

const Banner = () => {
    return (
        <div id='banner'>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100" style={{ height: '80vh', filter: 'brightness(35%)' }}
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h1 className=' google-fonts'>Explore the beautiful world</h1>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100" style={{ height: '80vh', filter: 'brightness(35%)' }}
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1 className=' google-fonts' >Enjoy Your Happy and Safe Tour</h1>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100" style={{ height: '80vh', filter: 'brightness(35%)' }}
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h1 className=' google-fonts' >Exclusive offfers are waiting</h1>

                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        </div>
    );
};

export default Banner;