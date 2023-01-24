import React from 'react';
import { HiArrowRight } from "react-icons/hi2";
import { Link } from 'react-router-dom';

const LeftSide = () => {
    return (
        <div className="h-100 d-flex flex-column aligns-items-center justify-content-center text-white">

            <h1> <span className='text-primary'>Let's</span> pln your next adventure!</h1>
            <h2><small>Discover amazing destinations</small></h2>
            <div>
                <button type="button" class="btn btn-dark mt-2"><Link className='text-white' style={{textDecoration:'none'}}>BOOKING</Link> <HiArrowRight/> </button>
            </div>
        </div>
    );
};

export default LeftSide;