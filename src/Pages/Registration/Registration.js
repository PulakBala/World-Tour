import React from 'react';
import { useContext } from 'react';
import { Authcontext } from '../../UserContext/UserContext';

const Registration = () => {

    const {createUser} = useContext(Authcontext);

    const handleSubmit = event=>{
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name,email, password);

        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log('registered user', user);
            form.reset();
        })
        .catch(error =>{
            console.error(error);
        })

    }

    return (
        <div>
           <form onSubmit={handleSubmit} action="">
                <div>
                    <label htmlFor="">Name</label><br/>
                    <input name='name' type="text" placeholder='Write your name'/>
                </div>
                <div>
                    <label htmlFor="">Email</label> <br/>
                    <input name='email' type="text" placeholder='Enter your email' />
                </div>

                <div>
                    <label htmlFor="">Password</label><br/>
                    <input name='password' type="password" placeholder='Enter your email' />
                </div>
                <button className='btn btn-primary mt-4'>Login</button>
            </form>
        </div>
    );
};

export default Registration;