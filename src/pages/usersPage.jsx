import React from 'react'
import { Link } from 'react-router-dom'
import { useFunction } from '../context/Context'

export default function UsersPage() {
    const { users } = useFunction()

    return (
        <div>

            <div className='flex flex-col items-center'>
                <h1 className='text-2xl font-semibold flex flex-col items-center mt-4'>
                    Users
                </h1>

                <Link className='w-full flex justify-center mt-3' to={'/createuser'}>
                    <button className='bg-red-600 text-white w-10/12 h-9 rounded-full mb-4 font-semibold'>
                        New user
                    </button>
                </Link>

                <div className='border-black border w-10/12 rounded-md mt-2 p-4'>
                    {users.length > 0 ? (
                        users.map((user) => (
                            <div key={user.user_id} className='mb-4'>
                                <div className='flex'>
                                    <div className='w-5/6 flex'>
                                        <p>
                                            {user.f_name}

                                        </p>
                                        <p className='ml-1'>
                                            {user.l_name}

                                        </p>
                                    </div>
                                    {/* <div className='w-1/3 flex justify-end'>
                                        <button className='bg-red-600 text-white w-16 h-6 rounded-lg'>
                                            Delete
                                        </button>
                                    </div> */}
                                </div>
                                <div className='flex text-xs italic'>
                                    <p className=''>
                                        Rol:
                                    </p>
                                    <p className='ml-2'>
                                        {user.rol}
                                    </p>
                                </div>
                                <div className='flex text-xs italic'>
                                    <p>
                                        Created:
                                    </p>
                                    <p className='ml-1'>
                                        {user.created_at}
                                    </p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className='ml-2 mb-4'>
                            No users found
                        </p>
                    )}




                </div>

            </div>

        </div>
    )
}
