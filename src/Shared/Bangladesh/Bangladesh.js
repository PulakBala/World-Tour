import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BangladeshSummery from '../../OthersPage/BangladeshSummery/BangladeshSummery';

const Bangladesh = () => {
    const bangladesh = useLoaderData();
    return (
        <div className='mb-4'>
            <h2 className='fs-1 mt-4'>Let us plan you a <br/>
                perfect <span className='text-danger'>Bangladesh Holiday</span></h2>
            <div className='d-flex gap-5'>
                {
                    bangladesh.slice(0, 3).map(ban => <BangladeshSummery
                        key={ban.id}
                        ban={ban}
                    ></BangladeshSummery>)
                }
            </div>

            <div className='d-flex gap-5'>
                {
                    bangladesh.slice(3, 6).map(ban => <BangladeshSummery
                        key={ban.id}
                        ban={ban}
                    ></BangladeshSummery>)
                }
            </div>

            <div className='d-flex gap-5'>
                {
                    bangladesh.slice(6, 9).map(ban => <BangladeshSummery
                        key={ban.id}
                        ban={ban}
                    ></BangladeshSummery>)
                }
            </div>
        </div>
    );
};

export default Bangladesh;