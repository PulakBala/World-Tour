import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SwitzerlandSummery from '../../OthersPage/SwitzerlandSummery/SwitzerlandSummery';

const Switerland = () => {
    const switzerland = useLoaderData();
    
    return (
        <div>
            <h2 className='fs-1 mt-4'>Let us plan you a <br/>
                perfect <span className='text-danger'> Switzerland Holiday</span></h2>
           <div className='d-flex gap-5'>
           {
               switzerland.slice(0,3).map(sw => <SwitzerlandSummery
                    key={sw.id}
                    sw={sw}
               ></SwitzerlandSummery>)
            }
            
           </div>

           <div className='d-flex gap-5'>
           {
               switzerland.slice(3,6).map(sw => <SwitzerlandSummery
                    key={sw.id}
                    sw={sw}
               ></SwitzerlandSummery>)
            }
            
           </div>

           <div className='d-flex gap-5'>
           {
               switzerland.slice(6,9).map(sw => <SwitzerlandSummery
                    key={sw.id}
                    sw={sw}
               ></SwitzerlandSummery>)
            }
            
           </div>
        </div>
    );
};

export default Switerland;