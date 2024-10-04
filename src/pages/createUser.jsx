import React from 'react'
import { useFunction } from '../context/Context'

export default function CreateUser() {
    const { registerUserMutation } = useFunction()

    const handleRegister = async e => {
        e.preventDefault()
        const data = {
            fname: e.target.fname.value,
            lname: e.target.lname.value,
            username: e.target.username.value,
            email: e.target.email.value,
            rol: e.target.rol.value,
        }
        await registerUserMutation.mutate(data)
    }

    return (
        <div className='flex flex-col w-full  justify-center items-center bg-white'>

            <h1 className='mb-4 mt-4 text-xl font-semibold'>
                Register new user
            </h1>

            <p className='text-xs text-center w-9/12 mb-4'>
                Dear administrator, we ask that you fill out all the fields with the information provided by the tenant.
            </p>

            <div className='w-10/12 border-2 border-black rounded-lg p-4 bg-black mb-6'>

                <div>
                    <form
                        onSubmit={handleRegister}
                        className='flex flex-col'
                        action="">

                        <label htmlFor="">
                            <p className='text-white mb-1'>
                                First Name
                            </p>
                            <input
                                className='border border-gray-300 w-full h-8 p-2 rounded-md focus:outline-none'
                                type="text" name='fname' id='fname' />
                        </label>

                        <label className='mt-2' htmlFor="">
                            <p className='text-white mb-1'>
                                Last name
                            </p>
                            <input
                                className='border border-gray-300 w-full h-8 p-2 rounded-md focus:outline-none'
                                type="text" name='lname' id='lname' />
                        </label>

                        <label className='mt-2' htmlFor="">
                            <p className='text-white mb-1'>
                                Username
                            </p>
                            <input
                                className='border border-gray-300 w-full h-8 p-2 rounded-md focus:outline-none'
                                type="text" name='username' id='username' />
                        </label>

                        <label className='mt-2' htmlFor="">
                            <p className='text-white mb-1'>
                                Email
                            </p>
                            <input
                                className='border border-gray-300 w-full h-8 p-2 rounded-md focus:outline-none'
                                type="text" name='email' id='email'/>
                        </label>

                        <label className='mt-2' htmlFor="">
                            <p className='text-white mb-1'>
                                Password
                            </p>
                            <input
                                className='border border-gray-300 w-full h-8 p-2 rounded-md focus:outline-none' readOnly
                                type="text" placeholder='**********' />
                        </label>

                        <label className='' htmlFor="">
                            <p className='text-white mb-1 mt-3'>
                                Role
                            </p>
                            <select
                                name='rol' id='rol'
                                className='border border-gray-300 w-full h-8 rounded-md focus:outline-none bg-white '>

                                <option value="">Select an option</option>
                                <option value="user">User</option>
                                <option value="admin">Admin</option>

                            </select>
                        </label>


                        <div className='w-full flex justify-center'>

                            <button className='mt-6 bg-white h-8 w-3/5 rounded-xl font-semibold'>
                                Create acount
                            </button>

                        </div>


                    </form>
                </div>

            </div>

        </div>
    )
}
