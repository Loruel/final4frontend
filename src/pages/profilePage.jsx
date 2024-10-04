import React from 'react'
import { useFunction } from '../context/Context'


export default function ProfilePage() {
  const { user } = useFunction()

  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-xl font-semibold flex flex-col items-center mt-6'>
        Profile
      </h1>
      <div className='w-9/12 mt-6 text-center'>
        <p className='p-3'>
          First Name: {user.f_name}
        </p>
        <p className='border-t border-black p-3'>
          Last Name: {user.l_name}
        </p>
        <p className='border-t border-black p-3'>
          Username: {user.username}
        </p>
        <p className='border-t border-black p-3'>
          Email: {user.email}
        </p>
        <p className='border-t border-black p-3'>
          Rol: {user.rol}
        </p>
        <p className='border-t border-black p-3'>
          Creation date: {user.created_at}
        </p>
      </div>
      <div className='mt-6 flex flex-col items-center'>
        <p className='text-xs text-green-600'>
        //This button does not work
        </p>
        <button className='bg-red-600 text-white w-20 p-1 rounded-lg'>
          Edit
        </button>
      </div>
    </div>
  )
}
