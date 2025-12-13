import React, { useContext, useState } from 'react';
import AuthContext from '../Contexts/AuthContext';

const MyProfile = () => {
    const { user, updateUser, role } = useContext(AuthContext);
    const [formOpen, setFormOpen] = useState(false);

    const handleUpdateProfileForm = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const photoURL = e.target.photoURL.value;
        updateUser(name, photoURL)
            .then(() => {
                setFormOpen(false);
            }).catch(error => {
                console.log(error)
            })
    }

    return (
        <div className='min-h-[65vh]'>
            <title>Ticket Kinen | My Profile</title>
            {
                user ? (
                    <div className='my-[10vh] max-w-[75%] mx-auto h-[45%]'>
                        <h1 className='title w-fit py-1 px-10 mb-2 rounded-full border-2 border-[#D9C296] font-black text-2xl bg-[#0A2F23] text-[#D9C296]'>
                            {role === 'admin' ? 'Admin' : role === 'vendor' ? 'Vendor' : 'User'}
                        </h1>
                        <div className='rounded-2xl border-2 border-[#D9C296] bg-[#0A2F23d0] p-12 shadow-2xl shadow-[#0A2F2380] flex flex-col lg:flex-row justify-around gap-3'>
                            <div className='w-fit mx-auto border-8 border-[#0A2F23] p-3 rounded-full bg-[#596c66] flex items-center'>
                                <img className='w-[300px] h-[300px] mx-auto rounded-full object-cover shadow-xl shadow-[#00000040] border' src={`${user.photoURL}`} alt="Profile Picture" />
                            </div>
                            <div className='w-full lg:w-[55%] flex flex-col justify-center items-center'>
                                {
                                    formOpen ? (
                                        <form className='w-full' onSubmit={handleUpdateProfileForm}>
                                            <fieldset className="fieldset w-full space-y-3">
                                                {/* <h3 className='font-black text-white text-2xl text-center'></h3> */}

                                                {/* <label className="label text-white text-lg">Email</label> */}
                                                <input type="name" name='name' className="input w-full rounded-full p-2 px-5 text-lg" placeholder="Name" required />
                                                <input type="photoURL" name='photoURL' className="input w-full rounded-full p-2 px-5 text-sm" placeholder="Photo URL" required />

                                                <div className='flex justify-between space-x-3'>
                                                    <button
                                                        type='submit'
                                                        className="btn w-[60%] bg-white hover:opacity-75 shadow-none text-[#ff3600] hover:text-gray-600 py-2 px-5 rounded-full text-sm"
                                                    >Update</button>
                                                    <button
                                                        type='button'
                                                        onClick={() => setFormOpen(false)}
                                                        className='btn w-[38%] bg-gray-300 hover:opacity-75 shadow-none text-[#00000090] hover:text-gray-600 py-2 px-5 rounded-full text-sm'
                                                    >Cancel</button>
                                                </div>
                                            </fieldset>
                                        </form>
                                    ) : (
                                        <div className='w-full flex flex-col items-center space-y-3'>
                                            <h1 className='w-full rounded-t-full text-lg text-center text-[#D9C296] font-light'>Name : <span className='font-black font-stretched text-4xl'>{user.displayName}</span></h1>
                                            <h3 className='w-full p-3 px-5 text-sm text-center text-[#D9C296] font-light'>Email : <span className='font-semibold font-mono text-xl'>{user.email}</span></h3>
                                            <button
                                                onClick={() => setFormOpen(true)}
                                                className='border border-[#D9C296] bg-transparent hover:opacity-75 shadow-none text-[#D9C296] hover:text-white mx-6 py-1 px-5 rounded-full text-sm'>Update Profile</button>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className='w-full h-[75vh] flex items-center justify-center'>
                        <h1>You are not logged in.</h1>
                    </div>
                )
            }
        </div >
    )
};

export default MyProfile;