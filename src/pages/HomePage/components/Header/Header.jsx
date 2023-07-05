import React from 'react'
import logo from '/img/airbnb.jpg'
import './Header.scss'
import { NavLink } from 'react-router-dom'
import { MagnifyingGlassIcon, Bars3Icon, UserCircleIcon, GlobeAltIcon } from '@heroicons/react/24/solid'
function Header() {
    return (
        <header className='header-container d-flex justify-content-between align-items-center' >
            <div className="header-logo">
                <NavLink to={'/'}>
                    <img className='logo-img w-50' src={logo} alt="logo" />
                </NavLink>
            </div>

            <div className='d-flex search-container bg-white align-items-center'>
                <input type="text" placeholder='Search place' className='text-center' style={{outline: 'none ',border: 'none'}}/>
                <NavLink to={'/'} className="d-none d-md-inline-flex  search-icon text-black  ">
                    <MagnifyingGlassIcon />
                </NavLink>
            </div>
            <div className='header-user d-flex justify-content-end align-items-center '>
                <p>Đón tiếp khách</p>
                <GlobeAltIcon className='global-icon text-black' />
                
                <div className='menu-user d-flex justify-content-between px-2 py-1'>
                    <Bars3Icon className='menu-icon' />
                    <UserCircleIcon className='user-circle-icon'/>
                </div>

            </div>

        </header>
    )
}

export default Header