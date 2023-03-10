import { Toast } from 'bootstrap';
import React from 'react';
import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Authcontext } from '../../UserContext/UserContext';

const Login = () => {
    const {signIn} = useContext(Authcontext);
    const navigate = useNavigate();
    const loaction = useLocation();
    const from = loaction.state?.from?.pathname || '/'

    const handleSubmitLogin = event => {
        event.preventDefault();

        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
            if(user.emailVerified){
                navigate(from, {replace:true});
            }else{
                console.log('please verified your email');
            }
        })
        .catch(error =>{
            console.error('error', error);
        })
    }
    return (
        <div>
            <h1>Please Login form!</h1>
            <form onSubmit={handleSubmitLogin} action="">
                <div>
                    <label htmlFor="">Email</label> <br/>
                    <input name="email" type="text" placeholder='Enter your email' />
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

export default Login;