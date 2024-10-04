import React from 'react'
import { Link } from 'react-router-dom'
import { useFunction } from '../context/Context'



export default function HomePage() {
    const { user, incidents, users } = useFunction()

    const userIncidents = incidents.filter(incident => incident.userId === user?.user_id)

    return (
        <div>

            <div className=''>

                <div className='text-xl font-semibold flex flex-col items-center mt-6 mb-6'>
                    <h2>
                        Welcome back
                    </h2>
                    <h2>
                        {user?.f_name}
                    </h2>
                </div>

                <div className='flex flex-col items-center'>

                    <div className='border-black border w-10/12 rounded-md mb-4'>
                        <h1 className='p-2 font-semibold'>
                            Resolved issues
                        </h1>

                        <div className='flex flex-col items-center text-sm'>
                            {incidents.length > 0 ? (
                                incidents.filter(incident => incident.status === 'solved').length > 0 ? (
                                    incidents.filter(incident => incident.status === 'solved').map((incident) => (
                                        <div key={incident.incident_id} className='flex p-1 border-t border-black w-11/12'>
                                            <figure className='bg-green-400 w-2 rounded-full'></figure>
                                            <p className='ml-2'>
                                                {incident.title}
                                            </p>
                                        </div>
                                    )
                                    )) : (
                                    <p className='w-11/12 ml-2 mb-4 p-1 border-t border-black'>
                                        No incidents solved
                                    </p>
                                )) : (
                                <p className='ml-2 mb-4'>No incidents solved</p>
                            )}
                        </div>

                    </div>

                    {user?.rol === 'user' && (
                        <Link className='w-full flex justify-center' to={'/newincident'}>
                            <button className='bg-red-600 text-white w-10/12 h-9 rounded-full mb-4 font-semibold'>
                                New incident
                            </button>
                        </Link>
                    )}

                    {user?.rol === 'user' && (
                        <div className='border-black border w-10/12 rounded-md mb-4'>
                            <h1 className='p-2 font-semibold'>
                                Your incidents
                            </h1>

                            <div className='flex flex-col items-center text-sm'>
                                {userIncidents.length > 0 ? (
                                    userIncidents.map((incident) => (
                                        <div key={incident.incident_id} className='flex p-1 border-t border-black w-11/12'>
                                            <figure className='bg-red-600 w-2 rounded-full'></figure>
                                            <p className='ml-2'>
                                                {incident.title}
                                            </p>
                                        </div>
                                    ))
                                ) : (
                                    <p className='ml-2 mb-4'>
                                        No incidents found for you
                                    </p>
                                )}

                            </div>

                        </div>
                    )}

                    <div className='border-black border w-10/12 rounded-md mb-4'>
                        <h1 className='p-2 font-semibold'>
                            All incidents
                        </h1>
                        <div className='flex flex-col items-center text-sm'>
                            {incidents.length > 0 ? (
                                incidents.map((incident) => (
                                    <div key={incident.incident_id} className='flex p-1 border-t border-black w-11/12'>
                                        <figure className='bg-yellow-400 w-2 rounded-full'></figure>
                                        <p className='ml-2'>
                                            {incident.title}
                                        </p>
                                    </div>
                                ))
                            ) : (
                                <p className='ml-2 mb-4'>
                                    No incidents found
                                </p>
                            )}
                        </div>
                    </div>

                    {user?.rol === 'user' && (
                        <Link className='w-full flex justify-center' to={'/newincident'}>
                            <button className='bg-red-600 text-white w-10/12 h-9 rounded-full mb-4 font-semibold'>
                                New incident
                            </button>
                        </Link>
                    )}

                </div>

            </div>

        </div>
    )
}
