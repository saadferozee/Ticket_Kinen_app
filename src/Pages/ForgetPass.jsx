import React, { useContext } from 'react';
import { Link, useNavigate, useParams } from 'react-router';
import AuthContext from '../Contexts/AuthContext';

const ForgetPass = ({ params }) => {

    const { email } = useParams(params);
    const { resetPassword } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleResetPass = e => {
        e.preventDefault();
        const currentEmail = e.target.email.value;
        resetPassword(currentEmail)
            .then(() => {
                window.open("https://mail.google.com", "_blank");
                navigate('/login');
            })
            .catch(error => console.log(error));
    }

    return (
        <div className='w-full py-[250px]'>
            <div className='max-w-[500px] mx-auto'>
                <form onSubmit={handleResetPass} className='w-full'>
                    <fieldset className="fieldset w-full bg-[#0A2F23] border-2 border-[#d9c296f0] shadow-2xl shadow-[#00000070] rounded-3xl p-6 sm:p-10">
                        <h3 className='pl-2 text-2xl text-[#D9C296]'>Forget Password</h3>

                        {/* <label className="label text-white text-lg">Email</label> */}
                        <input
                            type="email"
                            name='email'
                            className="input w-full rounded-full px-6"
                            placeholder="Email"
                            defaultValue={email} />

                        <button
                            type='submit'
                            className="btn bg-[#D9C296] shadow-[#D9C296] border-transparent rounded-full text-[#0A2F23]"
                        >Send Reset Password Email</button>

                        <div>
                            <p className='pl-2 text-xs text-[#D9C296]'>
                                <span>Do not have an account ? Please </span>
                                <Link className='link text-shadow-lg text-shadow-[#00000020]' to={'/register'}>Register</Link>
                            </p>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default ForgetPass;