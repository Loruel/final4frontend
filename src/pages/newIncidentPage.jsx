import React from 'react'
import { useFunction } from '../context/Context'

export default function NewIncidentPage() {
    const { createIncidentMutation } = useFunction()

    const handleCreateIncident = async e => {
        e.preventDefault()
        /*  const token = localStorage.getItem('authToken') */

        const title = e.target.title.value.trim();
        const type = e.target.type.value.trim();
        const description = e.target.description.value.trim()

        if (!title || !type || !description) {
            alert("Todos los campos son obligatorios.")
            return;
        }

        const userData = {
            title,
            type,
            description,
        }

        /* console.log('Token:', token);
        console.log('User Data:', userData); */

        await createIncidentMutation.mutate(/* { token, userData } */ userData)
    }

    return (
        <div>


            <div className='flex flex-col items-center'>

                <h1 className='text-2xl font-semibold flex flex-col items-center mt-6'>
                    New incident
                </h1>

                <h2 className='w-10/12 p-2 mb-2 text-center text-sm'>
                    We are very sorry for this event, please help us know what is happening and we will resolve it as soon as possible
                </h2>

                <form
                    onSubmit={handleCreateIncident}
                    className='w-10/12 border-2 border-black rounded-lg p-4 bg-black mb-10'
                    action="">

                    <label htmlFor="">
                        <p className='text-white mb-1'>
                            Title
                        </p>
                        <input
                            className='border border-gray-300 w-full h-8 p-2 rounded-md focus:outline-none'
                            type="text" name='title' id='title' />
                    </label>

                    <label className='' htmlFor="">
                        <p className='text-white mb-1 mt-3'>
                            Type
                        </p>
                        <select
                            name='type' id='type'
                            className='border border-gray-300 w-full h-8 rounded-md focus:outline-none bg-white '>

                            <option value="">Select an option</option>
                            <option value="Plumbing">Plumbing</option>
                            <option value="Painting">Painting</option>
                            <option value="Gardening">Gardening</option>
                            <option value="Elevators">Elevators</option>
                            <option value="Security">Security</option>
                            <option value="Cleaning">Cleaning</option>
                            <option value="Heating">Heating</option>
                            <option value="Air conditioning">Air conditioning</option>
                            <option value="Gas">Gas</option>
                            <option value="Surveillance cameras">Surveillance cameras</option>
                            <option value="Automatic doors">Automatic doors</option>
                            <option value="Exterior lighting">Exterior lighting</option>
                            <option value="Swimming pool">Swimming pool</option>
                            <option value="Irrigation systems">Irrigation systems</option>
                            <option value="Electrical network">Electrical network</option>
                            <option value="Fire protection system">Fire protection system</option>
                            <option value="Public lighting">Public lighting</option>
                            <option value="Common area maintenance">Common area maintenance</option>
                            <option value="Roof repairs">Roof repairs</option>
                            <option value="Waste management">Waste management</option>
                            <option value="Others">Others</option>

                        </select>
                    </label>

                    <label className='' htmlFor="">
                        <p className='text-white mb-1 mt-3'>
                            Description
                        </p>
                        <textarea
                            className='border border-gray-300 w-full h-32 p-2 rounded-md focus:outline-none'
                            type="text" name='description' id='description'>
                        </textarea>
                    </label>

                    <label className='' htmlFor="">
                        <p className='text-white mb-1 mt-3'>
                            Photo
                        </p>
                        <button className='bg-white border border-gray-300 w-full h-8 rounded-md flex justify-center items-center gap-2'>
                            <figure>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                </svg>
                            </figure>
                            <p>
                                Save photo
                            </p>
                        </button>
                    </label>

                    <div className='w-full flex justify-center'>
                        <button className='mt-6 bg-red-600 h-8 w-3/5 rounded-xl font-semibold text-white'>
                            Save incident
                        </button>
                    </div>

                </form>

            </div>


        </div>
    )
}
