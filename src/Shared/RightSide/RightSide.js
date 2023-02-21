import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import Brand1 from '../../Images/Sajek.png';
import Brand2 from '../../Images/Sreemongol.png';
import Brand3 from '../../Images/sundorbon.png';


const RightSide = () => {
    return (
        <Carousel className='mt-5' variant="dark">
            <Carousel.Item >
                <Link><img
                    style={{ width: 300, marginLeft: "auto", marginRight: "auto" }}
                    className="d-block w-40"
                    src={Brand1}
                    alt="First slide"
                /></Link>
                <Carousel.Caption>
                    <button><Link to="/india">India</Link></button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{ width: 300, marginLeft: "auto", marginRight: "auto" }}
                    className="d-block w-40"
                    src={Brand2}
                    alt="Second slide"
                />
                <Carousel.Caption>
                   <button><Link to="/switerland">Swezarland</Link></button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{ width: 300, marginLeft: "auto", marginRight: "auto" }}
                    className="d-block w-40"
                    src={Brand3}
                    alt="Third slide"
                />
                <Carousel.Caption>
                   <button><Link to='/bangladesh'>Bangladesh</Link></button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default RightSide;