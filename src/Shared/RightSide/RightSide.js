import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Brand1 from '../../Images/Sajek.png';
import Brand2 from '../../Images/Sreemongol.png';
import Brand3 from '../../Images/sundorbon.png';


const RightSide = () => {
    return (
        <Carousel className='mt-5' variant="dark">
            <Carousel.Item>
                <img
                style={{width:300,marginLeft:"auto",marginRight:"auto"}}
                    className="d-block w-40"
                    src={Brand1}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                style={{width:300,marginLeft:"auto",marginRight:"auto"}}
                    className="d-block w-40"
                    src={Brand2}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                style={{width:300,marginLeft:"auto",marginRight:"auto"}}
                    className="d-block w-40"
                    src={Brand3}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
};

export default RightSide;