import React from 'react'
import { Link } from 'react-router-dom'
import { useFunction } from '../context/Context'

export default function MyIncidents() {
    const { user, incidents, deleteIncidentMutation } = useFunction()

    const userIncidents = incidents.filter(incident => incident.userId === user?.user_id)

    const handleDelete = (id) => {
        console.log("Deleting incident with ID:", id)
        deleteIncidentMutation.mutate(id)
    }

    return (
        <div>

            <div className='flex flex-col items-center'>
                <h1 className='text-2xl font-semibold flex flex-col items-center mt-4'>
                    My incidents
                </h1>

                <Link className='w-full flex justify-center mt-3' to={'/newincident'}>
                    <button className='bg-red-600 text-white w-10/12 h-9 rounded-full mb-4 font-semibold'>
                        New incident
                    </button>
                </Link>

                <div className='border-black border w-10/12 rounded-md mt-2 mb-6'>
                    {userIncidents.length > 0 ? (
                        userIncidents.map((incident) => (
                            <div key={incident.incident_id} className='p-1 mb-4'>
                                <div className='flex pl-2 gap-1 text-xs'>
                                    <p>Date:</p>
                                    <p className=''>
                                        {incident.created_at}
                                    </p>
                                </div>
                                <div className='flex p-1'>
                                    <figure className='bg-red-600 w-2 rounded-full ml-1'></figure>
                                    <p className='ml-2'>
                                        {incident.title}
                                    </p>
                                </div>
                                <div className='p-1 flex justify-end mr-4 gap-2'>
                                    <Link to={'/editInsident'}>
                                        <button
                                            value={incident.incident_id}
                                            className='bg-black text-white w-16 h-6 rounded-lg'>
                                            Edit
                                        </button>
                                    </Link>

                                    <button
                                        value={incident.incident_id}
                                        onClick={() => handleDelete(incident.incident_id)}
                                        className='bg-red-600 text-white w-16 h-6 rounded-lg'>
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className='p-1'>
                            No incidents found for you
                        </p>
                    )}

                </div>

            </div>

        </div>
    )
}
