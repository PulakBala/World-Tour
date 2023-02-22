import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import { useContext } from 'react';
import { Authcontext } from '../../UserContext/UserContext';
import { GoogleAuthProvider } from 'firebase/auth';
import { Link } from 'react-router-dom';

const Registration = () => {

    const {user, createUser, providerLogin } = useContext(Authcontext);

    const googleProviderLogin = new GoogleAuthProvider();

    const handleGoogleLogin = ()=>{
        providerLogin(googleProviderLogin)
        .then(result => {
            const user = result.user;
            console.log(user)
        })
        .catch(error =>{
            console.log(error)
        })
    }

    const handleSubmit = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log('registered user', user);
                form.reset();
            })
            .catch(error => {
                console.error(error);
            })

    }

    return (
        <div>
            <form onSubmit={handleSubmit} action="">
                <div>
                    <label htmlFor="">Name</label><br />
                    <input name='name' type="text" placeholder='Write your name' required/>
                </div>
                <div>
                    <label htmlFor="">Email</label> <br />
                    <input name='email' type="text" placeholder='Enter your email' required/>
                </div>

                <div>
                    <label htmlFor="">Password</label><br />
                    <input name='password' type="password" placeholder='Enter your email' required/>
                </div>

                <button onClick={handleGoogleLogin} className='btn btn-light border mt-4'><FaGoogle /> google sign-up</button> <br />

                <button className='btn btn-primary mt-4'>


                         Sign Up

                </button>
            </form>
        </div>
    );
};

export default Registration;