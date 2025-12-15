import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import AuthContext from '../Contexts/AuthContext';
import Loading from '../Components/Loading';
import { useEffect } from 'react';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import { FaUser, FaUserCog, FaUserEdit } from 'react-icons/fa';
import { MdOutlineBlock, MdOutlineGppGood } from 'react-icons/md';
import { TiWarningOutline } from 'react-icons/ti';
import Swal from 'sweetalert2';

const ManageUsers = () => {

    const { user: loggedInUser } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState([]);


    const fetchUsers = () => {
        axiosSecure.get(`users`)
            .then(response => {
                setUsers(response.data);
                setLoading(false);
            })
    }
    const handleSetRole = (email, role) => {
        axiosSecure.patch(`/users/update-role?email=${email}&role=${role}`)
            .then(res => {
                Swal.fire({
                    title: "Changed!!",
                    text: `User Role Changed Successfully.`,
                    icon: "success"
                });
                res.data.modifiedCount && fetchUsers();
            })
            .catch(err => console.log(err))
        }
        const handleMarkFraud = (email, status) => {
            axiosSecure.patch(`/users/update-status?email=${email}&status=${status}`)
            .then(res => {
                Swal.fire({
                    title: "Changed!!",
                    text: `User Status Changed Successfully.`,
                    icon: "success"
                });
                res.data.modifiedCount && fetchUsers();
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        fetchUsers();
    }, [loggedInUser]); // This is not an error, but a warning

    return (
        <div className='max-w-[1200px] min-h-[65vh] mx-auto pt-[50px]'>
            <h1 className="mb-3 ml-2 lg:ml-0 flex items-center gap-3 text-2xl lg:text-4xl font-semibold text-[#0A2F23]">
                <span className="w-3 h-10 bg-[#0A2F23] rounded-full"></span>
                <span className="px-8 py-2 bg-[#D9C296e5] border-4 border-[#0A2F23] rounded-full shadow flex flex-col">
                    <span className='text-xl'>All Users</span>
                </span>
            </h1>
            <title>Ticket Kinen | All Users</title>
            <div className='mb-[50px] mx-2 lg:mx-0 w-auto p-3 lg:p-5 bg-[#0A2F23] border-2 border-[#D9C296c0] rounded-2xl shadow-2xl shadow-[#0A2F2390] text-[#D9C296]'>
                {
                    loading ? (
                        <Loading viewHeight={40} color={'#D9C296'}></Loading>
                    ) : users.length < 1 ? (
                        <div className='min-h-[40vh] flex items-center justify-center'>
                            <h1 className='text-2xl text-[#D9C296]'>Nothing to show, No ticket has been added.</h1>
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="table">
                                {/* head */}
                                <thead className='text-[#D9C296]'>
                                    <tr className=''>
                                        <th></th>
                                        <th>Photo</th>
                                        <th>Role</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Admin Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* row 1 */}
                                    {
                                        users.map(user => (
                                            <tr key={user?._id} className=''>
                                                <td>
                                                    <div className="font-bold w-full">
                                                        {
                                                            user?.status === 'normal' ? (
                                                                <span><MdOutlineGppGood className='text-[22px] text-green-500' /></span>
                                                            ) : (
                                                                <span><TiWarningOutline className='text-[22px] text-red-500' /></span>
                                                            )
                                                        }
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="flex items-center gap-3">

                                                        <div className="avatar">
                                                            <div className="mask mask-squircle h-12 w-12">
                                                                <img
                                                                    src={user?.photoURL}
                                                                    alt="Avatar Tailwind CSS Component" />
                                                            </div>
                                                        </div>

                                                    </div>
                                                </td>
                                                <td>
                                                    <h3 className="opacity-85">
                                                        {
                                                            user?.role === import.meta.env.VITE_ADMIN_ROLE ? (
                                                                <span className='flex items-center gap-1 font-light text-[14px]'><FaUserCog className='text-[20px] text-green-400' /> Admin</span>
                                                            ) : user?.role === import.meta.env.VITE_VENDOR_ROLE ? (
                                                                <span className='flex items-center gap-1 font-light text-[14px]'><FaUserEdit className='text-[20px] text-yellow-500' /> Vendor</span>
                                                            ) : (
                                                                <span className='flex items-center gap-1 font-light text-[14px]'><FaUser className='text-[18px]' /> User</span>
                                                            )
                                                        }
                                                    </h3>
                                                </td>
                                                <td className='w-[400px'>
                                                    <div>
                                                        <div className="font-bold">{user?.name}</div>
                                                    </div>
                                                </td>
                                                <td><p className='flex gap-1'>{user?.email}</p></td>
                                                <th className='flex justify-end gap-2.5'>
                                                    {
                                                        user?.role === import.meta.env.VITE_ADMIN_ROLE ? (
                                                            user.email === loggedInUser?.email ? (
                                                                <div className='w-full h-12 flex justify-between items-center gap-2'>
                                                                    <h2 className='w-full text-center'>This Account</h2>
                                                                </div>
                                                            ) : (
                                                                <div className='w-full h-12 flex justify-between items-center gap-2'>
                                                                    <button type='button' onClick={() => handleSetRole(user?.email, import.meta.env.VITE_VENDOR_ROLE)} className="w-full px-4 pt-1.5 pb-1.75 rounded-full bg-[#F7F3E9] font-light text-[#0A2F23] cursor-pointer">Make Vendor</button>
                                                                    <button type='button' onClick={() => handleSetRole(user?.email, 'user')} className="w-full px-4 pt-1.5 pb-1.75 rounded-full bg-[#F7F3E9] font-light text-[#ff0000] cursor-pointer">Make User</button>
                                                                </div>
                                                            )
                                                        ) : user?.role === import.meta.env.VITE_VENDOR_ROLE ? (
                                                            <div className='w-full h-12 flex justify-between items-center gap-2'>
                                                                {
                                                                    user?.status === 'fraud' ? (
                                                                        <button type='button' onClick={() => handleMarkFraud(user?.email, 'normal')} className="w-full px-4 pt-1.5 pb-1.75 rounded-full bg-[#F7F3E9] font-light text-[#095000] cursor-pointer">Unmark as Fraud</button>
                                                                    ) : (
                                                                        <>
                                                                            <button type='button' onClick={() => handleSetRole(user?.email, import.meta.env.VITE_ADMIN_ROLE)} className="px-4 w-full pt-1.5 pb-1.75 rounded-full bg-[#F7F3E9] font-light text-[#0A2F23] cursor-pointer">Make Admin</button>
                                                                            <button type='button' onClick={() => handleMarkFraud(user?.email, 'fraud')} className="w-full px-4 pt-1.5 pb-1.75 rounded-full bg-[#F7F3E9] font-light text-[#ff0000] cursor-pointer">Mark as Fraud</button>
                                                                        </>
                                                                    )
                                                                }
                                                            </div>
                                                        ) : (
                                                            <div className='w-full h-12 flex justify-between items-center gap-2'>
                                                                <button type='button' onClick={() => handleSetRole(user?.email, import.meta.env.VITE_ADMIN_ROLE)} className="px-4 w-full pt-1.5 pb-1.75 rounded-full bg-[#F7F3E9] font-light text-[#0A2F23] cursor-pointer">Make Admin</button>
                                                                <button type='button' onClick={() => handleSetRole(user?.email, import.meta.env.VITE_VENDOR_ROLE)} className="px-4 w-full pt-1.5 pb-1.75 rounded-full bg-[#F7F3E9] font-light text-[#0A2F23] cursor-pointer">Make Vendor</button>
                                                            </div>
                                                        )
                                                    }
                                                </th>
                                            </tr>
                                        ))
                                    }

                                </tbody>
                            </table>
                        </div>
                    )
                }

            </div>
        </div>
    );
};

export default ManageUsers;