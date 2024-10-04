import React from 'react'
import { useFunction } from '../context/Context'
import ModalProfile from '../components/modalProfile'
import { Link, Outlet } from 'react-router-dom'

export default function NavPage() {
    const { toggleModal } = useFunction()

    return (
        <div>
            <nav className='w-full h-14 bg-black flex justify-end items-center'>

                <div className='w-full ml-4'>
                    <Link to={'/home'}>
                        <svg width="44px" height="64px" viewBox="0 0 1024 1024" className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M706.4 482.2v362.1c0 61.5-49.9 111.3-111.4 111.3H260.8c-61.5 0-111.4-49.8-111.4-111.5V176c0-61.6 49.9-111.5 111.4-111.5H595c61.5 0 111.4 50.1 111.4 111.3v139.3h83.5c46.2 0 83.5 37.2 83.5 83.5 0 46.2-37.3 83.5-83.5 83.5h-83.5v0.1z" fill="#000000"></path><path d="M400.1 398.7c0 15.5 12.4 27.8 27.9 27.8h362c15.5 0 27.9-12.4 27.9-27.8 0-15.5-12.4-27.8-27.9-27.8H428c-15.6-0.1-27.9 12.3-27.9 27.8z" fill="#FFFFFF"></path><path d="M539.3 315.1c-25.7-34.2-66.5-55.7-111.4-55.7-76.9 0-139.2 62.3-139.2 139.2S351 537.9 427.9 537.9c44.9 0 85.7-21.5 111.4-55.7H427.9c-46.2 0-83.5-37.2-83.5-83.5 0-46.2 37.3-83.5 83.5-83.5h111.4v-0.1z" fill="#FFFFFF"></path><path d="M650.7 315.1V175.8c0-30.6-25-55.6-55.7-55.6H260.8c-30.7 0-55.7 25-55.7 55.8v668.1c0 30.9 24.9 55.8 55.7 55.8H595c30.7 0 55.7-24.9 55.7-55.6V482.2h-78c-28.9 49.9-82.9 83.5-144.7 83.5-92.3 0-167.1-74.8-167.1-167.1S335.7 231.5 428 231.5c61.8 0 115.8 33.6 144.7 83.5h78v0.1z" fill="#FFFFFF"></path><path d="M427.9 788.6c-46.1 0-83.5-37.4-83.5-83.5s37.4-83.5 83.5-83.5 83.5 37.4 83.5 83.5c0 46-37.4 83.5-83.5 83.5z" fill="#000000"></path><path d="M427.9 760.7c30.8 0 55.7-24.9 55.7-55.7s-24.9-55.7-55.7-55.7c-30.8 0-55.7 24.9-55.7 55.7 0 30.8 24.9 55.7 55.7 55.7z" fill="#FFFFFF"></path></g></svg>
                    </Link>
                </div>

                <figure className='flex justify-center items-center w-10 h-10 mr-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-7">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                    </svg>
                </figure>

                <figure className='flex justify-center items-center w-10 h-10 mr-6'
                    onClick={toggleModal}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-7">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>

                </figure>
            </nav>

            <ModalProfile />

            <Outlet />
        </div>
    )
}
