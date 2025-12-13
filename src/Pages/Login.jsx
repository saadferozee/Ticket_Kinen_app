import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import AuthContext from '../Contexts/AuthContext';
import Swal from 'sweetalert2';

import { FcGoogle } from "react-icons/fc";
import { useState } from 'react';

const Login = () => {

    const { setUser, logIn, loginWithGoogle } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogIn = e => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        logIn(email, password)
            .then(credential => {
                setUser(credential.user);
                Swal.fire({
                    title: "You are Logged In.",
                    text: "Now you can surf this website freely, anything sell or buy, any pet you adopt or list for adopt.",
                    icon: "success"
                });
                navigate(location.state ? location.state : '/');
            })
            .catch(error => {
                console.log(error);
                Swal.fire({
                    title: "Something went wrong!!",
                    text: `${error.message === 'Firebase: Error (auth/invalid-credential).' ? 'Invalid Password or User Email' : error.message}`,
                    icon: "error"
                });
            })
    }
    const handleGoogleLogin = () => {
        loginWithGoogle()
            .then(credential => {
                setUser(credential.user);
                Swal.fire({
                    title: "You are Logged In.",
                    text: "Now you can surf this website freely, anything sell or buy, any pet you adopt or list for adopt.",
                    icon: "success"
                });
                navigate(location.state ? location.state : '/');
            })
            .catch(error => {
                console.log(error);
                Swal.fire({
                    title: "Something went wrong!!",
                    text: `${error.message === 'Firebase: Error (auth/invalid-credential).' ? 'Invalid Password or User Email' : error.message}`,
                    icon: "error"
                });
            });
    }

    return (
        <div>
            <title>Ticket Kinen | Login</title>
            <div className='w-full py-[200px]'>
                <div className='max-w-[500px] mx-auto'>
                    <form onSubmit={handleLogIn} className='w-full px-2'>
                        <fieldset className="fieldset w-full bg-[#0A2F23] border-2 border-[#d9c296f0] shadow-2xl shadow-[#00000070] rounded-3xl p-6 sm:p-10">
                            <h2 className='pl-2 text-2xl text-[#D9C296]'>Login</h2>

                            {/* <label className="label">Email</label> */}
                            <input
                                type="email"
                                name='email'
                                onChange={e => setEmail(e.target.value)}
                                className="input px-6 w-full rounded-full border border-[#D9C296]"
                                placeholder="Email"
                            />

                            {/* <label className="label">Password</label> */}
                            <input type="password" name='password' className="input px-6 w-full rounded-full border border-[#D9C296]" placeholder="Password" />

                            <p className='pl-2 text-xs text-[#D9C296]'>
                                    <span>Forget Password ? click on </span>
                                    <Link className='link text-shadow-lg text-shadow-[#00000020]' to={`/forget-pass/${email ? email : 'example@gmail.com'}`}>Reset Password</Link>
                            </p>

                            <div className='flex flex-col'>
                                <button
                                    type='submit'
                                    className="btn bg-[#D9C296] shadow-[#D9C296] border-transparent rounded-full text-[#0A2F23]"
                                >Login</button>
                                <button
                                    type='button'
                                    onClick={handleGoogleLogin}
                                    className="btn mt-2 bg-[#D9C296] shadow-[#D9C296] border-transparent rounded-full text-[#0A2F23]"
                                ><FcGoogle className='text-xl' /> Login with Google</button>
                            </div>

                            <p className='pl-2 text-xs text-[#D9C296]'>
                                <span>Do not have an account? Please </span>
                                <Link to={'/register'} className='link'>Register</Link>
                            </p>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;