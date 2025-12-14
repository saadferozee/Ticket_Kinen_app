import React from 'react';
import useAxios from '../Hooks/useAxios';
import { useContext } from 'react';
import AuthContext from '../Contexts/AuthContext';
import Swal from 'sweetalert2';
import axios from 'axios';

const AddTicket = () => {

    const axiosInstance = useAxios();
    const { user } = useContext(AuthContext);

    const handleAddTicket = async e => {
        e.preventDefault();

        const form = e.target;
        const title = form.title.value;
        const from = form.from.value;
        const to = form.to.value;
        const category = form.category.value;
        const price = parseInt(form.price.value);
        const availableSits = parseInt(form.availableSits.value);
        const photoFile = form.photoFile.files[0];
        const time = form.time.value;
        const date = form.date.value;
        const breakfast = form.Breakfast.checked;
        const meal = form.Meal.checked;
        const water = form.Water.checked;
        const security = form.Security.checked;

        const photoFileUploadRes = await axios.post(
            `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_CLIENT_API_KEY}`,
            { image: photoFile },
            { headers: { 'Content-Type': 'multipart/form-data' } }
        );
        const photoURL = photoFileUploadRes.data.data.display_url

        if (photoFileUploadRes.data.success) {
            const data = { title, category, from, to, price, availableSits, photoURL, time, date, breakfast, meal, water, security, vendorName: user?.displayName, vendorEmail: user?.email, onAdd: false, status: 'pending' }

            axiosInstance.post('/tickets', data)
                .then(response => {
                    if (response.status == 200) {
                        form.reset();
                        // sweet alert
                        Swal.fire({
                            title: "Added!!",
                            text: `Ticket Added Successfully.`,
                            icon: "success"
                        });
                    };
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

    return (
        <div>
            <title>Ticket Kinen | Add Product</title>
            <div className='w-full py-[10%]'>
                <div className='max-w-[700px] mx-auto'>
                    <form onSubmit={handleAddTicket} className='w-full px-2'>
                        <fieldset className="fieldset w-full bg-[#0A2F23] border-2 border-[#D9C296c0] shadow-2xl shadow-[#00000070] rounded-3xl p-6 sm:p-10">
                            <h2 className='title pl-2 text-2xl text-[#D9C296]'>Add Tickets</h2>

                            <input type="text" name='title' className="input px-6 w-full border border-[#D9C296] rounded-full" placeholder="Ticket Title" />

                            <div className='flex gap-2'>
                                <input type="text" name='from' className="input px-6 w-full border border-[#D9C296] rounded-full" placeholder="From" />
                                <input type="text" name='to' className="input px-6 w-full border border-[#D9C296] rounded-full" placeholder="To" />
                            </div>

                            <select
                                name='category'
                                defaultValue="Transport Type"
                                className="select w-full border border-[#D9C296] px-6 rounded-full"
                            >
                                <option disabled={true}>Select Transport Type</option>
                                <option value='Bus'>Bus</option>
                                <option value='Launch'>Launch</option>
                                <option value='Plane'>Plane</option>
                                <option value='Helicopter'>Helicopter</option>
                            </select>

                            <input
                                type="number"
                                name='price'
                                className="input px-6 w-full border border-[#D9C296] rounded-full"
                                placeholder="Price (Per Unit)" />

                            <input type="text" name='availableSits' className="input px-6 w-full border border-[#D9C296] rounded-full" placeholder="Available Sits" />

                            <div className='flex gap-2'>
                                <input type="date" name='date' className="input px-6 w-full border border-[#D9C296] rounded-full" placeholder="Date" />
                                <input type="time" name='time' className="input px-6 w-full border border-[#D9C296] rounded-full" placeholder="Time" />
                            </div>

                            <div className="label w-full flex justify-around">
                                <div className='flex gap-2 items-center'>
                                    <input
                                        type="checkbox"
                                        name='Breakfast'
                                        className="checkbox border-2 border-[#D9C296] bg-[#0A2F23] checked:bg-[#D9C296] checked:text-[#0A2F23]"
                                    />
                                    <span className='text-[#D9C296]'>Breakfast</span>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <input
                                        type="checkbox"
                                        name='Meal'
                                        className="checkbox border-2 border-[#D9C296] bg-[#0A2F23] checked:bg-[#D9C296] checked:text-[#0A2F23]"
                                    />
                                    <span className='text-[#D9C296]'>Meal</span>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <input
                                        type="checkbox"
                                        name='Water'
                                        className="checkbox border-2 border-[#D9C296] bg-[#0A2F23] checked:bg-[#D9C296] checked:text-[#0A2F23]"
                                    />
                                    <span className='text-[#D9C296]'>Drinking Water</span>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <input
                                        type="checkbox"
                                        name='Security'
                                        className="checkbox border-2 border-[#D9C296] bg-[#0A2F23] checked:bg-[#D9C296] checked:text-[#0A2F23]"
                                    />
                                    <span className='text-[#D9C296]'>VIP Security</span>
                                </div>
                            </div>

                            <input
                                type="file"
                                name='photoFile'
                                className="file-input file-input-neutral file-input-sm px-6 py-1 w-full rounded-full border border-[#D9C296]" title=''
                            />

                            <button
                                type='submit'
                                className="btn mt-2 bg-[#F7F3E9] shadow-[#F7F3E9] border-transparent rounded-full text-[#0A2F23]"
                            >Confirm Ticket</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddTicket;