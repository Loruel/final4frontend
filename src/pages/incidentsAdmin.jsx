import React from 'react'
import { useFunction } from '../context/Context'
import { Link } from 'react-router-dom'

export default function IncidentsAdmin() {
    const { incidents } = useFunction()

    return (
        <div>

            <div className='flex flex-col items-center'>
                <h1 className='text-2xl font-semibold flex flex-col items-center mt-4 mb-4'>
                    Instructions
                </h1>

                <div className='border-black border w-10/12 rounded-md mb-4 p-2'>

                    <h1 className='p-2 font-semibold'>
                        All incidents
                    </h1>

                    <div className='flex flex-col items-center text-sm'>
                        {incidents.length > 0 ? (
                            incidents.map((incident) => (
                                <div key={incident.incident_id} className='p-1 border-t border-black w-11/12'>
                                    <div className='w-full p-1'>
                                        <p className='ml-2'>
                                            {incident.title}
                                        </p>
                                        <p className='ml-2 text-xs'>
                                            Date: {incident.created_at}
                                        </p>
                                        <p className='ml-2 font-bold'>
                                            Status: {incident.status}
                                        </p>
                                    </div>
                                    <div className='p-1 ml-2'>
                                        <Link to={'/editInsidentAdmin'}>
                                            <button className=' bg-red-600 rounded-lg w-16 text-white'>
                                                Edit
                                            </button>
                                        </Link>

                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className='ml-2 mb-4'>
                                No incidents found
                            </p>
                        )}
                    </div>
                </div>

            </div>

        </div>
    )
}
