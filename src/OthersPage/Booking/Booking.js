import React from 'react';
import { Link } from 'react-router-dom';

const Booking = () => {
    return (
        <div>
            <form action="" className='position-absolute top-50 start-50 translate-middle bg-black text-white p-5 rounded-4'>
                <div className='elem-group'>
                    <label className='fs-4' for="name">Origin</label> <br/>
                    <input className='p-2 px-5' type="text" id="name" />
                </div>
                <div className='elem-group'>
                    <label for="name">Destination</label> <br/>
                    <input  className='p-2 px-5' type="text" id="name" />
                </div>


                <div className='d-flex gap-3 '>

                    <div class="elem-group inlined">
                        <label for="checkin-date">Check-in Date</label> <br/>
                        <input className='p-2 px-2' type="date" id="checkin-date" name="checkin" required />
                    </div>
                    <div class="elem-group inlined">
                        <label for="checkout-date">Check-out Date</label> <br/>
                        <input className='p-2 px-3' type="date" id="checkout-date" name="checkout" required/>
                    </div>

                </div>
                <button className='mt-3 p-2 px-5 '><Link to='/signup'>Start Booking</Link></button>
            </form>
        </div>
    );
};

export default Booking;