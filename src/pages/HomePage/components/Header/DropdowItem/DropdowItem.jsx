import React from 'react'
import { NavLink } from 'react-router-dom'
import './DropdowItem.scss'


function DropdowItem(props) {
    return (
        <div className='dropdown-item'>
                <NavLink to={props.src} className='nav-link' style={{fontSize: '1.4rem'}}>{props.text}</NavLink>
        </div>
    )
}

export default DropdowItem
