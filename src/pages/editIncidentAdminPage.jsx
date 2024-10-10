import React, { useEffect, useState } from 'react'
import { useFunction } from '../context/Context'
import { useParams } from 'react-router-dom'

export default function EditIncidentAdminPage() {
    const { id } = useParams()
    const { incident, fetchIncidentById, updateIncidentMutation } = useFunction()
    const [status, setStatus] = useState('')

    useEffect(() => {
        if (id) {
            fetchIncidentById(id)
        }
    }, [id, fetchIncidentById])

    if (!incident) return <div>Loading...</div>

    const handleSubmit = (e) => {
        e.preventDefault()
        const id = incident.incident_id
        console.log('status:', status)
        updateIncidentMutation.mutate({ id, status })
    }

    return (
        <div>
            <div className='flex flex-col items-center'>

                <h1 className='text-2xl font-semibold flex flex-col items-center mt-6 mb-4'>
                    Update an existing incident
                </h1>


                <form
                    onSubmit={handleSubmit}
                    className='w-10/12 border-2 border-black rounded-lg p-4 bg-black mb-10'
                    action="">

                    <label htmlFor="">
                        <p className='text-white mb-1'>
                            Title:
                        </p>
                        <p className='text-white ml-4'>
                            {incident.title}
                        </p>
                    </label>

                    <label className='' htmlFor="">
                        <p className='text-white mb-1 mt-3'>
                            Type:
                        </p>
                        <p className='text-white ml-4'>
                            {incident.type}
                        </p>
                    </label>

                    <label className='' htmlFor="">
                        <p className='text-white mb-1 mt-3'>
                            Description:
                        </p>
                        <p className='text-white ml-4'>
                            {incident.description}
                        </p>
                    </label>

                    <label className='' htmlFor="">
                        <p className='text-white mb-1 mt-3'>
                            Photo:
                        </p>
                        <p className='text-white ml-4'>
                            {incident.photo}
                        </p>
                    </label>

                    <label className='' htmlFor="">
                        <p className='text-white mb-1 mt-3'>
                            Status:
                        </p>
                        <p className='text-white ml-4 mb-4'>
                            {incident.status}
                        </p>
                        {/* <input type='text' value={status}
                            onChange={(e) =>
                                setStatus(e.target.value)}
                            className='w-full border-2 border-gray-300 rounded-lg h-10 p-1 flex items-center shadow-sm lg:w-2/3 dark:bg-[#252329]'
                            placeholder={incident?.status || 'Enter status'} /> */}

                        <select
                            value={status}
                            onChange={(e) => {
                                setStatus(e.target.value)
                            }}
                            name='status' id='status'
                            className='border border-gray-300 w-full h-8 rounded-md focus:outline-none bg-white pl-2'>

                            <option value="">change status</option>
                            <option value="earrig">earring</option>
                            <option value="solved">solved</option>

                        </select>

                    </label>

                    <div className='w-full flex justify-center'>
                        <button
                            value={incident.incident_id}
                            className='mt-6 bg-red-600 h-8 w-3/5 rounded-xl font-semibold text-white' type='submit'>
                            Update incident
                        </button>
                    </div>

                </form>

            </div>
        </div>
    )
}
