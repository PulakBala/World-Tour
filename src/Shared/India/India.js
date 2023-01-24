import React from 'react';
import { useLoaderData } from 'react-router-dom';
import IndiaSummery from '../../OthersPage/IndiaSummery/IndiaSummery';



const India = () => {
    const india = useLoaderData();

    return (
        <div className='pb-4'>
            <h2 className='fs-1 mt-4'>Let us plan you a <br/>
                perfect <span className='text-danger'>India Holiday</span></h2>

            <div className="d-flex gap-5">
                {
                    india.slice(0, 3).map(ind => <IndiaSummery
                        key={ind.id}
                        ind={ind}
                    ></IndiaSummery>)
                }
            </div>

            <div className="d-flex gap-5">
                {
                    india.slice(3, 6).map(ind => <IndiaSummery
                        key={ind.id}
                        ind={ind}
                    ></IndiaSummery>)
                }
            </div>

            <div className="d-flex gap-5">
                {
                    india.slice(6, 9).map(ind => <IndiaSummery
                        key={ind.id}
                        ind={ind}
                    ></IndiaSummery>)
                }
            </div>


        </div>
    );
};

export default India;