import React, { useContext, useState } from 'react';
import axios from 'axios';
import AuthContext from '../Contexts/AuthContext';
import { Link, useLocation, useNavigate } from 'react-router';
import { FcGoogle } from 'react-icons/fc';
import Swal from 'sweetalert2';

const Register = () => {

    const { setUser, signUp, loginWithGoogle, userDataSaveToDB, updateUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [passError, setPassError] = useState('');

    const passCheck = pass => {
        const lowercaseRegex = /^(?=.*[a-z]).+$/;
        const uppercaseRegex = /^(?=.*[A-Z]).+$/;
        const min6numRegex = /^.{6,}$/;

        if (pass.length > 3) {
            if (!lowercaseRegex.test(pass)) {
                setPassError('Password should have minimum 1 character in Lowercase.')
                return
            } else if (!uppercaseRegex.test(pass)) {
                setPassError('Password should have minimum 1 character in Uppercase')
                return
            } else if (!min6numRegex.test(pass)) {
                setPassError('Password should be minimum 6 character in length.')
                return
            } else {
                setPassError('');
            }
        } else {
            setPassError('');
        }
    }
    const handleRegister = async e => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const phone = form.phone.value;
        const photoFile = form.photoFile.files[0];
        const email = form.email.value;
        const password = form.password.value;

        if (passError || password.length <= 3) {
            setPassError('Please set a secure password to keep your profile protected.');
            Swal.fire({
                title: "Password is not secure!!",
                text: "Please set a secure password to keep your account protected, and have a tensionless sleep every night.",
                icon: "warning"
            });
            return
        };

        const photoFileUploadRes = await axios.post(
            `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_CLIENT_API_KEY}`,
            { image: photoFile },
            { headers: { 'Content-Type': 'multipart/form-data' } }
        );
        const photoURL = photoFileUploadRes.data.data.display_url

        if (photoFileUploadRes.data.success) {
            signUp(email, password)
                .then(credential => {
                    updateUser(name, photoURL)
                        .then(res => {
                            console.log(res);
                            setUser(credential.user);
                            navigate(location.state ? location.state : '/');
                        })
                        .catch(error => console.log(error));
                    const user = { name, phone, email, password: { loginType: 'email-password', password: password }, photoURL };
                    userDataSaveToDB(user);
                    Swal.fire({
                        title: "User Registration Successful.",
                        text: "Now you can surf this website freely, anything sell or buy, any pet you adopt or list for adopt.",
                        icon: "success"
                    });
                }).catch(error => {
                    console.log(error);
                    Swal.fire({
                        title: "Something went wrong!!",
                        text: `${error.message}`,
                        icon: "error"
                    });
                });
        } else {
            Swal.fire({
                title: "Something went wrong!!",
                text: `Photo Upload Failed, Try Again.`,
                icon: "error"
            });
            return
        };
    };
    const handleGoogleLogin = () => {
        loginWithGoogle()
            .then(credential => {
                const currentUser = credential.user;
                setUser(currentUser);
                const user = {
                    name: currentUser.displayName,
                    phone: currentUser.phoneNumber,
                    email: currentUser.email,
                    password: { loginType: 'Google Login', password: null },
                    photoURL: currentUser.photoURL
                }
                userDataSaveToDB(user);
                Swal.fire({
                    title: "User Registration Successful.",
                    text: "You can surf this website freely, anything you sell or buy, any pet you adopt or list for adopt.",
                    icon: "success"
                });
                navigate(location.state ? location.state : '/');
            }).catch(error => {
                console.log(error);
                Swal.fire({
                    title: "Something went wrong!!",
                    text: `${error.message}`,
                    icon: "error"
                });
            });
    };

    return (
        <div>
            <title>Ticket Kinen | Register</title>
            <div className='w-full py-[200px]'>
                <div className='max-w-[500px] mx-auto'>
                    <form onSubmit={handleRegister} className='w-full px-2'>
                        <fieldset className="fieldset w-full bg-[#0A2F23] border-2 border-[#D9C296] shadow-2xl shadow-[#00000070] rounded-3xl p-6 sm:p-10">
                            <h2 className='pl-2 text-2xl text-[#D9C296]'>Register</h2>

                            {/* <label className="label">Name</label> */}
                            <input type="text" name='name' className="input px-6 w-full rounded-full border border-[#D9C296]" placeholder="Name" />

                            {/* <label className="label">Name</label> */}
                            <input type='tel' name='phone' className="input px-6 w-full rounded-full border border-[#D9C296]" placeholder="Phone Number" />

                            {/* <label className="label">PhotoURL</label> */}
                            <input type="file" name='photoFile' className="file-input file-input-neutral file-input-sm px-6 py-1 w-full rounded-full border border-[#D9C296]" placeholder="PhotoURL" />

                            {/* <label className="label">Email</label> */}
                            <input type="email" name='email' className="input px-6 w-full rounded-full border border-[#D9C296]" placeholder="Email" />

                            {/* <label className="label">Password</label> */}
                            <input
                                type="password"
                                name='password'
                                onChange={(e) => passCheck(e.target.value)}
                                className="input px-6 w-full rounded-full border border-[#D9C296]"
                                placeholder="Password"
                            />

                            {
                                passError && <p className='mt-0 font-light text-[#D9C296] text-[11px] text-center text-shadow-sm text-shadow-[#ff000030]'>{passError}</p>
                            }

                            <div className='flex flex-col'>
                                <button
                                    type='submit'
                                    className="btn mt-2 bg-[#D9C296] shadow-[#D9C296] border-transparent rounded-full text-[#0A2F23]"
                                >Register</button>
                                <button
                                    type='button'
                                    onClick={handleGoogleLogin}
                                    className="btn mt-2 bg-[#D9C296] shadow-[#D9C296] border-transparent rounded-full text-[#0A2F23]"
                                ><FcGoogle className='text-xl' /> Register with Google</button>
                            </div>

                            <p className='pl-2 text-xs text-[#D9C296]'>
                                <span>Already have an account? Please </span>
                                <Link to={'/login'} className='link'>LogIn</Link>
                            </p>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;